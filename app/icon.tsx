import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 36,
          background: '#0070f3',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 900,
          fontStyle: 'italic',
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  )
}
