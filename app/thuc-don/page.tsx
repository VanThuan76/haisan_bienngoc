'use client'

import Image from "next/image"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { fontBerkshireSwash } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { FloatingSocialButtons } from "../(home)/_sections/floating-social-buttons";
import { SiteFooter } from "../(home)/_sections/site-footer";
import { SiteHeader } from "../(home)/_sections/site-header";

const Page = () => {
    const [tabValue, setTabValue] = useState("combo");

    const menuItems = [
        { name: "Mực tươi", price: 150000 },
        { name: "Tôm rảo biển", price: 150000 },
        { name: "Cá lạp xạp", price: 150000 },
        { name: "Ngao các loại", price: 100000 },
        { name: "Ghẹ xanh", price: 650000 },
        { name: "Cua gạch", price: 750000 },
        { name: "Cua thịt", price: 550000 },
        { name: "Hà ruột", price: 180000 },
        { name: "Ốc hương", price: 240000 },
        { name: "Sò huyết", price: 180000 },
        { name: "Mực trứng", price: 220000 },
        { name: "Mực ống", price: 320000 },
        { name: "Tôm xú", price: 780000 },
        { name: "Tôm hùm đỏ", price: 1590000 },
        { name: "Cá song", price: 450000 },
        { name: "Cá dìa", price: 450000 },
        { name: "Bề bề trứng", price: 250000 },
        { name: "Hàu nướng mỡ hành", price: 150000 },
        { name: "Ốc đá", price: 180000 },
        { name: "Nem hải sản kèm bún", price: 160000 },
        { name: "Mực giã tay", price: 180000 },
        { name: "Cơ mai chiên", price: 330000 },
        { name: "Tôm bơ tỏi", price: 290000 },
        { name: "Mực khô nướng", price: 250000 },
        { name: "Hải sâm xào thập cẩm", price: 250000 },
        { name: "Ốc nhảy", price: 25000 },
        { name: "Tu hài", price: 550000 },
        { name: "Ốc móng tay vàng cô tô", price: 190000 },
        { name: "Ốc móng tay xanh", price: 170000 },
        { name: "Ngán", price: 50000 },
    ];

    const imagesCombo = ["/food_6.jpg", "/food_7.jpg", "/food_8.jpg"]
    const imagesBreakFast = ["/food_2.jpg", "/food_3.jpg", "/food_4.jpg", "/food_5.jpg"]
    const imagesFrozen = ["/food_30.jpg", "/food_31.jpg", "/food_27.jpg", "/food_28.jpg"]

    const currentImages = tabValue === "combo" ? imagesCombo : tabValue === "breakfast" ? imagesBreakFast : imagesFrozen

    return (
        <div className="relative min-h-screen">
            <SiteHeader />
            <main className="min-h-screen bg-navy-900 text-white">
                <section className="relative h-[30vh] flex flex-col justify-center items-center py-8 text-center bg-[url('/overview_sea.webp')] bg-cover bg-center bg-no-repeat mb-8">
                    <h1 className="relative z-40 text-4xl font-bold mb-2">Hải Sản Biển Ngọc</h1>
                    <p className="relative z-40 text-xl">Đặc Sắc - Tươi Sống - Giá Rẻ</p>
                    <div className="absolute z-30 w-full h-full bg-black/70"></div>
                </section>

                <Tabs
                    defaultValue={tabValue}
                    onValueChange={(value) => setTabValue(value)}
                    className="w-full max-w-7xl mx-auto"
                >
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="breakfast">Bữa sáng</TabsTrigger>
                        <TabsTrigger value="combo">Combo</TabsTrigger>
                        <TabsTrigger value="frozen">Đồ đông lạnh</TabsTrigger>
                    </TabsList>
                    <TabsContent value="breakfast">
                        <Card className="bg-navy-800 rounded-none">
                            <CardHeader>
                                <CardTitle className="underline decoration-wavy mb-2">Bữa Sáng</CardTitle>
                                <span className="text-xs italic text-muted-foreground">* Áp dụng cho tất cả các ngày trong tuần</span>
                            </CardHeader>
                            <CardContent className="flex flex-wrap justify-start items-start gap-4">
                                <Image
                                    priority
                                    src="/food.jpg"
                                    alt="Đồ ăn sáng"
                                    width={250}
                                    height={150}
                                    className="shadow-lg"
                                />
                                <ul className="list-disc list-inside uppercase space-y-2 border-l border-l-blue-300 pl-4">
                                    <li>Bánh cuốn chả mực</li>
                                    <li>Bún cù kỳ</li>
                                    <li>Bún cá song tươi</li>
                                    <li>Bún hải sản thập cẩm</li>
                                    <li>Bún bề bề tươi</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="combo">
                        <Card className="bg-navy-800 rounded-none">
                            <CardHeader>
                                <CardTitle className="underline decoration-wavy mb-2">Siêu Ưu Đãi - Siêu Rẻ</CardTitle>
                                <span className="text-xs italic text-muted-foreground">* Cam đoan: Thực phẩm tươi sống, sạch không dùng chất phụ gia làm hại sức khoẻ</span>
                            </CardHeader>
                            <CardContent className="flex flex-wrap justify-start items-start gap-4">
                                <div className="md:border-r md:border-r-blue-300 md:pr-4">
                                    <p className="mb-2 underline decoration-green-500 font-semibold">Combo 2Tr / Bàn</p>
                                    <ul className="list-disc list-inside uppercase space-y-2">
                                        <li>Ốc hương hấp</li>
                                        <li>Nem hải sản kèm bún</li>
                                        <li>Salad chua ngọt</li>
                                        <li>Đặc sản Hải Sâm Đen xào bông lơ</li>
                                        <li>Lẩu hải sản</li>
                                        <ul className="list-disc list-inside pl-4 space-y-2">
                                            <li>Tôm rảo</li>
                                            <li>Cá song hoặc cá rìa</li>
                                            <li>Mực ống nhảy</li>
                                            <li>Hà Quảng Yên</li>
                                            <li>Rau, nấm, mỳ, đậu</li>
                                            <li>Trái cây theo mùa</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="md:border-r md:border-r-blue-300 md:pr-4">
                                    <p className="mb-2 underline decoration-indigo-500 font-semibold">Combo 2Tr / Bàn</p>
                                    <ul className="list-disc list-inside uppercase space-y-2">
                                        <li>Tôm rảo biển</li>
                                        <li>Mực ống nhảy</li>
                                        <li>Nem hải sản kèm bún</li>
                                        <li>Hàu nướng mỡ hành</li>
                                        <li>Hải sản xào thập cẩm</li>
                                        <li>Salad chua ngọt</li>
                                        <li>Canh cua cà pháo</li>
                                        <li>Tôm thịt chưng mắm tép</li>
                                        <li>Cơm trắng</li>
                                        <li>Trái cây theo mùa</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2 mb-2 border-t border-t-blue-300 pt-4 md:border-none md:pt-0">
                                    <p className="underline decoration-pink-500 font-semibold">Combo 98k / Suất</p>
                                    <span className="text-muted-foreground">Cơm ngon quà hấp dẫn Buffet tự chọn</span>
                                    <span className="text-muted-foreground">Thực đơn phong phú với 20 món</span>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="frozen">
                        <Card className="bg-navy-800 rounded-none">
                            <CardHeader>
                                <CardTitle className="underline decoration-wavy mb-2">Đồ Đông Lạnh</CardTitle>
                                <span className="text-xs italic text-muted-foreground">* Nhiều sản phẩm địa phương và hải sản bơi sống hàng ngày</span>
                            </CardHeader>
                            <CardContent className="flex flex-wrap justify-start items-start gap-4">
                                <Image
                                    priority
                                    src="/frozen.jpg"
                                    alt="Đồ đông lạnh ngon"
                                    width={250}
                                    height={150}
                                    className="shadow-lg"
                                />
                                <ul className="list-disc list-inside uppercase space-y-2 border-l border-l-blue-300 pl-4">
                                    <li>Chả mực Hạ Long</li>
                                    <li>Nem hải sản, nem cua bể</li>
                                    <li>Tôm thịt chưng mắm tép</li>
                                    <li>Cá thu phấn một nắng</li>
                                    <li>Mực khô, mực tươi Cô Tô</li>
                                    <li>Tôm nõn</li>
                                    <li>Bề bề bóc nõn</li>
                                    <li>Cơ trai tươi</li>
                                    <li>Sá sùng Quan Lạn</li>
                                    <li>Ruốc tôm, ruốc hàu, ruốc bề bề, ruốc cá</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {tabValue === "combo" && (
                    <section className="relative mt-10 md:mt-0 text-center bg-[#d5f3f8] text-black py-8">
                        <h2 className={cn("uppercase font-bold text-2xl md:text-3xl text-black text-center my-2", fontBerkshireSwash.className)}>Đặc biệt</h2>
                        <p className="font-semibold text-xl md:text-2xl">Nhận đặt tiệc: Hải sản tươi sống, thịt trâu tươi, gà đồi,...</p>
                        <Image src="/space_1.jpg" alt="@space_1" width={150} height={150} className="absolute right-16 md:right-32 -top-16 w-[100px] md:w-[150px] h-[100px] md:h-[150px] rotate-12 rounded-lg shadow-lg" />
                        <Image src="/background_7.jpg" alt="@space_2" width={150} height={150} className="absolute right-0 -top-16 w-[100px] md:w-[150px] h-[100px] md:h-[150px] -rotate-12 rounded-lg shadow-lg" />
                    </section>
                )}

                <section className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-6 md:p-0 max-w-7xl justify-center items-center mx-auto">
                    {currentImages.map((image, index) => {
                        return (
                            <Image key={index} src={image} alt={`@food_${index}`} width={300} height={200} className="w-full md:w-[300px] h-[250px] rounded-lg shadow-lg" />
                        )
                    })}
                </section>

                <section className="w-full px-6 md:p-0 mx-auto max-w-7xl mb-4">
                    <h2
                        className={cn(
                            "uppercase font-bold text-xl md:text-2xl text-black text-center my-4",
                            fontBerkshireSwash.className
                        )}
                    >
                        Thực đơn
                    </h2>
                    <div className="overflow-x-auto rounded-lg shadow-lg">
                        <table className="w-full border-collapse bg-white text-left text-sm md:text-base text-black">
                            <thead className="bg-[#0c70b4] text-white">
                                <tr>
                                    <th className="px-4 md:px-6 py-3">STT</th>
                                    <th className="px-4 md:px-6 py-3 text-center md:text-left">Tên Món</th>
                                    <th className="px-4 md:px-6 py-3 text-center md:text-left">Số lượng</th>
                                    <th className="px-4 md:px-6 py-3 text-center md:text-left">Đơn giá (VNĐ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {menuItems.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${index % 2 === 0 ? "bg-blue-50" : "bg-white"
                                            }`}
                                    >
                                        <td className="px-4 md:px-6 py-3 font-medium text-gray-700">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 md:px-6 py-3 break-words">{item.name}</td>
                                        <td className="px-4 md:px-6 py-3">
                                            {index === 25 || index === 29 ? "1(con)" : "1(đĩa)"}
                                        </td>
                                        <td className="px-4 md:px-6 py-3">{item.price.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <SiteFooter />
            <FloatingSocialButtons />
        </div>
    );
}

export default Page;
