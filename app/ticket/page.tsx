import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { TicketCard } from "@/components/ticket-card"
// import { TicketCard} from "../components/ticket-card"
// import { HowToBuyStep } from "@/components/how-to-buy-step"
// import { HowToBuyStep } from "@/components/how-to-buy-step"
import { HowToBuyStep } from "../components/how-to-buy-step"
import { TicketCard } from "../components/ticket-card"
import Navbar from "@/components/Navbar"

export default function TicketsPage() {
  return (
    <>
      <Navbar/>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center bg-[#80cbc4]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#1e1e1e] text-5xl md:text-7xl font-extrabold mb-6">
            2025 TICKETS
          </h1>
          <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-extrabold mb-4">
            SONIC FEST PRESALE HAPPENING NOW!
          </h2>
          <p className="text-xl text-[#1e1e1e] font-bold">
            Get your tickets, rooms & parking starting at just 25K.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-[#fff9c4] border-b-4 border-[#1e1e1e]">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="4-day" className="w-full">
            <TabsList className="w-full  grid-cols-2 bg-transparent h-auto p-0 flex">
              <a href="#tickets" className=" items-end">

              <TabsTrigger 
                value="4-day"
                className="py-4 text-lg font-bold data-[state=active]:bg-[#1e1e1e] data-[state=active]:text-white rounded-none border-none"
              >
                7-Day Tickets
              </TabsTrigger>
              </a>
              <a href="#addons">

              <TabsTrigger 
                value="add-ons"
                className="py-4 text-lg font-bold data-[state=active]:bg-[#1e1e1e] data-[state=active]:text-white rounded-none border-none"
              >
                Add-Ons
              </TabsTrigger>
              </a>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 bg-[#1e1e1e]">
        {/* How to Buy Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-white">HOW TO BUY</h2>
          <div className="space-y-6">
            <HowToBuyStep 
              number={1}
              title="Buy Sonic Fest Tickets"
              isLink={false}
            />
            <HowToBuyStep 
              number={2}
              title="Buy Hotels or Parking Accommodations"
              href="/camping"
              isLink={true}
            />
          </div>
        </section>

        {/* Tickets Section */}
        <section id="tickets">
          <h2 className="text-3xl font-extrabold mb-8 text-white">7-DAY SONIC-FEST TICKETS</h2>
          <div className="space-y-4">
            <TicketCard
              type="7-DAY"
              title="GENERAL ADMISSION"
              price="25K"
            />
            <TicketCard
              type="7-DAY"
              title="VIP"
              price="50K"
            />
            <TicketCard
              type="7-DAY"
              title="PLATINUM"
              price="100K"
            />
          </div>
        </section>
        <section className=" mt-8" id="addons">
          <h2 className="text-3xl font-extrabold mb-8 text-white">ADD ONS</h2>
          <div className="space-y-4">
            <TicketCard
              type="MONDAY"
              title="SPECIAL SONIC-COMMUNITY DINNER"
              price="10k"
            />
            <TicketCard
              type="WEDNESDAY"
              title="SPECIAL SONIC-COMMUNITY DINNER"
              price="10k"
            />
            <TicketCard
              type="FRIDAY"
              title="SPECIAL SONIC-COMMUNITY DINNER"
              price="10k"
            />
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

