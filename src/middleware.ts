import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const roleHierarchy = ['user', 'admin', 'superadmin'];

function hasRequiredRole(userRole: string, requiredRole: string) {
    return roleHierarchy.indexOf(userRole) >= roleHierarchy.indexOf(requiredRole);
}

export async function middleware(req: NextRequest) {
    const publicPaths = ['/unauthorized', '/signin', '/signup'];
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
    console.log('Token found, verifying...');

    try {
        // jose expects the secret as a Uint8Array or CryptoKey
        const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

        const { payload } = await jwtVerify(token, secret);
        console.log(`Decoded token: ${JSON.stringify(payload)}`);

        const routeRoles: Record<string, string> = {
            '/dashboard': 'user',
            '/admin': 'admin',
            '/line-chart': 'superadmin',
        };

        for (const [route, requiredRole] of Object.entries(routeRoles)) {
            if (pathname.startsWith(route) && !hasRequiredRole(payload.role as string, requiredRole)) {
                console.log(`Checking route: ${route} with required role: ${requiredRole}`);
                return NextResponse.redirect(new URL('/unauthorized', req.url));
            }
        }

        return NextResponse.next();
    } catch (error) {
        console.error('Token verification failed:', error);
        return NextResponse.redirect(new URL('/signin', req.url));
    }
}

export const config = {
    matcher: [
        '/((?!api|trpc|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)',
    ],
};

