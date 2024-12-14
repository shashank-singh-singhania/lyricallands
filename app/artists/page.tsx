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
  { id: 1, name: "ARIJIT SINGH", image: "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7", bio: "Arijit Singh is a renowned Indian playback singer known for his soulful voice and emotional renditions.", genre: "Bollywood, Pop" },
  { id: 2, name: "ATIF ASLAM", image: "https://pmeworld.com/wp-content/uploads/2024/01/15.jpg", bio: "Atif Aslam is a Pakistani playback singer, songwriter, and actor, famous for his powerful vocals and versatile performances.", genre: "Pop, Rock" },
  { id: 3, name: "SHREYA GHOSHAL", image: "https://pmeworld.com/wp-content/uploads/2024/01/7-1.jpg", bio: "Shreya Ghoshal is an Indian playback singer with a mellifluous voice, known for her versatility across multiple languages and genres.", genre: "Bollywood, Classical" },
  { id: 4, name: "SONU NIGAM", image: "https://pmeworld.com/wp-content/uploads/2024/01/13.jpg", bio: "Sonu Nigam is a veteran Indian playback singer, known for his versatile voice and contributions to Bollywood music.", genre: "Bollywood, Pop" },
  { id: 5, name: "VISHAL MISHRA", image: "https://i.scdn.co/image/ab6761610000e5ebfb13d10be20fdcb5a670f551", bio: "Vishal Mishra is an Indian singer and music composer known for his soulful compositions and emotive singing.", genre: "Bollywood, Indie" },
  { id: 6, name: "JUBIN NAUTIYAL", image: "https://garhwalpost.in/wp-content/uploads/2021/05/IMG-20210517-WA0043.jpg", bio: "Jubin Nautiyal is an Indian playback singer known for his melodious voice and romantic ballads.", genre: "Bollywood, Pop" },
  { id: 7, name: "RAFTAAR", image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/raftaar-032220614-1x1.jpg?VersionId=z3FZmHkHYx50vznddPT1pjUbUMxh2_SX", bio: "Raftaar is an Indian rapper, lyricist, and music composer known for his fast-paced rapping style and hard-hitting lyrics.", genre: "Hip Hop, Rap" },
  { id: 8, name: "KR$NA", image: "https://yt3.googleusercontent.com/ytc/AIdro_n00p_ZePoxDQQ9m1fOAv5f6CPy-GyG97eU5hKHI3wX5cM=s900-c-k-c0x00ffffff-no-rj", bio: "KR$NA is an Indian rapper known for his complex rhyme schemes and socially conscious lyrics.", genre: "Hip Hop, Rap" },
  { id: 9, name: "SEEDHE MAUT", image: "https://www.rsjonline.com/uploads/article_images/T710_2075_Seedhe-Maut-Samarth-Shirke-01-2000x2000.jpg", bio: "Seedhe Maut is an Indian hip-hop duo known for their gritty lyrics and unique delivery style.", genre: "Hip Hop, Rap" },
  { id: 10, name: "AR RAHMAN", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBy9yNSritHoVpM2NTY9-AmZTn15q_2IUoyw&s", bio: "A.R. Rahman is an Indian composer, singer, and music producer known for his innovative fusion of Eastern classical music with electronic music sounds.", genre: "World Music, Bollywood" },
  { id: 11, name: "ANUV JAIN", image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Anuv_Jain_at_Ludhiana_concert.jpg", bio: "Anuv Jain is an Indian singer-songwriter known for his soulful indie pop songs and heartfelt lyrics.", genre: "Indie Pop" },
  { id: 12, name: "JONITA GANDHI", image: "https://i0.wp.com/urbanasian.com/wp-content/uploads/2018/02/Jonita-Gandhi.jpg?resize=640%2C962&ssl=1", bio: "Jonita Gandhi is an Indo-Canadian playback singer known for her versatile voice and ability to sing in multiple languages.", genre: "Bollywood, Pop" },
  { id: 13, name: "DARSHAN RAVAL", image: "https://static.toiimg.com/thumb/imgsize-23456,msid-83179135,width-600,resizemode-4/83179135.jpg", bio: "Darshan Raval is an Indian playback singer, songwriter, and composer known for his romantic ballads and energetic performances.", genre: "Pop, Bollywood" },
  { id: 14, name: "VISHAL SHEYKHAR", image: "https://i.scdn.co/image/ab6761610000e5eb90b6c3d093f9b02aad628eaf", bio: "Vishal-Shekhar is a music composer duo known for their work in Bollywood, creating a blend of contemporary and traditional sounds.", genre: "Bollywood" },
  { id: 15, name: "ANIRUDH", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anirudh_Ravichander_at_Audi_Ritz_Style_Awards_2017.jpg/1200px-Anirudh_Ravichander_at_Audi_Ritz_Style_Awards_2017.jpg", bio: "Anirudh Ravichander is an Indian film composer and singer known for his work in Tamil cinema and his catchy, youthful music.", genre: "Film Music, Pop" },
  { id: 16, name: "PRATEEK KUHAD", image: "https://blackhattalent.com/wp-content/uploads/2024/07/Prateek-Kuhad.jpg", bio: "Prateek Kuhad is an Indian singer-songwriter known for his indie folk sound and introspective lyrics.", genre: "Indie Folk" },
  { id: 17, name: "DILJIT DOSANJH", image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTA1NTA1OWMwLTcxYTEtMTFlZi1iMGJjLTYzOWMwMWNiNWNkMy5qcGc=", bio: "Diljit Dosanjh is an Indian singer, actor, and television presenter known for his contributions to Punjabi music and Bollywood.", genre: "Punjabi, Pop" },
  { id: 18, name: "KARAN AUJLA", image: "https://yt3.googleusercontent.com/xp3u9PT1AJ_yC23-ReUAv_A2CsKLB8xwJGr3sfgnoRG9LrqAjmo25lPX3eTkrTPT92X3l6yySw=s900-c-k-c0x00ffffff-no-rj", bio: "Karan Aujla is an Indian singer, rapper, and songwriter known for his work in Punjabi music.", genre: "Punjabi, Hip Hop" },
  { id: 19, name: "DIVINE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInUtf6ZjwnUtjsTrD7ojKaiP0NW0Hwe0LOg&s", bio: "DIVINE is an Indian rapper known for his gritty, realistic portrayal of street life in Mumbai through his music.", genre: "Hip Hop, Rap" },
  { id: 20, name: "BADSHAH", image: "https://m.media-amazon.com/images/M/MV5BNjdlM2Q1ZDgtYjUzOC00ZmIyLWE2YTEtYWJlZDQ5NTM4ODE1XkEyXkFqcGc@._V1_.jpg", bio: "Badshah is an Indian rapper, singer, and music producer known for his catchy hooks and party anthems.", genre: "Hip Hop, Pop" },
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

