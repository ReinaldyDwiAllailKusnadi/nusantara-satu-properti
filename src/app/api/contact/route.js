import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Harap lengkapi semua kolom yang wajib diisi.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Format alamat email tidak valid.' },
        { status: 400 }
      );
    }

    // Save to src/data/inquiries.json
    const fs = await import('fs');
    const path = await import('path');
    const inqFilePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');

    const inquiryRecord = {
      id: 'INQ-' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      interest: interest || 'The Amaya Home Resort',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      status: 'BARU'
    };

    try {
      let existing = [];
      if (fs.existsSync(inqFilePath)) {
        existing = JSON.parse(fs.readFileSync(inqFilePath, 'utf8'));
      }
      existing.unshift(inquiryRecord);
      fs.writeFileSync(inqFilePath, JSON.stringify(existing, null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Failed to write inquiry:', fsErr);
    }

    console.log('[Inquiry Received]:', inquiryRecord);

    return NextResponse.json(
      {
        success: true,
        message: 'Pesan Anda telah berhasil kami terima. Tim kami akan segera menghubungi Anda.',
        data: {
          id: inquiryRecord.id,
          timestamp: inquiryRecord.timestamp
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan sistem saat memproses pesan Anda.' },
      { status: 500 }
    );
  }
}
