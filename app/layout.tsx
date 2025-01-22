import "@/styles/globals.css"
import { Metadata, Viewport } from "next"

import { fontRoboto } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
    title: {
        default: "Hải Sản Biển Ngọc",
        template: "%s - Hải Sản Biển Ngọc",
    },
    description: "Hải Sản Biển Ngọc - Cơm ngon tự chọn, bánh cuốn chả mực, bún ăn sáng. Địa chỉ: Số 9, đường Trần Quốc Nghiễn, TP Hạ Long, Quảng Ninh (đối diện Cung Cá Heo). Hotline: 0835563555, 0988522888.",
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: "https://www.facebook.com/profile.php?id=61571621663581&mibextid=wwXIfr",
        title: "Hải Sản Biển Ngọc",
        description: "Hải Sản Biển Ngọc - Cơm ngon tự chọn, bánh cuốn chả mực, bún ăn sáng. Địa chỉ: Số 9, đường Trần Quốc Nghiễn, TP Hạ Long, Quảng Ninh (đối diện Cung Cá Heo). Hotline: 0835563555, 0988522888.",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Logo Hải Sản Biển Ngọc",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@bienngoc",
        title: "Hải Sản Biển Ngọc",
        description: "Hải Sản Biển Ngọc - Cơm ngon tự chọn, bánh cuốn chả mực, bún ăn sáng. Địa chỉ: Số 9, đường Trần Quốc Nghiễn, TP Hạ Long, Quảng Ninh (đối diện Cung Cá Heo). Hotline: 0835563555, 0988522888.",
        images: [
            {
                url: "/logo.png",
                alt: "Logo Hải Sản Biển Ngọc",
            },
        ],
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="vi" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontRoboto.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    <div className="relative flex flex-col min-h-screen">
                        <SiteHeader />
                        <div className="flex-1">{children}</div>
                    </div>
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    )
}
