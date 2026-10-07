import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          padding: '74px 82px',
          backgroundColor: '#ffffff',
          color: '#0a0a0a',
          border: '1px solid #e5e5e5',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#0a0a0a',
              transform: 'rotate(45deg)',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: '54px', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-1.5px' }}>
            Tharun Pranav Sakthivel
          </div>
          <div style={{ fontSize: '28px', lineHeight: 1.2, color: '#737373', fontWeight: 400 }}>
            AI Engineer
          </div>
        </div>
        <div style={{ fontSize: '18px', lineHeight: 1, color: '#737373', fontFamily: 'monospace', letterSpacing: '1px' }}>
          thrn.im
        </div>
      </div>
    ),
    size,
  );
}
