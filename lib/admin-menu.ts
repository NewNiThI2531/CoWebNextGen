export const adminMenu = [
  {
    label: "Dashboard",
    path: "/admin",
    permission: "ALL",
  },
  {
    label: "Pages",
    path: "/admin/pages",
    permission: "MANAGE_CONTENT",
  },
  {
    label: "Jobs",
    path: "/admin/jobs",
    permission: "MANAGE_CONTENT",
  },
  {
    label: "Products",
    path: "/admin/product",
    permission: "MANAGE_PRODUCT",
  },
  {
    label: "Job Applications",
    path: "/admin/jobapplication",
    permission: "MANAGE_JOB_APPLICATION",
  },
  {
    label: "Users",
    path: "/admin/users",
    permission: "ALL", // Manager only (เราจะเช็ค role ตรง ๆ)
  },
]