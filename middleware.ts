import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"
import { hasPermission } from "@/lib/permissions"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ไม่ใช่ admin → ผ่าน
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  // ✅ อนุญาต login page เสมอ
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next()
  }

  const token = request.cookies.get("token")?.value

  if (!token) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    )
  }

  try {
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    )

    const role = decoded.role

    // ใส่ RBAC logic ตรงนี้

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    )
  }
}

export const config = {
  matcher: ["/admin/:path*"],
}