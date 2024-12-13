import React from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3  fixed w-full z-50 bg-black">
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-4 mx-auto lg:mx-0">
          {/* <Image src="/logog.png" alt="Bonnaroo" width={150} height={30} /> */}
          <Link href={"/"}>

          <h1 className=' font-bold text-lg font-sans text-[#7ed321]'>LyricalLands</h1>
          </Link>
          {/* <img src="/logo.png" alt="sdfsd" /> */}
        </div>
          <div className="hidden lg:block text-sm">
            <span className="text-white">Mumbai, IN</span>
            <span className="mx-2 text-[#7ed321]">|</span>
            <span className="text-white">June 17-23, 2025</span>
          </div>
          <Link href={"/ticket"}>
        <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full px-6 py-2 text-sm font-bold">
          TICKETS
        </Button>
        {/* <Button className="bg-[#7ed321] hover:bg-[#ff5252] text-white rounded-full px-6 py-2 text-sm font-bold">
          Sign Up
        </Button> */}
          </Link>
      </header>
  )
}

export default Navbar