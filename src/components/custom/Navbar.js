'use client';

import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'; // adjust path if needed

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        <Link href="/">ComputoAkash</Link>
      </div>

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
              <Link
                href="/"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Courses
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </Link>
              <ModeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Home
        </Link>
        <Link
          href="/courses"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Courses
        </Link>
        <Link
          href="/contact"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Contact
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
