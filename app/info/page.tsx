import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function InfoPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Festival Information</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Venue</h2>
        <p className="mb-4">Harmony Fest takes place at Harmony Park, located at 123 Music Lane, Harmony, CA 90210.</p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203640535!2d-118.24368384945213!3d34.05293252525373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f7%3A0x927a9d96cf4d2ce9!2sLos%20Angeles%20State%20Historic%20Park!5e0!3m2!1sen!2sus!4v1625764215076!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{border:0}} 
            // allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Accommodation</h2>
        <p>We recommend the following nearby hotels:</p>
        <ul className="list-disc list-inside">
          <li>Harmony Hotel - 0.5 miles from venue</li>
          <li>Music City Inn - 1 mile from venue</li>
          <li>Melody Suites - 1.5 miles from venue</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Transportation</h2>
        <p>Shuttle services will be available from designated parking areas to the festival grounds. More information will be provided closer to the event date.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What items are prohibited at the festival?</AccordionTrigger>
            <AccordionContent>
              Prohibited items include outside food and drinks, weapons, drugs, and professional cameras. A full list will be provided in your ticket confirmation email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is the festival age-restricted?</AccordionTrigger>
            <AccordionContent>
              Harmony Fest is an all-ages event. However, attendees under 18 must be accompanied by an adult.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What happens if it rains?</AccordionTrigger>
            <AccordionContent>
              The festival will proceed rain or shine. Please check the weather forecast and come prepared.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}

