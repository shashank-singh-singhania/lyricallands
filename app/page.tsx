import Image from 'next/image'
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import image from './logo.png'
import { ScrollReveal } from '@/components/scroll-reveal'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-4 py-3  fixed w-full z-50 bg-black">
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-4 mx-auto lg:mx-0">
          \
          <h1 className=' font-bold text-lg font-sans text-[#7ed321]'>LyricalLands</h1>
         
        </div>
          <div className="hidden lg:block text-sm">
            <span className="text-white">Mumbai, IN</span>
            <span className="mx-2 text-[#7ed321]">|</span>
            <span className="text-white">June 12-15, 2025</span>
          </div>
        <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full px-6 py-2 text-sm font-bold">
          TICKETS
        </Button>
      </header> */}

      <Navbar/>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center bg-[#1e1e1e] relative overflow-hidden min-h-[85%] flex flex-col items-center justify-center hero-sparkle">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#7ed321] text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            SONIC FEST PRESALE<br />HAPPENING NOW!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#ffd700] font-bold">
            GET YOUR TICKETS, ROOMS & PARKING STARTING AT JUST 25K DOWN.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href={"/ticket"}>
            <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full px-8 py-3 text-lg font-bold">
              BUY TICKETS
            </Button>
            </Link>
            <Link
              href="/lineup"
              className="text-[#ffd700] hover:text-[#ffe44d] underline underline-offset-4 font-bold"
            >
              VIEW ARTISTS LINEUP →
            </Link>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="grid md:grid-cols-3">
        {/* Don't Wanna Camp Section */}
        <div className="bg-[#ffa726] p-12 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-[#1e1e1e]">THE ARTISTS LIST</h2>
          <p className="mb-6 text-[#1e1e1e] font-bold">List of our Singers.</p>
          <Link
            href="/artists"
            className="inline-block text-[#1e1e1e] hover:text-[#1e1e1e]/70 underline underline-offset-4 font-bold"
          >
            OUR PERFORMERS →
          </Link>
        </div>

        {/* Help Section */}
        <div className="bg-[#fff9c4] p-12 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-[#1e1e1e]">I NEED SOME HELP!</h2>
          <p className="mb-6 text-[#1e1e1e] font-bold">
            We got you - check out the help center for answers to all your questions.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[#1e1e1e] hover:text-[#1e1e1e]/70 underline underline-offset-4 font-bold"
          >
            CONTACT US →
          </Link>
        </div>

        {/* Merch Section */}
        <div className="bg-[#80cbc4] p-12 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-[#1e1e1e]">MONDAY MERCH DEALS</h2>
          <p className="mb-6 text-[#1e1e1e] font-bold">Available through 12/10 while supplies last!</p>
          <Link
            href="/merchandise"
            className="inline-block text-[#1e1e1e] hover:text-[#1e1e1e]/70 underline underline-offset-4 font-bold"
          >
            BUY MERCH →
          </Link>
        </div>
      </section>

      {/* About Festival Section */}
      <ScrollReveal>
        <section className="bg-[#1e1e1e] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#7ed321] mb-8">
              EXPERIENCE THE MAGIC OF LYRICAL LANDS
            </h2>
            <p className="text-xl mb-8">
              Immerse yourself in a world of music, art, and unforgettable moments. LyricalLands is more than just a festival; it's a journey into the heart of sound and creativity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#ffd700] mb-4">100+ ARTISTS</h3>
                <p>From global superstars to emerging talents, experience a diverse lineup across multiple stages.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#ffd700] mb-4">IMMERSIVE ART</h3>
                <p>Explore stunning installations and interactive exhibits that bring music to life.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#ffd700] mb-4">CULINARY DELIGHTS</h3>
                <p>Indulge in a variety of cuisines from local and international food vendors.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Festival Images Section */}
      <ScrollReveal>
        <section className="py-16 px-4 bg-[#2a2a2a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#7ed321] mb-12">GLIMPSES OF LYRICAL LANDS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1528720335838-3f602fea2f0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Festival crowd"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
                {/* <img src="/fest2.jpg" alt="" /> */}
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1582711012124-a56cf82307a0?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Main stage performance"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1658227633934-b589ca17d602?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Art installation"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>



      <section className="bg-[#1e1e1e] text-center py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white opacity-20 leading-tight">
          SONIC FEST IS A<br />MUSICAL FESTIVAL
        </h2>

  
      </section>

      <footer className="bg-[#1e1e1e] text-center py-8">
        <p className="text-sm text-[#7ed321]">© 2025 LyricalLands. All rights reserved.</p>
      </footer>
    </div>
  )
}

