import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "HiQ-Apps | Software Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [floraFlame, goodStandard] = await Promise.all([
  readFile(join(process.cwd(), "public/og/flora-flame.jpg"), "base64"),
  readFile(join(process.cwd(), "public/og/good-standard.jpg"), "base64"),
]);

const floraFlameSrc = `data:image/jpeg;base64,${floraFlame}`;
const goodStandardSrc = `data:image/jpeg;base64,${goodStandard}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #FAF7F1 0%, #F1EBDC 55%, #E4EFE8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 540,
            padding: "0 0 0 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#1F6B52",
              fontWeight: 600,
            }}
          >
            HiQ-Apps
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 60,
              lineHeight: 1.08,
              fontWeight: 700,
              color: "#2B2420",
              marginTop: 20,
              maxWidth: 480,
            }}
          >
            High-quality software, built with intent.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "#5A5148",
              marginTop: 24,
              maxWidth: 440,
            }}
          >
            Senior engineering and design, at studio-friendly rates.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: 60,
              left: 40,
              width: 430,
              transform: "rotate(-4deg)",
            }}
          >
            <img
              src={floraFlameSrc}
              width={430}
              height={301}
              style={{
                borderRadius: 16,
                border: "6px solid #FFFFFF",
                boxShadow: "0 30px 60px rgba(43,36,32,0.35)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: 250,
              left: 250,
              width: 430,
              transform: "rotate(3deg)",
            }}
          >
            <img
              src={goodStandardSrc}
              width={430}
              height={301}
              style={{
                borderRadius: 16,
                border: "6px solid #FFFFFF",
                boxShadow: "0 30px 60px rgba(43,36,32,0.35)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
