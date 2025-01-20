'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import { fontBerkshireSwash } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function SpaceSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 5000
    });

    useEffect(() => {
        if (emblaApi) {
            const interval = setInterval(() => {
                emblaApi.scrollNext();
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [emblaApi]);

    const images = [
        '/background_1.jpg',
        '/background_2.jpg',
        '/background_6.jpg',
        '/background_3.jpg',
        '/background_4.jpg',
        '/background_7.jpg',
        '/background_5.jpg',
    ];

    return (
        <section className="relative w-full mx-auto max-w-[1440px] px-4 md:px-12 lg:px-24 pb-10">
            <h2 className={cn("uppercase font-bold text-xl md:text-2xl border-b-2 border-b-[#0c70b4] w-fit mb-10 leading-10 tracking-wide md:tracking-widest", fontBerkshireSwash.className)}>
                Không Gian Hải Sản Biển Ngọc
            </h2>
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex space-x-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="embla__slide__small flex-shrink-0">
                            <Image
                                priority={true}
                                src={src}
                                alt={`Space Image ${idx + 1}`}
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
