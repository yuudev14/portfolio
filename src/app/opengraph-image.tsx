import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Yu Takaki — Full Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0e14",
          color: "#e6edf3",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#f16565" }} />
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#7298c6" }} />
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#12ffb0" }} />
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#7298c6" }}>
          $ whoami
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, marginTop: 20 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#12ffb0", marginTop: 10 }}>
          {profile.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
