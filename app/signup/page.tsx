'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Icon } from '@/components/icons'
import Navbar from '@/components/Navbar'

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard')
    }, 3000)
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans pt-20">
      <ScrollReveal>
        <section className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-[#2a2a2a] border-[#7ed321]">
              <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-extrabold text-center text-[#7ed321]">
                  Sign up for Sonic Fest
                </CardTitle>
                <CardDescription className="text-center text-[#ffd700]">
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                  <Button variant="outline" className="bg-[#3a3a3a] text-white hover:bg-[#4a4a4a]">
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    Github
                  </Button>
                  <Button variant="outline" className="bg-[#3a3a3a] text-white hover:bg-[#4a4a4a]">
                    <Icons.google className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[#7ed321]" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-[#2a2a2a] px-2 text-[#ffd700]">
                      Or continue with
                    </span>
                  </div>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      <Label className="text-[#ffd700]" htmlFor="name">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Name"
                        type="text"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="bg-[#3a3a3a] border-[#7ed321] text-white"
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label className="text-[#ffd700]" htmlFor="email">
                        Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="me@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="bg-[#3a3a3a] border-[#7ed321] text-white"
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label className="text-[#ffd700]" htmlFor="password">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="bg-[#3a3a3a] border-[#7ed321] text-white"
                      />
                    </div>
                    <Button 
                      className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white"
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Sign Up
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-center text-sm text-[#ffd700]">
                  By clicking continue, you agree to our{" "}
                  <a
                    href="/terms"
                    className="underline underline-offset-4 hover:text-[#7ed321]"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-[#7ed321]"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <footer className="bg-[#1e1e1e] text-center py-8">
        <p className="text-sm text-[#7ed321]">© 2025 Sonic Fest. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

