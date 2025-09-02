"use client";

import Link from 'next/link';
import { BookOpenCheck, LogIn } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Browse' },
    { href: '/recommendations', label: 'Recommendations' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Nexus Library</span>
          </Link>
          <nav className="hidden items-center space-x-2 md:flex">
            {navLinks.map(link => (
              <Button
                key={link.href}
                variant="link"
                asChild
                className={cn(
                  'text-muted-foreground transition-colors hover:text-foreground',
                  pathname === link.href && 'text-foreground'
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" aria-label="Login">
            <LogIn className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
