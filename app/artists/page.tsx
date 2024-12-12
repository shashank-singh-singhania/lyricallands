import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const artists = [
  { name: 'The Melodic Waves', genre: 'Indie Rock', category: 'Headliner' },
  { name: 'Electro Pulse', genre: 'Electronic', category: 'Headliner' },
  { name: 'Acoustic Dreams', genre: 'Folk', category: 'Supporting' },
  { name: 'Jazz Fusion Collective', genre: 'Jazz', category: 'Supporting' },
  { name: 'The Rising Stars', genre: 'Pop', category: 'New Talent' },
  { name: 'Rhythm Rebels', genre: 'Hip Hop', category: 'New Talent' },
]

export default function ArtistsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Artists</h1>
      <Tabs defaultValue="all">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="headliners">Headliners</TabsTrigger>
          <TabsTrigger value="supporting">Supporting Acts</TabsTrigger>
          <TabsTrigger value="new-talent">New Talent</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.name} {...artist} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="headliners">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists
              .filter((artist) => artist.category === 'Headliner')
              .map((artist) => (
                <ArtistCard key={artist.name} {...artist} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="supporting">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists
              .filter((artist) => artist.category === 'Supporting')
              .map((artist) => (
                <ArtistCard key={artist.name} {...artist} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="new-talent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists
              .filter((artist) => artist.category === 'New Talent')
              .map((artist) => (
                <ArtistCard key={artist.name} {...artist} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ArtistCard({ name, genre, category }:any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{genre}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          alt={name}
          className="w-full h-64 object-cover mb-4"
          height="400"
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
        <p className="text-sm text-muted-foreground mb-4">{category}</p>
        <div className="flex space-x-4">
          <Link className="text-sm font-medium hover:underline" href="#">
            Spotify
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Instagram
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Twitter
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

