import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            台灣郵遞區號查詢
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#a0a0a0",
              marginBottom: "40px",
            }}
          >
            use-tw-zipcode Demo
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#ffffff",
              fontSize: "24px",
            }}
          >
            <span>GitHub: @imgarylai</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
