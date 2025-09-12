// Vercel Serverless Function: /api/inquiry
// Proxies form submissions to Google Apps Script endpoint and returns JSON

import type { VercelRequest, VercelResponse } from '@vercel/node';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx0t6iV15dOgCDSzsXr8OoRkEGoxc6ljfBklUvcsfc3pGFDrl3rwasrdmuztsji1HFs/exec';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Basic CORS support for same-origin SPA and potential external origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const {
      fullName,
      email,
      phone,
      company,
      serviceRequired,
      projectDetails,
    } = (req.body as any) || {};

    if (!fullName || !email || !projectDetails) {
      return res
        .status(400)
        .json({ ok: false, error: 'fullName, email, projectDetails are required' });
    }

    const payload = {
      fullName,
      email,
      phone: phone ?? '',
      company: company ?? '',
      serviceRequired: serviceRequired ?? '',
      projectDetails,
      sourceIp:
        (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
        (req.socket as any)?.remoteAddress ||
        '',
      userAgent: (req.headers['user-agent'] as string) || '',
    };

    const r = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Try JSON first, then fall back to text to capture HTML error pages like "Unauthorized"
    let data: any = null;
    try {
      data = await r.json();
    } catch {
      const txt = await r.text();
      if (!r.ok) {
        return res.status(r.status).json({ ok: false, error: txt?.slice(0, 500) || 'Apps Script error' });
      }
      // If ok but not JSON, still attempt to treat as success if includes ok:true
      if (txt?.toLowerCase().includes('ok')) {
        return res.status(200).json({ ok: true });
      }
      return res.status(500).json({ ok: false, error: 'Invalid response from Apps Script' });
    }

    if (!r.ok || !data?.ok) {
      return res.status(r.status || 500).json({ ok: false, error: data?.error || 'Apps Script error' });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: err?.message || 'Server error' });
  }
}


