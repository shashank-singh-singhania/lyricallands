import Link from "next/link"

interface HowToBuyStepProps {
  number: number
  title: string
  href?: string
  isLink: boolean
}

export function HowToBuyStep({ number, title, href, isLink }: HowToBuyStepProps) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#fff9c4] text-[#1e1e1e] flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-1">
        {isLink ? (
          <Link href={href!} className="text-xl font-bold text-[#7ed321] hover:text-[#7ed321]/80">
            {title}
          </Link>
        ) : (
          <h3 className="text-xl font-bold text-white">{title}</h3>
        )}
      </div>
    </div>
  )

  return content
}

