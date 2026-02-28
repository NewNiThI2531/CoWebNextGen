export const rolePermissions = {
  MANAGER: ["ALL"],

  WEBEDITOR: ["MANAGE_CONTENT"],

  HR: ["MANAGE_JOB_APPLICATION"],

  SALE: ["MANAGE_PRODUCT"],
}

export function hasPermission(
  role: keyof typeof rolePermissions,
  permission: string
) {
  return (
    rolePermissions[role]?.includes("ALL") ||
    rolePermissions[role]?.includes(permission)
  )
}