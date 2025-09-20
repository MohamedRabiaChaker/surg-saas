import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { getUserById, getOrganizationById } from "@/lib/users";

export async function GET(req: Request) {
  try {
    // Get token from cookies
    const cookieHeader = req.headers.get('cookie');
    if (!cookieHeader) {
      return NextResponse.json({ error: "No authentication token" }, { status: 401 });
    }

    // Extract token from cookie string
    const tokenMatch = cookieHeader.match(/token=([^;]*)/);
    if (!tokenMatch) {
      return NextResponse.json({ error: "No authentication token" }, { status: 401 });
    }

    const token = tokenMatch[1];

    // Verify JWT token
    let userId: string;
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      const { payload } = await jwtVerify(token, secret);
      
      userId = payload.id as string;
      if (!userId) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }
    } catch (jwtError) {
      console.error('JWT verification failed:', jwtError);
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Get user data
    const user = getUserById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get organization data
    const organization = getOrganizationById(user.organizationId);

    // Return user data (without password)
    const userData = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      avatar: user.avatar,
      organizationId: user.organizationId,
      organization: organization?.name,
      department: user.department,
      specialization: user.specialization,
      yearOfStudy: user.yearOfStudy,
      studentId: user.studentId,
    };

    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error getting user data:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
