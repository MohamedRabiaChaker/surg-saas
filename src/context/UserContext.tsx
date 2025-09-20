"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types/user';

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  refetchUser: () => Promise<void>;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/me', {
        credentials: 'include', // Include cookies
        cache: 'no-store', // Don't cache user data
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else if (response.status === 401) {
        // User not authenticated
        setUser(null);
      } else {
        throw new Error(`Failed to fetch user: ${response.status}`);
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refetchUser = async () => {
    await fetchUser();
  };

  const clearUser = () => {
    setUser(null);
    setError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Listen for authentication state changes (e.g., login/logout events)
  useEffect(() => {
    const handleAuthChange = () => {
      fetchUser();
    };

    // Custom event listeners for auth state changes
    window.addEventListener('user:login', handleAuthChange);
    window.addEventListener('user:logout', handleAuthChange);

    return () => {
      window.removeEventListener('user:login', handleAuthChange);
      window.removeEventListener('user:logout', handleAuthChange);
    };
  }, []);

  const value: UserContextType = {
    user,
    isLoading,
    error,
    refetchUser,
    clearUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Custom hook for user authentication status
export function useAuth() {
  const { user, isLoading } = useUser();
  
  return {
    user,
    isAuthenticated: !!user,
    isLoading,
  };
}

// Utility functions to dispatch auth events
export const authEvents = {
  login: () => {
    window.dispatchEvent(new CustomEvent('user:login'));
  },
  logout: () => {
    window.dispatchEvent(new CustomEvent('user:logout'));
  },
};
