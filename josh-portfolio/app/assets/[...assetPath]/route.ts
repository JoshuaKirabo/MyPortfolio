import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const ASSETS_ROOT = path.join(process.cwd(), "..", "perez-tailwindcss", "assets");

const CONTENT_TYPES: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ assetPath: string[] }> },
) {
  const { assetPath } = await params;
  const requested = path.resolve(ASSETS_ROOT, ...assetPath);

  if (!requested.startsWith(ASSETS_ROOT)) {
    return new NextResponse("Invalid asset path", { status: 400 });
  }

  try {
    const fileBuffer = await readFile(requested);
    const extension = path.extname(requested).toLowerCase();
    const contentType = CONTENT_TYPES[extension] ?? "application/octet-stream";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Asset not found", { status: 404 });
  }
}
