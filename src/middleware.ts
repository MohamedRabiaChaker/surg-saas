// middleware.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server';

const roleHierarchy = ['user', 'admin', 'superadmin'];

function hasRequiredRole(userRole: string, requiredRole: string) {
    return roleHierarchy.indexOf(userRole) >= roleHierarchy.indexOf(requiredRole);
}

export function middleware(req: NextRequest) {
    const publicPaths = ['/unauthorized', '/signin', '/signup',];
    const { pathname } = req.nextUrl;
    console.log(`Middleware triggered for path: ${pathname}`);

    // Skip middleware for public pages and API routes
    if (
        publicPaths.includes(pathname) ||
        pathname.startsWith('/api') ||
        pathname === '/'
    ) {
        console.log(`Skipping middleware for public path: ${pathname}`);
        return NextResponse.next();
    }

    const token = req.cookies.get('token')?.value;
    if (!token) {
        console.log('No token found, redirecting to login');
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { role: string };

        // Example route → required role mapping
        const routeRoles: Record<string, string> = {
            '/dashboard': 'user',
            '/admin': 'admin',
            '/superadmin': 'superadmin'
        };

        for (const [route, requiredRole] of Object.entries(routeRoles)) {
            if (pathname.startsWith(route) && !hasRequiredRole(decoded.role, requiredRole)) {
                return NextResponse.redirect(new URL('/unauthorized', req.url));
            }
        }

        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL('/signin', req.url));
    }
}

export const config = {
    matcher: [
        '/((?!api|trpc|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)',
    ],
};
