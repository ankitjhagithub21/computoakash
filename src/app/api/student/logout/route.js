import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = cookies();
  cookieStore.set({
    name: 'token',
    value: '',
    path: '/',
    maxAge: 0,
  });

  return NextResponse.json({ message: 'Logged out successfully' });
}
