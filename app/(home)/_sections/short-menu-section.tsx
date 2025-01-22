'use client'

import Image from "next/image";

import { fontBerkshireSwash } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ShortMenuSection() {
    const router = useRouter()

    return (
        <section className="relative w-full mx-auto bg-[#d5f3f8] text-black">
            <div className="max-w-[1440px] py-10 px-4 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-4">
                <div className="w-full order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2">
                    {['/combo_food_1.jpg', '/combo_food_2.jpg', '/combo_food_3.jpg', '/combo_food_4.jpg'].map((image, index) => {
                        return (
                            <div key={index} className="relative w-full lg:w-[300px] h-[400px] md:h-[300px] overflow-hidden rounded-md">
                                <Image
                                    src={image}
                                    alt={`image_${index}`}
                                    width={300}
                                    height={300}
                                    priority={true}
                                    className="w-full h-full object-cover object-center rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="w-full order-1 lg:order-2 flex flex-col justify-start items-start gap-2">
                    <h2 className={cn("uppercase font-bold text-xl md:text-2xl", fontBerkshireSwash.className)}>Thực đơn</h2>
                    <div className="space-y-1">
                        <p className="font-semibold">💯 Cơm ngon quà hấp dẫn Buffet tự chọn chỉ với 98k/suất </p>
                        <span>Cơm tự chọn: Hơn 20+ món mặn, xào, canh thay đổi mỗi ngày, từ thịt kho, cá chiên, sườn xào chua ngọt đến rau củ thanh đạm.</span>
                        <span>Cơm tự chọn: 98k/1 suất với kem chè hoa quả tráng miệng miễn phí! Cơm ngon như cơm nhà, đầy đủ món, khiến bạn no căng bụng mà vẫn đủ năng lượng cho cả ngày dài.</span>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">🔈 Đặc biệt tại Hải Sản Biển Ngọc: </p>
                        <span>Menu hải sản tươi sống: Đến ngay để thưởng thức những món hải sản tươi ngon, được chế biến ngay tại quán. Từ cá, tôm, mực cho đến sò, ngao... tất cả đều tươi ngon, chế biến theo công thức đặc biệt từ đầu bếp dày dặn kinh nghiệm.</span>
                        <span>Bàn lẩu: Đặt trước giảm ngay 10%, bạn sẽ được thưởng thức những nồi lẩu hải sản nóng hổi, ngọt lịm, đúng chất hải sản biển!</span>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">🥘 Menu đa dạng:</p>
                        <span>Bánh quấn chả mực: Một món ăn đặc sản không thể thiếu, vừa thơm ngon lại hấp dẫn.</span>
                        <span>Bún ăn sáng: Bữa sáng nhanh chóng và đầy đủ dinh dưỡng tại Hải Sản Biển Ngọc.</span>
                    </div>
                    <p className="font-semibold">🌟 Chuyên phục vụ đồ ăn sáng, cơm tự chọn và các món hải sản tươi sống. Chúng tôi tự hào mang đến cho bạn bữa ăn ngon miệng, đầy đủ chất dinh dưỡng với giá cả vô cùng hợp lý.</p>
                    <Button className="mt-4" onClick={() => router.push('/thuc-don')}>Xem chi tiết</Button>
                </div>
            </div>
        </section>
    );
}
