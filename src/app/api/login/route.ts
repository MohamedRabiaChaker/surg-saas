// app/api/login/route.ts
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { authenticateUser, getOrganizationById } from "@/lib/users";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    // Authenticate user using our static user system
    const user = authenticateUser(email, password);

    if (!user) {
      console.log(`Authentication failed for email: ${email}`);
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Check if user account is active
    if (!user.isActive) {
      console.log(`Login attempt for inactive user: ${email}`);
      return NextResponse.json(
        { error: "Account is deactivated" },
        { status: 401 },
      );
    }

    // Get user's organization information
    const organization = getOrganizationById(user.organizationId);
    if (!organization || !organization.isActive) {
      console.log(
        `Login attempt for user with inactive organization: ${email}`,
      );
      return NextResponse.json(
        { error: "Organization is not active" },
        { status: 401 },
      );
    }

    // Create JWT token with comprehensive user information
    const tokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const token = await new SignJWT(tokenPayload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(secret);

    console.log(`Successful login for user: ${email} (${user.role})`);

    // Return success response with user info (excluding sensitive data)
    const res = NextResponse.json({
      message: "Logged in successfully",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        organizationId: user.organizationId,
        organization: organization.name,
      },
    });

    // Set secure HTTP-only cookie
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
