"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { artists } from "@/lib/data";

export default function FeaturedArtists() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.slice(0, 6).map((artist) => (
            <Card key={artist.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{artist.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{artist.genre}</p>
                <p className="mt-2 line-clamp-2">{artist.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}