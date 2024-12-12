import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Harmony Fest</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/artists">
            Artists
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/schedule">
            Schedule
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tickets">
            Tickets
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/info">
            Info
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/gallery">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
        <Button>Get Tickets</Button>
      </div>
    </header>
  )
}

