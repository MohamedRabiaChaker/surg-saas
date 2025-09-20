export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  id: string;
  email: string;
  password: string; // In production, this would be hashed
  firstName: string;
  lastName: string;
  role: UserRole;
  organizationId: string;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
  avatar?: string; // Profile picture URL/path
  // Role-specific fields
  department?: string; // For teachers and admins
  specialization?: string; // For teachers
  yearOfStudy?: number; // For students
  studentId?: string; // For students
  teacherId?: string; // For students - assigned teacher
}

export interface Organization {
  id: string;
  name: string;
  domain: string;
  isActive: boolean;
  createdAt: string;
  settings: {
    allowSelfRegistration: boolean;
    requireEmailVerification: boolean;
    maxStudentsPerTeacher: number;
  };
}
