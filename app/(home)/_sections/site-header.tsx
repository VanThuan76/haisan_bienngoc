'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"


export function SiteHeader() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-background/90">
            <div className="hidden md:flex w-full justify-between items-center h-[70px]">
                <nav className="flex items-center justify-center flex-1 space-x-6 text-sm font-medium relative">
                    {[
                        { href: "/", label: "Trang chủ" },
                        { href: "/gioi-thieu", label: "Giới thiệu" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors text-[#0c70b4] hover:text-foreground/80 text-lg uppercase font-bold",
                                pathname === link.href ? "border-b-2 border-b-[#0c70b4]" : ""
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Hải sản biển ngọc"
                            width={40}
                            height={40}
                            className="w-28 h-28 object-cover object-center rounded-full"
                        />
                    </Link>

                    {[
                        { href: "/thuc-don", label: "Thực đơn" },
                        { href: "/lien-he", label: "Liên hệ" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors text-[#0c70b4] hover:text-foreground/80 text-lg uppercase font-bold",
                                pathname === link.href ? "border-b-2 border-b-[#0c70b4]" : ""
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="flex md:hidden w-full justify-between items-center h-[70px] px-4">
                <div className="flex items-center justify-start flex-1">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Hải sản biển ngọc"
                            width={40}
                            height={40}
                            className="w-14 h-14 object-cover object-center rounded-full"
                        />
                    </Link>
                </div>

                <button
                    className="block md:hidden text-2xl"
                    onClick={toggleMenu}
                >
                    <Icons.menu />
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg">
                    {[
                        { href: "/", label: "Trang chủ" },
                        { href: "/gioi-thieu", label: "Giới thiệu" },
                        { href: "/thuc-don", label: "Thực đơn" },
                        { href: "/lien-he", label: "Liên hệ" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors text-[#0c70b4] hover:text-foreground/80 text-lg uppercase font-bold",
                                pathname === link.href ? "border-b-2 border-b-[#0c70b4]" : ""
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}
