import Image from 'next/image'

export default function GalleryPage() {
  const images = [
    { src: '/placeholder.svg', alt: 'Concert crowd' },
    { src: '/placeholder.svg', alt: 'Main stage performance' },
    { src: '/placeholder.svg', alt: 'DJ set' },
    { src: '/placeholder.svg', alt: 'Festival grounds' },
    { src: '/placeholder.svg', alt: 'Food vendors' },
    { src: '/placeholder.svg', alt: 'Art installation' },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

