import { NextResponse } from 'next/server';

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'AdminKotaSatu2026!';
const SECRET_TOKEN = process.env.ADMIN_SECRET_TOKEN || 'ksp_sec_auth_token_98741';

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      return NextResponse.json({
        success: true,
        message: 'Autentikasi berhasil',
        token: SECRET_TOKEN,
        user: { username: ADMIN_USER, role: 'Super Admin' }
      });
    }

    return NextResponse.json(
      { success: false, message: 'Username atau password salah!' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan sistem' },
      { status: 500 }
    );
  }
}
