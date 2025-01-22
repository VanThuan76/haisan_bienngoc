'use client'
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { FloatingSocialButtons } from "../(home)/_sections/floating-social-buttons";
import { SiteFooter } from "../(home)/_sections/site-footer";
import { SiteHeader } from "../(home)/_sections/site-header";

const Page = () => {
    return (
        <div className="relative min-h-screen">
            <SiteHeader />
            <main className="min-h-screen bg-navy-900 text-white">
                <section className="relative h-[30vh] flex flex-col justify-center items-center py-8 text-center bg-[url('/overview_sea.webp')] bg-cover bg-center bg-no-repeat mb-8">
                    <h1 className="relative z-40 text-4xl font-bold mb-2">Hải Sản Biển Ngọc</h1>
                    <p className="relative z-40 text-xl">Đặc Sắc - Tươi Sống - Giá Rẻ</p>
                    <div className="absolute z-30 w-full h-full bg-black/70"></div>
                </section>
                <Tabs defaultValue="breakfast" className="w-full max-w-7xl mx-auto">
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
                            </CardHeader>
                            <CardContent className="flex flex-wrap justify-start items-start gap-4">
                                <div className="md:border-r md:border-r-blue-300 md:pr-4">
                                    <p className="mb-2 underline decoration-indigo-500 font-semibold">Combo 200k / Suất</p>
                                    <ul className="list-disc list-inside uppercase space-y-2">
                                        <li>Tôm rảo biển</li>
                                        <li>Mực ống nhảy</li>
                                        <li>Nem hải sản kem bơ</li>
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
                                    <li>Trai tươi</li>
                                    <li>Sá sùng Quan Lạn</li>
                                    <li>Ruốc tôm, ruốc hàu, ruốc bề bề, ruốc cá</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="mt-4 text-center bg-[#d5f3f8] text-black py-4">
                    <h2 className="text-2xl font-bold mb-2">Đặc biệt</h2>
                    <p className="font-semibold">Nhận đặt tiệc: Thịt trâu tươi, gà đồi, hải sản tươi sống,...</p>
                    <p>Mực tươi, mực khô Cô Tô, Nem cua bể, Tôm, Thịt chưng mắm tép, Cá thu....</p>
                </div>

                <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    <Image src="/party_1.jpg" alt="Hải sản tươi sống" width={400} height={300} className="w-full h-full rounded-lg shadow-lg" />
                    <Image src="/party_2.jpg" alt="Món ăn đặc sắc" width={400} height={300} className="w-full h-full rounded-lg shadow-lg" />
                    <Image src="/party_3.jpg" alt="Không gian nhà hàng" width={400} height={300} className="w-full h-full rounded-lg shadow-lg" />
                </div>
            </main>
            <SiteFooter />
            <FloatingSocialButtons />
        </div>
    );
}

export default Page;
