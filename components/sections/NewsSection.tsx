"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { news } from "@/lib/data";

export default function NewsSection() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.date}</p>
                <p className="line-clamp-3">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}