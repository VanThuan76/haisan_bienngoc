import Link from 'next/link'
import { Facebook, MapPin, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function FloatingSocialButtons() {
    return (
        <div className="fixed right-4 bottom-0 -translate-y-1/2 flex flex-col gap-4 z-50">
            <Button asChild size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700 relative">
                <Link href="https://www.facebook.com/choquebuffet" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                    <span className="absolute -inset-0.5 animate-ping bg-blue-600 rounded-full opacity-75"></span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full bg-green-600 hover:bg-green-700 relative">
                <Link href="https://goo.gl/maps/your-restaurant-location" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-5 w-5" />
                    <span className="sr-only">Location</span>
                    <span className="absolute -inset-0.5 animate-ping bg-green-600 rounded-full opacity-75"></span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full bg-red-600 hover:bg-red-700 relative">
                <Link href="tel:0369555155">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
                    <span className="absolute -inset-0.5 animate-ping bg-red-600 rounded-full opacity-75"></span>
                </Link>
            </Button>
        </div>
    )
}
