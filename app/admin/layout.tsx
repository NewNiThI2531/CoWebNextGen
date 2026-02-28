import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import Sidebar from "@/components/admin/Sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  let role = "WEBEDITOR"

  if (token) {
    try {
      const decoded: any = jwt.verify(
        token,
        process.env.JWT_SECRET!
      )
      role = decoded.role
    } catch {}
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}