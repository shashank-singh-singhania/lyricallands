import { Card, CardContent } from "@/components/ui/card"

interface TicketCardProps {
  type: string
  title: string
  price: string
}

export function TicketCard({ type, title, price }: TicketCardProps) {
  return (
    <Card className="bg-[#fff9c4] border-none hover:bg-[#fff9c4]/90 transition-colors cursor-pointer">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm font-bold text-[#1e1e1e] mb-1">{type}</div>
            <h3 className="text-2xl font-extrabold text-[#1e1e1e]">{title}</h3>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-[#1e1e1e] mb-1">STARTING AT</div>
            <div className="text-2xl font-extrabold text-[#1e1e1e]">₹{price}</div>
            <div className="text-sm text-[#1e1e1e]">NO HIDDEN FEES</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

