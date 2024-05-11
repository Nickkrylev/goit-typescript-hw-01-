// src/generics/5.ts
export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  // Використання Record для створення об'єкту з описами ролей
  const RoleDescription: Record<UserRole, string> = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  };
  