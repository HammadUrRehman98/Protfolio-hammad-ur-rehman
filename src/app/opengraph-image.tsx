import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/config/site';

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Required by `output: 'export'`. Bakes the PNG at build time instead of
// generating it per request.
export const dynamic = 'force-static';

const PAPER = '#FAF8F3';
const INK = '#191610';
const MUTED = '#6B6459';
const ACCENT = '#9E3B26';

/**
 * Satori can't use the CSS-loaded webfonts, so the display face is fetched as a
 * TTF at build time. Google only serves TTF to an old User-Agent; a modern one
 * gets woff2, which Satori cannot parse.
 *
 * If the fetch fails the card still renders in the build's default sans, and a
 * plainer card is a far better outcome than a failed deploy.
 */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1)' } },
    ).then((r) => r.text());

    const url = css.match(/src:\s*url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

/**
 * Satori has no network access to /public during the build, so the portrait is
 * read off disk and inlined as a data URI. A missing file just drops the plate.
 */
async function loadPortrait(): Promise<string | null> {
  try {
    const bytes = await readFile(join(process.cwd(), 'public', 'hammad-ur-rehman-og.jpg'));
    return `data:image/jpeg;base64,${bytes.toString('base64')}`;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [font, portrait] = await Promise.all([loadDisplayFont(), loadPortrait()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: PAPER,
          padding: '68px 76px',
          fontFamily: font ? 'Instrument Serif' : 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 21,
            letterSpacing: 3,
            color: MUTED,
            textTransform: 'uppercase',
          }}
        >
          {site.role} · {site.location.city}, {site.location.country}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%', height: 4, background: INK }} />
          <div
            style={{ display: 'flex', width: '100%', height: 1, background: INK, marginTop: 4 }}
          />
          {/* circle in front of the name, matching the hero */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginTop: 34 }}>
            {portrait ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={portrait}
                alt=""
                width={140}
                height={140}
                style={{ borderRadius: 70, objectFit: 'cover', border: `2px solid ${INK}` }}
              />
            ) : null}
            <div
              style={{
                display: 'flex',
                fontSize: 92,
                color: INK,
                letterSpacing: -3,
                lineHeight: 1,
              }}
            >
              {site.name}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 26,
              fontSize: 38,
              color: MUTED,
              maxWidth: 860,
              lineHeight: 1.3,
            }}
          >
            I build systems that read thousands of documents so people don&rsquo;t have to.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', width: 44, height: 8, background: ACCENT }} />
          <div style={{ display: 'flex', fontSize: 21, color: MUTED, letterSpacing: 1 }}>
            Multi-agent systems · Document automation · Production AI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(font
        ? { fonts: [{ name: 'Instrument Serif', data: font, style: 'normal', weight: 400 }] }
        : {}),
    },
  );
}
