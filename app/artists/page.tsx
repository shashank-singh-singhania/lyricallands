'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ScrollReveal } from "@/components/scroll-reveal"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'

interface Artist {
  id: number
  name: string
  image: string
  bio: string
  genre: string
}

const artists: Artist[] = [
  { id: 1, name: "ARIJIT SINGH", image: "/placeholder.svg?height=300&width=300", bio: "Arijit Singh is a renowned Indian playback singer known for his soulful voice and emotional renditions.", genre: "Bollywood, Pop" },
  { id: 2, name: "ATIF ASLAM", image: "/placeholder.svg?height=300&width=300", bio: "Atif Aslam is a Pakistani playback singer, songwriter, and actor, famous for his powerful vocals and versatile performances.", genre: "Pop, Rock" },
  { id: 3, name: "SHREYA GHOSHAL", image: "/placeholder.svg?height=300&width=300", bio: "Shreya Ghoshal is an Indian playback singer with a mellifluous voice, known for her versatility across multiple languages and genres.", genre: "Bollywood, Classical" },
  { id: 4, name: "SONU NIGAM", image: "/placeholder.svg?height=300&width=300", bio: "Sonu Nigam is a veteran Indian playback singer, known for his versatile voice and contributions to Bollywood music.", genre: "Bollywood, Pop" },
  { id: 5, name: "VISHAL MISHRA", image: "/placeholder.svg?height=300&width=300", bio: "Vishal Mishra is an Indian singer and music composer known for his soulful compositions and emotive singing.", genre: "Bollywood, Indie" },
  { id: 6, name: "JUBIN NAUTIYAL", image: "/placeholder.svg?height=300&width=300", bio: "Jubin Nautiyal is an Indian playback singer known for his melodious voice and romantic ballads.", genre: "Bollywood, Pop" },
  { id: 7, name: "RAFTAAR", image: "/placeholder.svg?height=300&width=300", bio: "Raftaar is an Indian rapper, lyricist, and music composer known for his fast-paced rapping style and hard-hitting lyrics.", genre: "Hip Hop, Rap" },
  { id: 8, name: "KR$NA", image: "/placeholder.svg?height=300&width=300", bio: "KR$NA is an Indian rapper known for his complex rhyme schemes and socially conscious lyrics.", genre: "Hip Hop, Rap" },
  { id: 9, name: "SEEDHE MAUT", image: "/placeholder.svg?height=300&width=300", bio: "Seedhe Maut is an Indian hip-hop duo known for their gritty lyrics and unique delivery style.", genre: "Hip Hop, Rap" },
  { id: 10, name: "AR RAHMAN", image: "/placeholder.svg?height=300&width=300", bio: "A.R. Rahman is an Indian composer, singer, and music producer known for his innovative fusion of Eastern classical music with electronic music sounds.", genre: "World Music, Bollywood" },
  { id: 11, name: "ANUV JAIN", image: "/placeholder.svg?height=300&width=300", bio: "Anuv Jain is an Indian singer-songwriter known for his soulful indie pop songs and heartfelt lyrics.", genre: "Indie Pop" },
  { id: 12, name: "JONITA GANDHI", image: "/placeholder.svg?height=300&width=300", bio: "Jonita Gandhi is an Indo-Canadian playback singer known for her versatile voice and ability to sing in multiple languages.", genre: "Bollywood, Pop" },
  { id: 13, name: "DARSHAN RAVAL", image: "/placeholder.svg?height=300&width=300", bio: "Darshan Raval is an Indian playback singer, songwriter, and composer known for his romantic ballads and energetic performances.", genre: "Pop, Bollywood" },
  { id: 14, name: "VISHAL SHEYKHAR", image: "/placeholder.svg?height=300&width=300", bio: "Vishal-Shekhar is a music composer duo known for their work in Bollywood, creating a blend of contemporary and traditional sounds.", genre: "Bollywood" },
  { id: 15, name: "ANIRUDH", image: "/placeholder.svg?height=300&width=300", bio: "Anirudh Ravichander is an Indian film composer and singer known for his work in Tamil cinema and his catchy, youthful music.", genre: "Film Music, Pop" },
  { id: 16, name: "PRATEEK KUHAD", image: "/placeholder.svg?height=300&width=300", bio: "Prateek Kuhad is an Indian singer-songwriter known for his indie folk sound and introspective lyrics.", genre: "Indie Folk" },
  { id: 17, name: "DILJIT DOSANJH", image: "/placeholder.svg?height=300&width=300", bio: "Diljit Dosanjh is an Indian singer, actor, and television presenter known for his contributions to Punjabi music and Bollywood.", genre: "Punjabi, Pop" },
  { id: 18, name: "KARAN AUJLA", image: "/placeholder.svg?height=300&width=300", bio: "Karan Aujla is an Indian singer, rapper, and songwriter known for his work in Punjabi music.", genre: "Punjabi, Hip Hop" },
  { id: 19, name: "DIVINE", image: "/placeholder.svg?height=300&width=300", bio: "DIVINE is an Indian rapper known for his gritty, realistic portrayal of street life in Mumbai through his music.", genre: "Hip Hop, Rap" },
  { id: 20, name: "BADSHAH", image: "/placeholder.svg?height=300&width=300", bio: "Badshah is an Indian rapper, singer, and music producer known for his catchy hooks and party anthems.", genre: "Hip Hop, Pop" },
]

export default function ArtistsPage() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans pt-20">
      <ScrollReveal>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#7ed321] mb-8">
              SONIC FEST ARTISTS
            </h1>
            <p className="text-xl text-center mb-12">
              Discover the incredible lineup of artists performing at Sonic Fest!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {artists.map((artist) => (
                <Dialog key={artist.id}>
                  <DialogTrigger asChild>
                    <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
                      <div className="relative h-64">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-[#ffd700] mb-2">{artist.name}</h3>
                        <p className="text-sm text-[#7ed321]">{artist.genre}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-[#2a2a2a] text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#ffd700] mb-4">{artist.name}</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                        <Image
                          src={artist.image}
                          alt={artist.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="w-full md:w-2/3">
                        <p className="text-lg mb-4">{artist.bio}</p>
                        <p className="text-[#7ed321] font-bold">Genre: {artist.genre}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <footer className="bg-[#1e1e1e] text-center py-8">
        <p className="text-sm text-[#7ed321]">© 2025 Sonic Fest. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

