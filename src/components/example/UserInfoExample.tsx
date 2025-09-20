import React from 'react';
import { 
  useCurrentUser, 
  useUserRole, 
  useUserProfile, 
  useAuthentication 
} from '@/hooks/useUserHooks';

/**
 * Example component demonstrating how to use user hooks in components
 * This shows all the different ways components can access and use user data
 */
export function UserInfoExample() {
  // Basic user data and loading states
  const { user, isLoading, error } = useCurrentUser();
  
  // Authentication helpers
  const { isAuthenticated, refetchUser } = useAuthentication();
  
  // Role-based permissions
  const {
    role,
    isAdmin,
    isTeacher,
    isStudent,
    canAccessAdminFeatures,
    hasRole,
  } = useUserRole();
  
  // Profile display helpers
  const {
    fullName,
    initials,
    avatarUrl,
    getRoleBadgeColor,
  } = useUserProfile();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading user data...</span>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <div className="text-red-800">
          <p className="font-medium">Error loading user data</p>
          <p className="text-sm mt-1">{error}</p>
          <button
            onClick={() => refetchUser()}
            className="mt-2 px-3 py-1 bg-red-100 text-red-800 rounded text-sm hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Handle unauthenticated state
  if (!isAuthenticated) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
        <div className="text-yellow-800">
          <p className="font-medium">Not authenticated</p>
          <p className="text-sm mt-1">Please sign in to view user information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        User Information
      </h2>
      
      {/* User Profile Section */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Profile Information
        </h3>
        
        <div className="flex items-center space-x-4">
          <img
            src={avatarUrl}
            alt={fullName}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {fullName}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {user?.email}
            </p>
            <div className="mt-1">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor()}`}
              >
                {role?.toUpperCase()}
              </span>
            </div>
          </div>
          <div className="ml-auto">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
              {initials}
            </div>
          </div>
        </div>
      </div>

      {/* Role Information */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Role & Permissions
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Current Role:</p>
            <p className="font-medium text-gray-900 dark:text-white">{role || 'No role assigned'}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Role Checks:</p>
            <div className="space-y-1 text-sm">
              <p className={isAdmin ? 'text-green-600' : 'text-gray-400'}>
                Admin: {isAdmin ? '✓' : '✗'}
              </p>
              <p className={isTeacher ? 'text-green-600' : 'text-gray-400'}>
                Teacher: {isTeacher ? '✓' : '✗'}
              </p>
              <p className={isStudent ? 'text-green-600' : 'text-gray-400'}>
                Student: {isStudent ? '✓' : '✗'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Permission-based Features */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Available Features
        </h3>
        
        <div className="space-y-2 text-sm">
          {canAccessAdminFeatures() && (
            <p className="flex items-center text-green-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Admin Dashboard
            </p>
          )}
          
          {hasRole('teacher') && (
            <p className="flex items-center text-blue-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Create & Manage Courses
            </p>
          )}
          
          {hasRole('student') && (
            <p className="flex items-center text-purple-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              View Enrolled Courses
            </p>
          )}
          
          <p className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
            View Profile
          </p>
        </div>
      </div>

      {/* Raw User Data (for debugging) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Raw User Data (Development Only)
          </h3>
          <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-6">
        <button
          onClick={() => refetchUser()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Refresh User Data
        </button>
        
        {canAccessAdminFeatures() && (
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => {/* Navigate to admin dashboard */}}
          >
            Admin Dashboard
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Simple component showing minimal user hook usage
 */
export function SimpleUserDisplay() {
  const { fullName, avatarUrl } = useUserProfile();
  const { isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 animate-pulse">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <img
        src={avatarUrl}
        alt={fullName}
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {fullName}
      </span>
    </div>
  );
}

/**
 * Role-based component that only renders for specific roles
 */
export function AdminOnlyFeature({ children }: { children: React.ReactNode }) {
  const { canAccessAdminFeatures } = useUserRole();
  
  if (!canAccessAdminFeatures()) {
    return null;
  }
  
  return <>{children}</>;
}

export default UserInfoExample;
