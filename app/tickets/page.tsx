import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription,CardHeader, CardTitle } from '@/components/ui/card'

export default function TicketsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Admission</CardTitle>
            <CardDescription>3-Day Pass</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">$199</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access to all stages</li>
              <li>Food and drink vendors</li>
              <li>Parking included</li>
            </ul>
            <Button className="w-full">Buy Now</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>VIP Experience</CardTitle>
            <CardDescription>3-Day Pass</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">$399</p>
            <ul className="list-disc list-inside mb-4">
              <li>All General Admission benefits</li>
              <li>Exclusive VIP lounge access</li>
              <li>Meet & Greet with select artists</li>
              <li>Complimentary food and drinks</li>
            </ul>
            <Button className="w-full">Buy Now</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Single Day Pass</CardTitle>
            <CardDescription>Choose your day</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">$89</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access to all stages for one day</li>
              <li>Food and drink vendors</li>
              <li>Parking included</li>
            </ul>
            <Button className="w-full">Buy Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

