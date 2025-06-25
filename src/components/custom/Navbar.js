'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { ModeToggle } from './ModeToggle';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

export default function Navbar() {
  const { student, logout, loading } = useAuth();

  const renderAuthMenu = () => {
    if (loading) return null;

    if (student) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt={student?.email} />
              <AvatarFallback>{student?.email?.[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    );
  };

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-lg">
        <Button variant="outline">ComputoAkash</Button>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Menu
              </h2>
            </SheetHeader>
            <nav className="m-4 space-y-4">
              <Link href="/" className="block hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
                <Link href="/about" className="block hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="/courses" className="block hover:text-blue-600 dark:hover:text-blue-400">
                Courses
              </Link>
              <Link href="/contact" className="block hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
              <div>{renderAuthMenu()}</div>
              <ModeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
         <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
          About
        </Link>
        <Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">
          Courses
        </Link>
        <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
          Contact
        </Link>
        {renderAuthMenu()}
        <ModeToggle />
      </div>
    </nav>
  );
}
