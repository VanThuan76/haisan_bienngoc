'use client'

import Image from "next/image";

import { fontBerkshireSwash } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function OutStandingFoodSection() {
    return (
        <section className="relative w-full mx-auto py-10 space-y-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-4 max-w-[1440px] px-4 md:px-12 lg:px-24">
                <div className="hidden md:block relative w-full h-[400px] overflow-hidden rounded-md">
                    <Image
                        src="/food_2.jpg"
                        alt="@food_2"
                        width={400}
                        height={400}
                        priority={true}
                        className="w-full h-full object-cover object-center rounded-md"
                    />
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <h2 className={cn("uppercase font-bold text-xl md:text-2xl border-b-2 border-b-[#0c70b4] leading-10 tracking-wide md:tracking-widest", fontBerkshireSwash.className)}>Đồ Ăn Sáng</h2>
                    <p className="text-muted-foreground">Hãy bắt đầu ngày mới với những món ăn sáng tươi ngon, đầy đủ dưỡng chất tại Quầy Đồ Ăn Sáng của Biển Ngọc. Chúng tôi mang đến cho bạn một menu sáng tuyệt vời, giúp bạn nạp năng lượng cho cả ngày dài. Đặc biệt, với những nguyên liệu tươi ngon, sạch sẽ, chế biến ngay tại quầy, bạn sẽ luôn cảm nhận được sự tươi mới trong từng món ăn.</p>
                    <ul className="flex flex-wrap gap-4 justify-start items-center">
                        <li className="font-semibold border-b border-slate-500">Bún kù kì</li>
                        <li className="font-semibold border-b border-slate-500">Bún thập cẩm</li>
                        <li className="font-semibold border-b border-slate-500">Bún cua ghẹ</li>
                        <li className="font-semibold border-b border-slate-500">Bún bò</li>
                        <li className="font-semibold border-b border-slate-500">Bún bề bề</li>
                        <li className="font-semibold border-b border-slate-500">Bún cá song</li>
                        <li className="font-semibold border-b border-slate-500">Bánh cuốn chả mực</li>
                        <li className="font-semibold border-b border-slate-500">Bún và bánh đa đỏ</li>
                    </ul>
                </div>
                <div className="col-span-2 flex flex-wrap justify-start items-center gap-2">
                    {['/food_13.jpg', '/food_3.jpg', '/food_4.jpg', '/food_5.jpg'].map((image, index) => {
                        return (
                            <div className="relative w-[150px] h-[150px] overflow-hidden rounded-md">
                                <Image
                                    src={image}
                                    alt={`image_${index}`}
                                    width={150}
                                    height={150}
                                    priority={true}
                                    className="w-full h-full object-cover object-top rounded-md"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="w-full bg-[#d5f3f8]">
                <div className="max-w-[1440px] px-4 md:px-12 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-4">
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <h2 className={cn("uppercase font-bold text-xl md:text-2xl leading-10 tracking-wide md:tracking-widest", fontBerkshireSwash.className)}>Cơm Tự Chọn</h2>
                        <p className="text-muted-foreground">
                            Hãy bắt đầu ngày mới với bữa cơm sáng đầy đủ dinh dưỡng tại **Biển Ngọc**. Quầy **Cơm Tự Chọn** của chúng tôi sẽ mang đến cho bạn sự đa dạng với hơn 20 món ăn tươi ngon, được chế biến từ những nguyên liệu chất lượng nhất. Bạn có thể tự do lựa chọn những món ăn yêu thích, từ cơm chiên, thịt kho, canh nóng đến các món xào, đảm bảo no bụng và đầy năng lượng cho cả ngày.
                        </p>
                        <ul className="flex flex-wrap gap-4 justify-start items-center">
                            <li className="font-semibold border-b border-slate-500">Cơm chiên trứng</li>
                            <li className="font-semibold border-b border-slate-500">Cơm kho thịt</li>
                            <li className="font-semibold border-b border-slate-500">Cơm sườn xào chua ngọt</li>
                            <li className="font-semibold border-b border-slate-500">Cơm canh rau củ thanh đạm</li>
                            <li className="font-semibold border-b border-slate-500">Cơm chiên tỏi</li>
                            <li className="font-semibold border-b border-slate-500">Cơm gà xối mỡ</li>
                            <li className="font-semibold border-b border-slate-500">Thịt nướng</li>
                            <li className="font-semibold border-b border-slate-500">Cá sốt cà chua</li>
                            <li className="font-semibold border-b border-slate-500">Canh xương khoai</li>
                            <li className="font-semibold border-b border-slate-500">Thịt trưng mắm tép</li>
                            <li className="font-semibold border-b border-slate-500">Canh cải ngao</li>
                            <li className="font-semibold border-b border-slate-500">Gà kho gừng</li>
                            <li className="font-semibold border-b border-slate-500">Thịt kho trứng</li>
                            <li className="font-semibold border-b border-slate-500">Sườn xào chua ngọt</li>
                            <li className="font-semibold border-b border-slate-500">Mực nướng muối ớt</li>
                            <li className="font-semibold border-b border-slate-500">Mực chiên xù</li>
                            <li className="font-semibold border-b border-slate-500">Ba chỉ rang cháy cạnh</li>
                        </ul>
                    </div>
                    <div className="hidden md:block relative w-full h-[400px] overflow-hidden rounded-md">
                        <Image
                            src="/food_12.jpg"
                            alt="@food_12"
                            width={400}
                            height={400}
                            priority={true}
                            className="w-full h-full object-cover object-center rounded-md"
                        />
                    </div>
                    <div className="col-span-2 flex flex-wrap justify-end items-end gap-2">
  {[
    '/food_11.jpg',
    '/food_10.jpg',
    '/food_1.jpg',
    '/food_14.jpg',
    '/food_15.jpg',
    '/food_16.jpg',
    '/food_17.jpg',
    '/food_18.jpg',
    '/food_19.jpg',
    '/food_20.jpg',
    '/food_21.jpg',
    '/food_22.jpg',
    '/food_23.jpg',
    '/food_24.jpg',
  ].map((image, index) => {
    return (
      <div
        key={index}
        className="relative w-[150px] h-[150px] overflow-hidden rounded-md"
      >
        <Image
          src={image}
          alt={`image_${index}`}
          width={150}
          height={150}
          priority={true}
          className="w-full h-full object-cover object-top rounded-md"
        />
      </div>
    );
  })}
</div>

                </div>
            </div>
        </section>

    )
}
