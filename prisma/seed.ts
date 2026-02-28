import { PrismaClient, Role } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const admins = [
  {
    email: "manager@company.com",
    password: "P@ssw0rd",
    role: Role.MANAGER,
  },
  {
    email: "web@company.com",
    password: "P@ssw0rd",
    role: Role.WEBEDITOR,
  },
  {
    email: "hr@company.com",
    password: "P@ssw0rd",
    role: Role.HR,
  },
  {
    email: "sale@company.com",
    password: "P@ssw0rd",
    role: Role.SALE,
  },
]

  for (const admin of admins) {
    const hashedPassword = await bcrypt.hash(admin.password, 10)

    await prisma.user.upsert({
      where: { email: admin.email },
      update: {},
      create: {
        email: admin.email,
        password: hashedPassword,
        role: admin.role,
      },
    })
  }

  console.log("🔥 Admins seeded successfully")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

  