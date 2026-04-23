import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "AspireAI Solutions";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Abstract Background Decoration */}
        <div 
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "40%",
            height: "80%",
            background: "rgba(0, 212, 255, 0.1)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
        <div 
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "40%",
            height: "80%",
            background: "rgba(255, 107, 53, 0.05)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: "84px",
              fontWeight: "900",
              color: "#7A9BBE",
              letterSpacing: "-0.05em",
            }}
          >
            Aspire
          </span>
          <span
            style={{
              fontSize: "84px",
              fontWeight: "900",
              color: "#00D4FF",
              marginLeft: "4px",
              letterSpacing: "-0.05em",
            }}
          >
            AI
          </span>
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#E8F4FD",
            opacity: 0.8,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Where AI Meets Possibilities
        </div>
        
        <div 
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "#7A9BBE",
          }}
        >
          aspireaisolutions.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
