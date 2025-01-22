'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function PricingSection() {
    return (
        <section className="relative -mt-20 w-full mx-auto z-30">
            <div className="max-w-[1440px] px-4 py-10 grid gap-6 md:grid-cols-2">
                <Card className="overflow-hidden relative">
                    <CardContent className="relative z-30 flex items-center space-x-0 md:space-x-4 p-6">
                        <Image
                            priority={true}
                            src="/logo.png"
                            alt="@logo"
                            width={96}
                            height={96}
                            className="h-24 w-auto rounded-md hidden md:block"
                        />
                        <div className="flex flex-col justify-start items-start bg-white px-4 py-2 rounded-md">
                            <h3 className="text-2xl font-bold text-[#f26f25]">CƠM TỰ CHỌN- BUFFET</h3>
                            <span className="p-0 m-0">(hơn 20 món + tặng kèm chè hoa quả tráng miệng)</span>
                            <p className="text-4xl font-bold text-[#f26f25]">
                                <span className="text-2xl">98.000</span>
                                <span className="text-base md:text-lg font-semibold text-black"> VNĐ/người</span>
                            </p>
                        </div>
                    </CardContent>
                    <div className="absolute top-6 -right-36 bg-[#ec2028] text-white text-sm font-bold py-1 px-40 transform rotate-45 z-40">
                        ĐẶC BIỆT
                    </div>
                    <Image
                        priority={true}
                        src="/card_background.png"
                        alt="@card_background"
                        width={350}
                        height={350}
                        className="absolute z-10 w-full h-full bottom-0 left-0 object-cover object-center"
                    />
                    <div className="w-full h-full bg-black/10 absolute z-20 bottom-0 left-0"></div>
                </Card>
                <Card className="relative overflow-hidden">
                    <CardContent className="relative w-full h-full flex items-center justify-between p-6 z-30">
                        <div className="flex flex-col justify-start items-start bg-white px-4 py-2 rounded-md">
                            <h3 className="text-2xl font-bold text-[#f26f25]">BÀN LẨU HẢI SẢN</h3>
                            <span className="p-0 m-0">(đặt trước)</span>
                            <p className="text-4xl font-bold text-[#f26f25]">
                                GIẢM
                                <span className="ml-2 text-base md:text-lg font-semibold text-black">10%</span>
                            </p>
                        </div>
                    </CardContent>
                    <div className="absolute top-6 -right-36 bg-[#ec2028] text-white text-sm font-bold py-1 px-40 transform rotate-45 z-40">
                        ĐẶC BIỆT
                    </div>
                    <Image
                        priority={true}
                        src="/card_background.png"
                        alt="@card_background"
                        width={350}
                        height={350}
                        className="absolute z-10 w-full h-full bottom-0 left-0 object-cover object-center"
                    />
                    <div className="w-full h-full bg-black/10 absolute z-20 bottom-0 left-0"></div>
                </Card>
            </div>
        </section>
    )
}
