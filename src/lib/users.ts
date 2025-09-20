import { User, Organization } from '@/types/user';

// Static organizations
export const organizations: Organization[] = [
  {
    id: 'org-1',
    name: 'Metropolitan Medical University',
    domain: 'mmu.edu',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    settings: {
      allowSelfRegistration: true,
      requireEmailVerification: true,
      maxStudentsPerTeacher: 25,
    },
  },
  {
    id: 'org-2',
    name: 'City Hospital Training Center',
    domain: 'cityhosp.org',
    isActive: true,
    createdAt: '2024-01-15T00:00:00Z',
    settings: {
      allowSelfRegistration: false,
      requireEmailVerification: true,
      maxStudentsPerTeacher: 15,
    },
  },
];

// Static users
export const staticUsers: User[] = [
  // Admin users
  {
    id: 'admin-1',
    email: 'admin@mmu.edu',
    password: 'admin123', // In production, this would be hashed
    firstName: 'Sarah',
    lastName: 'Johnson',
    role: 'admin',
    organizationId: 'org-1',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-12-20T10:00:00Z',
    department: 'Administration',
  },
  {
    id: 'admin-2',
    email: 'admin@cityhosp.org',
    password: 'admin123',
    firstName: 'Michael',
    lastName: 'Chen',
    role: 'admin',
    organizationId: 'org-2',
    isActive: true,
    createdAt: '2024-01-15T00:00:00Z',
    lastLogin: '2024-12-19T14:30:00Z',
    department: 'IT Administration',
  },
  
  // Teacher users
  {
    id: 'teacher-1',
    email: 'dr.smith@mmu.edu',
    password: 'teacher123',
    firstName: 'Robert',
    lastName: 'Smith',
    role: 'teacher',
    organizationId: 'org-1',
    isActive: true,
    createdAt: '2024-01-02T00:00:00Z',
    lastLogin: '2024-12-20T09:15:00Z',
    department: 'Surgical Training',
    specialization: 'Cardiovascular Surgery',
  },
  {
    id: 'teacher-2',
    email: 'dr.wilson@mmu.edu',
    password: 'teacher123',
    firstName: 'Jennifer',
    lastName: 'Wilson',
    role: 'teacher',
    organizationId: 'org-1',
    isActive: true,
    createdAt: '2024-01-03T00:00:00Z',
    lastLogin: '2024-12-20T08:45:00Z',
    department: 'Surgical Training',
    specialization: 'Orthopedic Surgery',
  },
  {
    id: 'teacher-3',
    email: 'dr.garcia@cityhosp.org',
    password: 'teacher123',
    firstName: 'Maria',
    lastName: 'Garcia',
    role: 'teacher',
    organizationId: 'org-2',
    isActive: true,
    createdAt: '2024-01-16T00:00:00Z',
    lastLogin: '2024-12-19T16:20:00Z',
    department: 'Emergency Surgery',
    specialization: 'Trauma Surgery',
  },
  
  // Student users
  {
    id: 'student-1',
    email: 'john.doe@student.mmu.edu',
    password: 'student123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'student',
    organizationId: 'org-1',
    isActive: true,
    createdAt: '2024-02-01T00:00:00Z',
    lastLogin: '2024-12-20T11:30:00Z',
    yearOfStudy: 3,
    studentId: 'STU001',
    teacherId: 'teacher-1',
  },
  {
    id: 'student-2',
    email: 'jane.smith@student.mmu.edu',
    password: 'student123',
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'student',
    organizationId: 'org-1',
    isActive: true,
    createdAt: '2024-02-01T00:00:00Z',
    lastLogin: '2024-12-20T10:45:00Z',
    yearOfStudy: 2,
    studentId: 'STU002',
    teacherId: 'teacher-1',
  },
  {
    id: 'student-3',
    email: 'alex.brown@student.mmu.edu',
    password: 'student123',
    firstName: 'Alex',
    lastName: 'Brown',
    role: 'student',
    organizationId: 'org-1',
    isActive: true,
    createdAt: '2024-02-02T00:00:00Z',
    lastLogin: '2024-12-19T15:20:00Z',
    yearOfStudy: 4,
    studentId: 'STU003',
    teacherId: 'teacher-2',
  },
  {
    id: 'student-4',
    email: 'emily.davis@student.mmu.edu',
    password: 'student123',
    firstName: 'Emily',
    lastName: 'Davis',
    role: 'student',
    organizationId: 'org-1',
    isActive: true,
    createdAt: '2024-02-03T00:00:00Z',
    lastLogin: '2024-12-20T09:00:00Z',
    yearOfStudy: 3,
    studentId: 'STU004',
    teacherId: 'teacher-2',
  },
  {
    id: 'student-5',
    email: 'carlos.rodriguez@student.cityhosp.org',
    password: 'student123',
    firstName: 'Carlos',
    lastName: 'Rodriguez',
    role: 'student',
    organizationId: 'org-2',
    isActive: true,
    createdAt: '2024-02-15T00:00:00Z',
    lastLogin: '2024-12-19T13:45:00Z',
    yearOfStudy: 1,
    studentId: 'STU005',
    teacherId: 'teacher-3',
  },
];

// Helper functions for user management
export const getUserById = (id: string): User | undefined => {
  return staticUsers.find(user => user.id === id);
};

export const getUserByEmail = (email: string): User | undefined => {
  return staticUsers.find(user => user.email === email);
};

export const getUsersByRole = (role: string): User[] => {
  return staticUsers.filter(user => user.role === role);
};

export const getUsersByOrganization = (organizationId: string): User[] => {
  return staticUsers.filter(user => user.organizationId === organizationId);
};

export const getStudentsByTeacher = (teacherId: string): User[] => {
  return staticUsers.filter(user => user.role === 'student' && user.teacherId === teacherId);
};

export const getTeachersByOrganization = (organizationId: string): User[] => {
  return staticUsers.filter(user => user.role === 'teacher' && user.organizationId === organizationId);
};

export const getOrganizationById = (id: string): Organization | undefined => {
  return organizations.find(org => org.id === id);
};

// Authentication helper
export const authenticateUser = (email: string, password: string): User | null => {
  const user = getUserByEmail(email);
  if (user && user.password === password && user.isActive) {
    return user;
  }
  return null;
};
