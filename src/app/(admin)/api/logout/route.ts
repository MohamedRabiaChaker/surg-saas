
import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ message: 'Logged out' });

    console.log('Logging out user, clearing cookies');
    response.cookies.set('token', '', {
        path: '/',
        expires: new Date(0), // Unix epoch, effectively deleting the cookie
    });

    return response;
}
