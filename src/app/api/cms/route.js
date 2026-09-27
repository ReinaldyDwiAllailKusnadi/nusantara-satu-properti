import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'cms.json');
const SECRET_TOKEN = process.env.ADMIN_SECRET_TOKEN || 'ksp_sec_auth_token_98741';

function isAuthorized(request) {
  const auth = request.headers.get('authorization');
  return auth === `Bearer ${SECRET_TOKEN}`;
}

function readData() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return { berita: [], csr: [], karir: [], tataKelola: [] };
    }
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading CMS data:', error);
    return { berita: [], csr: [], karir: [], tataKelola: [] };
  }
}

function writeData(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing CMS data:', error);
    return false;
  }
}

// GET /api/cms?type=berita|csr|karir|tataKelola
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const allData = readData();

  if (type && allData[type]) {
    return NextResponse.json({ success: true, data: allData[type] });
  }

  return NextResponse.json({ success: true, data: allData });
}

// POST /api/cms (Create new item)
export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized: Akses ditolak. Harap login sebagai admin.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json({ success: false, error: 'Type and data are required' }, { status: 400 });
    }

    const allData = readData();
    if (!allData[type]) {
      allData[type] = [];
    }

    const newItem = {
      ...data,
      id: data.id || `${type}-${Date.now()}`
    };

    // Prepend to show newest first for news/csr/careers
    allData[type].unshift(newItem);
    writeData(allData);

    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PUT /api/cms (Update existing item)
export async function PUT(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized: Akses ditolak. Harap login sebagai admin.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { type, id, data } = body;

    if (!type || !id || !data) {
      return NextResponse.json({ success: false, error: 'Type, id, and data are required' }, { status: 400 });
    }

    const allData = readData();
    if (!allData[type]) {
      return NextResponse.json({ success: false, error: 'Type not found' }, { status: 404 });
    }

    const index = allData[type].findIndex((item) => item.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Item not found' }, { status: 404 });
    }

    allData[type][index] = { ...allData[type][index], ...data, id };
    writeData(allData);

    return NextResponse.json({ success: true, data: allData[type][index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE /api/cms?type=berita&id=123 (or via body)
export async function DELETE(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized: Akses ditolak. Harap login sebagai admin.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    let type = searchParams.get('type');
    let id = searchParams.get('id');

    if (!type || !id) {
      try {
        const body = await request.json();
        type = body.type;
        id = body.id;
      } catch (e) {
        // ignore body parse error
      }
    }

    if (!type || !id) {
      return NextResponse.json({ success: false, error: 'Type and id are required' }, { status: 400 });
    }

    const allData = readData();
    if (!allData[type]) {
      return NextResponse.json({ success: false, error: 'Type not found' }, { status: 404 });
    }

    allData[type] = allData[type].filter((item) => item.id !== id);
    writeData(allData);

    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
