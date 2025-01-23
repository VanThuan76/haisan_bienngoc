'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
    "/main_background_0.jpg",
    "/main_background_1.jpg",
    "/main_background_2.jpg",
    "/main_background_3.jpg",
]

export function HeroSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex">
                        {images.map((src, index) => (
                            <div className="embla__slide flex-[0_0_100%]" key={index}>
                                <Image
                                    src={src || "/placeholder.svg"}
                                    alt={`Chợ Quê Restaurant Slide ${index + 1}`}
                                    width={1920}
                                    height={600}
                                    priority={index === 0}
                                    className="w-full max-h-[50vh] md:max-h-[70vh] object-cover object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#0c70b4]"
                    size="icon"
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Trước</span>
                </Button>
                <Button
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#0c70b4]"
                    size="icon"
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Sau</span>
                </Button>
            </div>
        </section>
    )
}
