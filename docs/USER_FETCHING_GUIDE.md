# User Fetching Mechanism Documentation

This document explains how to use the comprehensive user fetching system in your components.

## Overview

The user fetching mechanism provides a centralized way to access authenticated user data across your application. It uses React Context to manage user state globally and provides specialized hooks for different use cases.

## Architecture

```
UserContext (Global State)
    ↓
useUser Hook (Core Hook)
    ↓
Specialized Hooks (Role, Profile, Auth)
    ↓
Components (Use appropriate hook)
```

## Core Components

### 1. UserContext (`/src/context/UserContext.tsx`)

The central state manager that:
- Fetches user data from `/api/me` endpoint
- Manages loading and error states  
- Provides global user state to all components
- Listens for auth events (login/logout)
- Automatically refetches user data when needed

### 2. User Hooks (`/src/hooks/useUserHooks.ts`)

A collection of specialized hooks for different use cases:

- `useCurrentUser()` - Basic user data with loading states
- `useAuthentication()` - Authentication status and helpers
- `useUserRole()` - Role-based permissions and checks
- `useUserProfile()` - Formatted user display data
- `useCheckAuthentication()` - Simple authentication check

## Hook Usage Examples

### Basic User Data

```tsx
import { useCurrentUser } from '@/hooks/useUserHooks';

function MyComponent() {
  const { user, isLoading, error, refetchUser } = useCurrentUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Not authenticated</div>;
  
  return <div>Welcome, {user.firstName}!</div>;
}
```

### Authentication Status

```tsx
import { useAuthentication } from '@/hooks/useUserHooks';

function MyComponent() {
  const { isAuthenticated, isLoading } = useAuthentication();
  
  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }
  
  return <div>Authenticated content</div>;
}
```

### Role-Based Features

```tsx
import { useUserRole } from '@/hooks/useUserHooks';

function AdminPanel() {
  const { 
    canAccessAdminFeatures, 
    isAdmin, 
    isTeacher,
    hasRole 
  } = useUserRole();
  
  if (!canAccessAdminFeatures()) {
    return <div>Access denied</div>;
  }
  
  return (
    <div>
      <h1>Admin Panel</h1>
      {isAdmin && <SuperAdminFeatures />}
      {isTeacher && <TeacherFeatures />}
      {hasRole('moderator') && <ModeratorFeatures />}
    </div>
  );
}
```

### User Profile Display

```tsx
import { useUserProfile } from '@/hooks/useUserHooks';

function UserAvatar() {
  const { fullName, initials, avatarUrl, getRoleBadgeColor } = useUserProfile();
  
  return (
    <div className="flex items-center space-x-2">
      <img src={avatarUrl} alt={fullName} className="w-10 h-10 rounded-full" />
      <div>
        <div className="font-medium">{fullName}</div>
        <div className={`text-xs px-2 py-1 rounded ${getRoleBadgeColor()}`}>
          {role}
        </div>
      </div>
    </div>
  );
}
```

## Authentication Flow Integration

### Login Event Dispatch

When users sign in, dispatch a login event to update the global user state:

```tsx
// In your sign-in form
const handleLogin = async (credentials) => {
  const response = await signIn(credentials);
  
  if (response.success) {
    // Dispatch event to update global user state
    window.dispatchEvent(new CustomEvent('user:login'));
    
    // UserContext will automatically fetch fresh user data
  }
};
```

### Logout Event Dispatch

When users sign out, dispatch a logout event:

```tsx
// In your sign-out handler
const handleLogout = async () => {
  await signOut();
  
  // Clear global user state
  window.dispatchEvent(new CustomEvent('user:logout'));
  
  // Redirect to sign-in page
  router.push('/auth/signin');
};
```

## Available User Properties

The user object contains the following properties:

```typescript
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  // Add more fields as needed
}
```

## Role-Based Permissions

### Available Roles
- `admin` - Full system access
- `teacher` - Can create and manage courses
- `student` - Can view and participate in courses

### Permission Helpers

```tsx
const {
  isAdmin,                    // true if role === 'admin'
  isTeacher,                  // true if role === 'teacher'
  isStudent,                  // true if role === 'student'
  canAccessAdminFeatures,     // admin only
  canAccessTeacherFeatures,   // admin or teacher
  canAccessStudentFeatures,   // admin, teacher, or student
  hasRole,                    // hasRole('admin')
  hasAnyRole                  // hasAnyRole(['admin', 'teacher'])
} = useUserRole();
```

## Error Handling

The hooks provide comprehensive error handling:

```tsx
function MyComponent() {
  const { user, isLoading, error, refetchUser } = useCurrentUser();
  
  if (error) {
    return (
      <div className="error-container">
        <p>Failed to load user data: {error}</p>
        <button onClick={() => refetchUser()}>
          Retry
        </button>
      </div>
    );
  }
  
  // ... rest of component
}
```

## Loading States

All hooks provide loading states for better UX:

```tsx
function MyComponent() {
  const { user, isLoading } = useCurrentUser();
  
  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        <span>Loading user data...</span>
      </div>
    );
  }
  
  // ... rest of component
}
```

## Best Practices

### 1. Choose the Right Hook

- Use `useCurrentUser()` for basic user data needs
- Use `useUserRole()` for permission-based logic
- Use `useUserProfile()` for display formatting
- Use `useAuthentication()` for auth status checks

### 2. Handle Loading States

Always handle loading states to provide good UX:

```tsx
const { user, isLoading } = useCurrentUser();

if (isLoading) {
  return <UserSkeleton />;
}
```

### 3. Error Recovery

Provide error recovery mechanisms:

```tsx
if (error) {
  return (
    <ErrorBoundary onRetry={() => refetchUser()}>
      {error}
    </ErrorBoundary>
  );
}
```

### 4. Role-Based Rendering

Use role hooks for conditional rendering:

```tsx
const { canAccessAdminFeatures } = useUserRole();

return (
  <div>
    <RegularContent />
    {canAccessAdminFeatures() && <AdminContent />}
  </div>
);
```

## Component Examples

See `/src/components/example/UserInfoExample.tsx` for comprehensive examples of:

- Basic user information display
- Role-based feature access
- Error handling and loading states
- Profile formatting utilities
- Permission-based UI rendering

## Integration Checklist

- [ ] `UserProvider` is wrapped around your app in `layout.tsx`
- [ ] Login forms dispatch `user:login` events
- [ ] Logout handlers dispatch `user:logout` events  
- [ ] Components use appropriate user hooks
- [ ] Loading and error states are handled
- [ ] Role-based permissions are implemented
- [ ] User profile display is consistent across components

## Troubleshooting

### User Data Not Loading
1. Check if `UserProvider` is properly wrapped around your app
2. Verify `/api/me` endpoint is working correctly
3. Ensure JWT tokens are being sent with requests

### Role Permissions Not Working
1. Check if user object has the `role` property
2. Verify role values match expected strings ('admin', 'teacher', 'student')
3. Ensure user data is loaded before checking permissions

### State Not Updating After Login
1. Check if login event is being dispatched: `window.dispatchEvent(new CustomEvent('user:login'))`
2. Verify UserContext is listening for events
3. Check browser console for any errors

### Performance Issues
1. Use specific hooks instead of `useCurrentUser()` when you only need partial data
2. Implement proper loading states to avoid layout shifts
3. Consider memoizing expensive computations in user profile formatting

## Future Enhancements

- Add user preferences management
- Implement user avatar upload functionality
- Add user activity tracking
- Support for multiple roles per user
- User session management
- Real-time user status updates
