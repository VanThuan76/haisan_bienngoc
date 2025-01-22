'use client'

import Link from "next/link";

import { cn } from "@/lib/utils";
import { FloatingSocialButtons } from "../(home)/_sections/floating-social-buttons";
import { SiteFooter } from "../(home)/_sections/site-footer";
import { SiteHeader } from "../(home)/_sections/site-header";
import { fontBerkshireSwash } from "@/lib/fonts";

const Page = () => {
    return (
        <div className="relative min-h-screen">
            <SiteHeader />
            <main className="min-h-screen bg-navy-900 text-white">
                <section className="relative h-[30vh] flex flex-col justify-center items-center py-8 text-center bg-[url('/overview_sea.webp')] bg-cover bg-center bg-no-repeat mb-8">
                    <h1 className="relative z-40 text-4xl font-bold mb-2">Hải Sản Biển Ngọc</h1>
                    <p className="relative z-40 text-xl">Trân trọng - Lắng nghe - Cải thiện</p>
                    <div className="absolute z-30 w-full h-full bg-black/70"></div>
                </section>
                <section className="w-full mx-auto max-w-[1440px] px-4 md:px-12 lg:px-24 flex flex-col justify-start items-start gap-8 text-black">
                    <h2 className={cn("uppercase font-bold text-xl md:text-2xl", fontBerkshireSwash.className)}>Liên Hệ</h2>
                    <p className="text-muted-foreground">Chúng tôi luôn trân trọng mọi ý kiến của quý khách, ý kiến từ quý khách sẽ giúp chúng tôi nâng cao về chất lượng phục vụ chính quý khách cũng góp phần vào sự thành công và phát triển thương hiệu Hải Sản Biển Ngọc của chúng tôi:</p>
                    <p><strong>Địa chỉ:</strong> Số 9 Trần Quốc Nghiễn(đối diện cung cá heo), Hạ Long, Quảng Ninh</p>
                    <p><strong>Số điện thoại:</strong> 0835563555 | 0988522888</p>
                    <Link href="https://www.facebook.com/people/Nh%C3%A0-H%C3%A0ng-Bi%E1%BB%83n-Ng%E1%BB%8Dc/61571621663581/" target="_blank"><strong>Fanpage:</strong> https://www.facebook.com/people/Nh%C3%A0-H%C3%A0ng-Bi%E1%BB%83n-Ng%E1%BB%8Dc/61571621663581/</Link>
                    <Link href="https://www.google.com/maps/dir/?api=1&destination=20.942260493469%2C107.13060760498" target="_blank"><strong>Google Map:</strong> https://www.google.com/maps/dir/?api=1&destination=20.942260493469%2C107.13060760498</Link>
                </section>
            </main>
            <SiteFooter />
            <FloatingSocialButtons />
        </div>
    );
}

export default Page;
