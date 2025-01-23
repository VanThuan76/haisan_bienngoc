'use client'

import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
    return (
        <footer className="w-full flex flex-col justify-center items-center gap-2">
            <h3 className="text-center text-black text-lg font-semibold">⚠️ Nhà hàng cam đoan thực phẩm tươi sống , không dùng chất phụ gia làm hại sức khỏe khách hàng</h3>
            <div className="w-full bg-[#0c70b4] max-w-[1440px] px-4 md:px-12 lg:px-24 py-10 flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-6 justify-between items-start gap-4">
                    <Link href="/" className="flex items-center col-span-2 md:col-span-3">
                        <Image
                            src="/logo_full.jpg"
                            alt="Hải sản biển ngọc"
                            width={150}
                            height={150}
                            className="w-[150px] h-[150px] object-contain object-center"
                        />
                    </Link>
                    <div className="flex flex-col justify-start items-start gap-2 text-white text-base font-semibold col-span-1">
                        <Link href="/">Trang chủ</Link>
                        <Link href="/gioi-thieu">Giới thiệu</Link>
                        <Link href="thuc-don">Thực đơn</Link>
                        <Link href="lien-he">Liên hệ</Link>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 text-white text-lg font-semibold col-span-2">
                        <h2 className="text-lg md:text-2xl font-bold">LIÊN HỆ</h2>
                        <p className="font-bold text-base ">Hải Sản Biển Ngọc</p>
                        <p className="text-base"><strong>Địa chỉ:</strong> Số 9 Trần Quốc Nghiễn(đối diện cung cá heo), Hạ Long, Quảng Ninh</p>
                        <p className="text-base"><strong>Hotline:</strong> 0835563555 | 0988522888</p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white/50"></div>
                <div className="w-full flex justify-between items-center text-white">
                    <p>Bản quyền thuộc về Hải Sản Biển Ngọc</p>
                </div>
            </div>
        </footer>
    );
}
