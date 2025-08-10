// app/api/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const dummyUser = {
    id: '1',
    email: 'test@example.com',
    passwordHash: '$2b$12$uPhf37pMXhmy5iPReKEl6uHq1f38N40dghq8/Id1ZSlvU3HZog9wK', // "password"
    role: 'admin' // can be 'superadmin', 'admin', or 'user'
};

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if (email !== dummyUser.email) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, dummyUser.passwordHash);
    if (!isValid) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
        { id: dummyUser.id, email: dummyUser.email, role: dummyUser.role },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
    );

    const res = NextResponse.json({ message: 'Logged in successfully' });
    res.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 7
    });

    return res;
}

