import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Define role hierarchy and permissions
const roleHierarchy = ['student', 'teacher', 'admin'];

function hasRequiredRole(userRole: string, requiredRole: string) {
    return roleHierarchy.indexOf(userRole) >= roleHierarchy.indexOf(requiredRole);
}

// Define route access rules
const routeRoles: Record<string, string> = {
    // Student routes (accessible to all authenticated users)
    '/home': 'student',
    '/training': 'student', 
    '/progress': 'student',
    '/calendar': 'student',
    '/profile': 'student',
    
    // Teacher routes (accessible to teachers and admins)
    '/teacher': 'teacher',
    '/teacher/dashboard': 'teacher',
    '/teacher/students': 'teacher',
    '/teacher/analytics': 'teacher',
    
    // Admin routes (accessible only to admins)
    '/admin': 'admin',
    '/admin/dashboard': 'admin',
    '/admin/users': 'admin',
    '/admin/settings': 'admin',
    '/admin/organizations': 'admin',
    
    // Legacy routes - map to appropriate roles
    '/form-elements': 'student',
    '/basic-tables': 'teacher',
    '/line-chart': 'teacher',
    '/bar-chart': 'teacher',
    '/alerts': 'student',
    '/avatars': 'student',
    '/badge': 'student',
    '/buttons': 'student',
    '/images': 'student',
    '/videos': 'student',
};

// Role-based home redirects
const roleHomePaths = {
    student: '/home',
    teacher: '/teacher/dashboard', 
    admin: '/admin/dashboard',
};

export async function middleware(req: NextRequest) {
  const publicPaths = ["/unauthorized", "/signin", "/signup"];
  const { pathname } = req.nextUrl;
  console.log(`Middleware triggered for path: ${pathname}`);

  // Skip middleware for public pages, API routes, and landing page
  if (
    publicPaths.includes(pathname) ||
    pathname.startsWith("/api") ||
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/assets")
  ) {
    console.log(`Skipping middleware for public path: ${pathname}`);
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  if (!token) {
    console.log("No token found, redirecting to login");
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  console.log("Token found, verifying...");

  try {
    // jose expects the secret as a Uint8Array or CryptoKey
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

    const { payload } = await jwtVerify(token, secret);
    console.log(`Decoded token: ${JSON.stringify(payload)}`);

    const userRole = payload.role as string;

    // Check if user is trying to access root authenticated routes and redirect to their role-specific home
    if (pathname === "/dashboard" || pathname === "/home") {
      const roleHome = roleHomePaths[userRole as keyof typeof roleHomePaths];
      if (roleHome && pathname !== roleHome) {
        console.log(`Redirecting ${userRole} from ${pathname} to ${roleHome}`);
        return NextResponse.redirect(new URL(roleHome, req.url));
      }
    }

    // Check route access permissions
    let hasAccess = false;

    // Check exact path matches first
    if (routeRoles[pathname]) {
      hasAccess = hasRequiredRole(userRole, routeRoles[pathname]);
    } else {
      // Check path prefixes for nested routes
      for (const [route, requiredRole] of Object.entries(routeRoles)) {
        if (pathname.startsWith(route)) {
          hasAccess = hasRequiredRole(userRole, requiredRole);
          break;
        }
      }
    }

    // If no specific rule found, allow access to authenticated users
    if (
      !hasAccess &&
      Object.keys(routeRoles).some((route) => pathname.startsWith(route))
    ) {
      console.log(`Access denied for ${userRole} to ${pathname}`);
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

export const config = {
    matcher: [
        '/((?!api|trpc|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)',
    ],
};

