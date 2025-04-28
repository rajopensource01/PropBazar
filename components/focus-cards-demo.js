import { FocusCards } from "@/components/ui/focus-cards"

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Luxury Apartments",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sWhWCMe3Eu6NRXaHXhQXbxtbYQYS1z.png",
    },
    {
      title: "Urban Development",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AeCPITNhne5XTR9kYY3jDDzIX8ken1.png",
    },
    {
      title: "Premium Villas",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BPDpzMA5Z7zauU0smpq8UnXfHDy9OV.png",
    },
    {
      title: "City Living",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oU5ZTzewpcCiadZAiQ9hGZbrj97iNc.png",
    },
    {
      title: "Modern Estates",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AQdPQypr4yA4ps56bamT4u1ANtanyd.png",
    },
    {
      title: "Commercial Properties",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O5dqVHQFec3rGeLo9HEyIgA1bAjDZx.png",
    },
  ]

  return <FocusCards cards={cards} />
}
