"use client";

import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white space-y-6 p-4">
        <div className="flex items-center justify-center mb-6">
          <Music className="w-12 h-12 mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold">SoundWave</h1>
        </div>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Experience three days of unforgettable music, art, and community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Tickets
          </Button>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black">
            View Lineup
          </Button>
        </div>
      </div>
    </div>
  );
}