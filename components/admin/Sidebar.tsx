"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { adminMenu } from "@/lib/admin-menu"
import { hasPermission } from "@/lib/permissions"

export default function Sidebar({ role }: { role: string }) {
  const pathname = usePathname()

  const filteredMenu = adminMenu.filter((item) => {
    if (role === "MANAGER") return true
    return hasPermission(role as any, item.permission)
  })

  return (
    <div className="w-64 bg-gray-100 p-4 space-y-2">
      {filteredMenu.map((item) => {
        const isActive = pathname.startsWith(item.path)

        return (
          <Link key={item.path} href={item.path}>
            <div
              className={`p-2 rounded cursor-pointer transition ${
                isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.label}
            </div>
          </Link>
        )
      })}
    </div>
  )
}