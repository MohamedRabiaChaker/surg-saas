import { useUser } from '@/context/UserContext';
import { User } from '@/types/user';

/**
 * Hook for components that need current user data
 * Provides user information with loading and error states
 */
export function useCurrentUser() {
  return useUser();
}

/**
 * Hook for authentication-related operations
 * Returns user state and helper functions
 */
export function useAuthentication() {
  const { user, isLoading, refetchUser, clearUser } = useUser();
  
  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    refetchUser,
    clearUser,
  };
}

/**
 * Hook to get user role information
 * Useful for role-based UI rendering
 */
export function useUserRole() {
  const { user } = useUser();
  
  const hasRole = (role: string) => user?.role === role;
  const hasAnyRole = (roles: string[]) => roles.includes(user?.role || '');
  const canAccessAdminFeatures = () => user?.role === 'admin';
  const canAccessTeacherFeatures = () => ['admin', 'teacher'].includes(user?.role || '');
  const canAccessStudentFeatures = () => ['admin', 'teacher', 'student'].includes(user?.role || '');
  
  return {
    role: user?.role || null,
    hasRole,
    hasAnyRole,
    canAccessAdminFeatures,
    canAccessTeacherFeatures,
    canAccessStudentFeatures,
    isAdmin: user?.role === 'admin',
    isTeacher: user?.role === 'teacher',
    isStudent: user?.role === 'student',
  };
}

/**
 * Hook for user profile information
 * Returns formatted user display data
 */
export function useUserProfile() {
  const { user } = useUser();
  
  const getFullName = () => {
    if (!user) return 'Guest User';
    return `${user.firstName} ${user.lastName}`;
  };
  
  const getInitials = () => {
    if (!user) return 'GU';
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  };
  
  const getAvatarUrl = () => {
    return user?.avatar || '/images/user/user-01.jpg';
  };
  
  const getRoleBadgeColor = (role?: string) => {
    const userRole = role || user?.role;
    switch (userRole) {
      case 'admin':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'teacher':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'student':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };
  
  return {
    user,
    fullName: getFullName(),
    initials: getInitials(),
    avatarUrl: getAvatarUrl(),
    getRoleBadgeColor,
  };
}

/**
 * Type guard to check if user exists and is loaded
 */
export function isUserLoaded(user: User | null): user is User {
  return user !== null;
}

/**
 * Hook to check if current user is authenticated
 */
export function useCheckAuthentication() {
  const { user } = useUser();
  return !!user;
}

export default {
  useCurrentUser,
  useAuthentication,
  useUserRole,
  useUserProfile,
  isUserLoaded,
  useCheckAuthentication,
};
