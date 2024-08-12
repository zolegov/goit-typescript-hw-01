export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}
type UserRolesStatus = Record<UserRole, boolean>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRolesStatus = {
  [UserRole.admin]: true,
  [UserRole.editor]: true,
  [UserRole.guest]: false,
};
