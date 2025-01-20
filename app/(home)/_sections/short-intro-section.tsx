'use client'

import Image from "next/image";

import { fontBerkshireSwash } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function ShortIntroSection() {
    return (
        <section className="relative w-full mx-auto max-w-[1440px] px-4 md:px-12 lg:px-24 pb-10">
            <div className="w-full flex flex-wrap justify-center items-start md:justify-between gap-8">
                <div className="relative flex flex-col justify-start items-start gap-2">
                    <h2 className={cn("uppercase font-bold text-xl md:text-2xl border-b-2 border-b-[#0c70b4] leading-10 tracking-wide md:tracking-widest", fontBerkshireSwash.className)}>Hải Sản Biển Ngọc</h2>
                    <h3>ĐỈNH CAO ẨM THỰC CƠM TỰ CHỌN & HẢI SẢN TƯƠI SỐNG! 🍽️</h3>
                    <p>🔥 KHÁM PHÁ HẢI SẢN TƯƠI NGON TUYỆT ĐỈNH 🦐🦀</p>
                    <p>💦 Hải sản tươi sống tại quán: Chọn món tại bể – tươi ngon 100%.</p>
                    <p>💦 Đặt bàn lẩu trước: Giảm ngay 10% cho bữa ăn thêm tiết kiệm!</p>
                    <Image
                        src="/sea_waves.png"
                        alt="@sea_waves"
                        width={720}
                        height={720}
                        priority={true}
                        className="absolute -bottom-32 left-24 w-full h-full object-cover object-center -z-10"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="relative w-full md:w-[300px] h-[400px] overflow-hidden rounded-md">
                        <Image
                            src="/food_7.jpg"
                            alt="@food7"
                            width={720}
                            height={720}
                            priority={true}
                            className="w-full h-full object-cover object-center rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
                        />
                        <div className="absolute bottom-2 right-2 p-2 bg-[#f26f25] rounded-md text-xs font-semibold">Liên hệ ngay: 0988522888</div>
                    </div>
                    <div className="relative w-full md:w-[300px] h-[400px] overflow-hidden rounded-md">
                        <Image
                            src="/food_8.jpg"
                            alt="@food8"
                            width={720}
                            height={720}
                            priority={true}
                            className="w-full h-full object-cover object-center rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
                        />
                        <div className="absolute bottom-2 right-2 p-2 bg-[#f26f25] rounded-md text-xs font-semibold">Liên hệ ngay: 0835563555</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
