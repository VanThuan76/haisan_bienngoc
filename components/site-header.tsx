import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteHeader() {
    return (
        <header className="hidden md:block sticky top-0 z-40 w-full border-b bg-[#0c70b4]">
            <div className="w-full flex h-[70px] items-center space-x-4 justify-end px-4">
                <div className="w-full flex items-center justify-end">
                    <nav className="w-full flex justify-end items-center space-x-8">
                        <Link
                            href={siteConfig.links.google_map}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex items-center gap-2">
                                <Icons.address className="size-6 text-black font-semibold  bg-white rounded-full p-1" />
                                <span className="text-xs text-white font-semibold">Số 9 Trần Quốc Nghiễn(đối diện cung cá heo), Hạ Long, Quảng Ninh</span>
                            </div>
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex items-center gap-2">
                                <Icons.oclock className="size-6 text-black font-semibold bg-white rounded-full p-1" />
                                <span className="text-xs text-white font-semibold">Thứ 2 – CN: 8:00 AM – 24:00 PM</span>
                            </div>
                        </Link>
                        <Link
                            href={siteConfig.links.phone}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex items-center gap-2">
                                <Icons.phone className="size-6 text-black font-semibold  bg-white rounded-full p-1" />
                                <span className="text-xs text-white font-semibold">Hotline: 0835563555 | 0988522888</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
