import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background py-6 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">© 2024 Harmony Fest. All rights reserved.</p>
        </div>
        <nav className="flex gap-4">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  )
}

