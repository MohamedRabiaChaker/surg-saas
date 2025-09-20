export type NavItem = {
  name: string;
  iconName: string; // Store icon name as string instead of JSX
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
  roles: string[];
};

// Navigation items for students
export const studentNavItems: NavItem[] = [
  {
    iconName: "GridIcon",
    name: "Dashboard",
    subItems: [{ name: "Training Overview", path: "/home", pro: false }],
    roles: ['student']
  },
  {
    iconName: "CalenderIcon",
    name: "Training Schedule", 
    path: "/calendar",
    roles: ['student']
  },
  {
    iconName: "UserCircleIcon",
    name: "Profile",
    path: "/profile", 
    roles: ['student']
  },
  {
    name: "Training Sessions",
    iconName: "ListIcon",
    subItems: [{ name: "Active Sessions", path: "/form-elements", pro: false }],
    roles: ['student']
  },
  {
    name: "Progress Reports", 
    iconName: "TableIcon",
    subItems: [{ name: "Performance Analytics", path: "/basic-tables", pro: false }],
    roles: ['student']
  },
  {
    name: "Resources",
    iconName: "PageIcon",
    subItems: [
      { name: "Study Materials", path: "/blank", pro: false },
      { name: "Help Center", path: "/error-404", pro: false },
    ],
    roles: ['student']
  },
];

export const studentOthersItems: NavItem[] = [
  {
    iconName: "PieChartIcon",
    name: "Analytics", 
    subItems: [
      { name: "Performance Charts", path: "/line-chart", pro: false },
      { name: "Progress Reports", path: "/bar-chart", pro: false },
    ],
    roles: ['student']
  },
  {
    iconName: "BoxCubeIcon",
    name: "Training Tools",
    subItems: [
      { name: "Simulations", path: "/alerts", pro: false },
      { name: "Procedures", path: "/avatars", pro: false }, 
      { name: "Assessments", path: "/badge", pro: false },
      { name: "Practice Tests", path: "/buttons", pro: false },
      { name: "Medical Images", path: "/images", pro: false },
      { name: "Training Videos", path: "/videos", pro: false },
    ],
    roles: ['student']
  },
];

// Navigation items for teachers
export const teacherNavItems: NavItem[] = [
  {
    iconName: "GridIcon",
    name: "Dashboard", 
    subItems: [{ name: "Teacher Overview", path: "/teacher/dashboard", pro: false }],
    roles: ['teacher']
  },
  {
    iconName: "UserCircleIcon",
    name: "Student Management",
    subItems: [
      { name: "My Students", path: "/teacher/students", pro: false },
      { name: "Student Progress", path: "/teacher/progress", pro: false },
    ],
    roles: ['teacher']
  },
  {
    iconName: "CalenderIcon",
    name: "Training Schedule",
    path: "/teacher/calendar", 
    roles: ['teacher']
  },
  {
    name: "Assessments",
    iconName: "ListIcon",
    subItems: [
      { name: "Create Assessment", path: "/teacher/assessments/create", pro: false },
      { name: "Review Submissions", path: "/teacher/assessments/review", pro: false },
    ],
    roles: ['teacher']
  },
  {
    name: "Reports & Analytics",
    iconName: "TableIcon",
    subItems: [
      { name: "Student Performance", path: "/teacher/reports/performance", pro: false },
      { name: "Class Analytics", path: "/teacher/reports/analytics", pro: false },
    ],
    roles: ['teacher']
  },
  {
    iconName: "UserCircleIcon",
    name: "Profile",
    path: "/profile",
    roles: ['teacher']
  },
];

export const teacherOthersItems: NavItem[] = [
  {
    iconName: "PieChartIcon",
    name: "Advanced Analytics",
    subItems: [
      { name: "Performance Trends", path: "/teacher/analytics/trends", pro: false },
      { name: "Comparative Analysis", path: "/teacher/analytics/compare", pro: false },
    ],
    roles: ['teacher']
  },
  {
    iconName: "BoxCubeIcon",
    name: "Teaching Tools",
    subItems: [
      { name: "Lesson Plans", path: "/teacher/tools/lessons", pro: false },
      { name: "Resource Library", path: "/teacher/tools/resources", pro: false },
      { name: "Grading Tools", path: "/teacher/tools/grading", pro: false },
    ],
    roles: ['teacher']
  },
];

// Navigation items for admins  
export const adminNavItems: NavItem[] = [
  {
    iconName: "GridIcon",
    name: "Dashboard",
    subItems: [{ name: "Admin Overview", path: "/admin/dashboard", pro: false }],
    roles: ['admin']
  },
  {
    iconName: "UserCircleIcon",
    name: "User Management",
    subItems: [
      { name: "All Users", path: "/admin/users", pro: false },
      { name: "Teachers", path: "/admin/users/teachers", pro: false },
      { name: "Students", path: "/admin/users/students", pro: false },
      { name: "Add User", path: "/admin/users/create", pro: false },
    ],
    roles: ['admin']
  },
  {
    name: "Organizations",
    iconName: "BoxCubeIcon",
    subItems: [
      { name: "Manage Organizations", path: "/admin/organizations", pro: false },
      { name: "Organization Settings", path: "/admin/organizations/settings", pro: false },
    ],
    roles: ['admin']
  },
  {
    name: "System Settings",
    iconName: "ListIcon",
    subItems: [
      { name: "Platform Configuration", path: "/admin/settings/platform", pro: false },
      { name: "Security Settings", path: "/admin/settings/security", pro: false },
      { name: "Email Templates", path: "/admin/settings/emails", pro: false },
    ],
    roles: ['admin']
  },
  {
    name: "Reports & Analytics",
    iconName: "TableIcon",
    subItems: [
      { name: "System Analytics", path: "/admin/reports/system", pro: false },
      { name: "User Activity", path: "/admin/reports/activity", pro: false },
      { name: "Performance Metrics", path: "/admin/reports/performance", pro: false },
    ],
    roles: ['admin']
  },
  {
    iconName: "UserCircleIcon",
    name: "Profile",
    path: "/profile",
    roles: ['admin']
  },
];

export const adminOthersItems: NavItem[] = [
  {
    iconName: "PieChartIcon",
    name: "System Monitoring",
    subItems: [
      { name: "Server Health", path: "/admin/monitoring/health", pro: false },
      { name: "Performance Logs", path: "/admin/monitoring/performance", pro: false },
      { name: "Error Tracking", path: "/admin/monitoring/errors", pro: false },
    ],
    roles: ['admin']
  },
  {
    iconName: "BoxCubeIcon",
    name: "Admin Tools",
    subItems: [
      { name: "Database Management", path: "/admin/tools/database", pro: false },
      { name: "Backup & Restore", path: "/admin/tools/backup", pro: false },
      { name: "System Maintenance", path: "/admin/tools/maintenance", pro: false },
    ],
    roles: ['admin']
  },
];

// Function to get navigation items based on user role
export const getNavItemsForRole = (role: string): { navItems: NavItem[], othersItems: NavItem[] } => {
  switch (role) {
    case 'admin':
      return { navItems: adminNavItems, othersItems: adminOthersItems };
    case 'teacher': 
      return { navItems: teacherNavItems, othersItems: teacherOthersItems };
    case 'student':
    default:
      return { navItems: studentNavItems, othersItems: studentOthersItems };
  }
};
