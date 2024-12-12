"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { schedule } from "@/lib/data";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("day1");

  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Festival Schedule</h2>
      
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="day1">Day 1</TabsTrigger>
          <TabsTrigger value="day2">Day 2</TabsTrigger>
          <TabsTrigger value="day3">Day 3</TabsTrigger>
        </TabsList>
        
        {Object.entries(schedule).map(([day, events]) => (
          <TabsContent key={day} value={day}>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-card rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{event.artist}</h3>
                    <p className="text-muted-foreground">{event.stage}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}