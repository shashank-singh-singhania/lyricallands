'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import Navbar from '@/components/Navbar'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormStatus('success')
  }

  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans pt-20">
      <ScrollReveal>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#7ed321] mb-8">
              CONTACT US
            </h1>
            <p className="text-xl text-center mb-12">
              Have questions about LyricalLands? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#ffd700] mb-1">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#3a3a3a] border-[#7ed321] text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#ffd700] mb-1">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#3a3a3a] border-[#7ed321] text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#ffd700] mb-1">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-[#3a3a3a] border-[#7ed321] text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#ffd700] mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-[#3a3a3a] border-[#7ed321] text-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full py-3 text-lg font-bold"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {formStatus === 'success' && (
                <div className="mt-6 p-4 bg-[#7ed321] text-[#1e1e1e] rounded-lg text-center">
                  <p className="font-bold">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mt-6 p-4 bg-[#ff6b6b] text-white rounded-lg text-center">
                  <p className="font-bold">Oops! Something went wrong. Please try again later.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 px-4 bg-[#2a2a2a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffd700] mb-8">
              CONNECT WITH US
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#7ed321] mb-2">Email</h3>
                <p>info@lyricallands.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#7ed321] mb-2">Phone</h3>
                <p>+91 8957181681</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#7ed321] mb-2">Address</h3>
                <p>123 Music Avenue, Mumbai, IN 400001</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <footer className="bg-[#1e1e1e] text-center py-8">
        <p className="text-sm text-[#7ed321]">© 2025 LyricalLands. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

