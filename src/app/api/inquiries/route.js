import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');
const SECRET_TOKEN = process.env.ADMIN_SECRET_TOKEN || 'ksp_sec_auth_token_98741';

function readInquiries() {
  try {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error('Error reading inquiries:', err);
    return [];
  }
}

function writeInquiries(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing inquiries:', err);
    return false;
  }
}

// GET all inquiries
export async function GET(request) {
  const inquiries = readInquiries();
  return NextResponse.json({ success: true, data: inquiries });
}

// PUT: update status
export async function PUT(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${SECRET_TOKEN}`) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    const inquiries = readInquiries();
    const index = inquiries.findIndex((i) => i.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Pesan tidak ditemukan' }, { status: 404 });
    }
    inquiries[index].status = status;
    writeInquiries(inquiries);
    return NextResponse.json({ success: true, data: inquiries[index] });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// DELETE inquiry
export async function DELETE(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${SECRET_TOKEN}`) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
  }

  const inquiries = readInquiries();
  const filtered = inquiries.filter((i) => i.id !== id);
  writeInquiries(filtered);
  return NextResponse.json({ success: true, message: 'Pesan berhasil dihapus' });
}
