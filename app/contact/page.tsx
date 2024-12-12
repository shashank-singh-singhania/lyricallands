import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">Have questions about Harmony Fest? We're here to help!</p>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Email</h3>
              <p>info@harmonyfest.com</p>
            </div>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-bold">Address</h3>
              <p>123 Music Lane, Harmony, CA 90210</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Volunteer & Sponsorship</h2>
          <p>Interested in volunteering or sponsoring Harmony Fest? We'd love to hear from you! Please email volunteer@harmonyfest.com or sponsorship@harmonyfest.com for more information.</p>
        </div>
      </div>
    </div>
  )
}

