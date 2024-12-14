import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/Navbar"

export default function LineupPage() {
  return (
    <div className="min-h-screen bg-[#fff9c4]">
        <Navbar/>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#1e1e1e] text-5xl md:text-7xl font-extrabold mb-6">
            2025 LINEUP
          </h1>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              SIGN UP TO BE THE FIRST TO KNOW MORE<br />
              ABOUT THE LINEUP FOR SONIC FEST 2025!
            </h2>
            <div className="flex flex-col items-center gap-4 mt-8">
              <a href="/signup">
              <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full px-8 py-3 text-lg font-bold">
                SIGN UP NOW
              </Button>
              </a>
              <p className="text-sm text-[#1e1e1e]">Get Daily Updates of Upcoming Events</p>
              {/* <Link 
                href="/email-signup"
                className="text-[#1e1e1e] hover:text-[#1e1e1e]/70 underline underline-offset-4 font-bold"
              >
                OR SIGN UP VIA EMAIL →
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <Tabs defaultValue="lineup" className="w-full">
          <TabsList className="w-full grid grid-cols-1 bg-transparent h-auto p-0 border-b-2 border-[#1e1e1e]">
            <TabsTrigger 
              value="lineup"
              className="py-4 text-lg font-bold data-[state=active]:bg-[#1e1e1e] data-[state=active]:text-white rounded-none border-none"
            >
              ARTIST LINEUP
            </TabsTrigger>
            {/* <TabsTrigger 
              value="outeroo"
              className="py-4 text-lg font-bold data-[state=active]:bg-[#1e1e1e] data-[state=active]:text-white rounded-none border-none"
            >
              OUTRO
            </TabsTrigger>
            <TabsTrigger 
              value="who-stage"
              className="py-4 text-lg font-bold data-[state=active]:bg-[#1e1e1e] data-[state=active]:text-white rounded-none border-none"
            >
              WHO STAGE
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="lineup" className="mt-8">
            <div className="relative aspect-[1/1.4] w-full max-w-4xl mx-auto">
              <Image
                // src="https://static.wixstatic.com/media/23c86e_11e9f32b1d454201b5e0db981d614554~mv2.jpg/v1/fill/w_1080,h_1350,al_c,q_85,enc_avif,quality_auto/E24_day-by-day_portrait%20(1).jpg"
                src="https://i.postimg.cc/hjYtRyQJ/lineup.jpg"
                alt="2024 Lineup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </TabsContent>

          <TabsContent value="outeroo">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-[#1e1e1e]">Outro lineup coming soon!</h3>
            </div>
          </TabsContent>

          <TabsContent value="who-stage">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-[#1e1e1e]">Who Stage lineup coming soon!</h3>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <footer className="bg-[#1e1e1e] text-center py-8">
        <p className="text-sm text-[#7ed321]">© 2025 LyricalLands. All rights reserved.</p>
      </footer>
    </div>
  )
}

