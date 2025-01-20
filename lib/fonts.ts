import { JetBrains_Mono as FontMono, Roboto, Berkshire_Swash } from "next/font/google"

export const fontRoboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap",
})

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const fontBerkshireSwash = Berkshire_Swash({
    subsets: ["latin"],
    variable: "--font-berkshire-swash",
    weight: ["400"],
    style: "normal",
    display: "swap",
})
