'use client'

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
                    <p className="relative z-40 text-xl">Tầm nhìn - Sứ mệnh - Giá trị cốt lõi</p>
                    <div className="absolute z-30 w-full h-full bg-black/70"></div>
                </section>
                <section className="w-full mx-auto max-w-[1440px] px-4 md:px-12 lg:px-24 flex flex-col justify-start items-start gap-8">
                    <div className="flex flex-col justify-start items-start gap-2 text-black">
                        <h3 className="text-lg font-semibold">Tầm nhìn</h3>
                        <p>Trở thành điểm đến hàng đầu tại Quảng Ninh/Hạ Long cho các buổi tiệc sinh nhật, liên hoan, và tụ họp gia đình bằng việc cung cấp các món hải sản tươi sống, đa dạng, với chất lượng phục vụ đẳng cấp và không gian ấm cúng, gần gũi.</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 text-black">
                        <h3 className="text-lg font-semibold">Sứ mệnh</h3>
                        <p>THải Sản Biển Ngọc cam kết mang đến cho khách hàng trải nghiệm ẩm thực hải sản tuyệt vời với những món ăn tươi ngon, phong phú, được chế biến từ nguyên liệu chất lượng cao. Chúng tôi tạo ra những khoảnh khắc đáng nhớ cho khách hàng trong không gian thoải mái, góp phần mang lại niềm vui và sự gắn kết giữa gia đình và bạn bè.</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 text-black">
                        <h3 className="text-lg font-semibold">Giá trị cốt lõi:</h3>
                        <ul className="space-y-4 pl-4 list-disc list-inside">
                            <li><strong>Sự chuyên nghiệp:</strong> Đội ngũ nhân viên của Hải Sản Biển Ngọc được đào tạo bài bản, tận tình và luôn sẵn sàng phục vụ, đáp ứng mọi nhu cầu của khách hàng.</li>
                            <li><strong>Sự tươi ngon:</strong> Chúng tôi chú trọng đến việc sử dụng hải sản tươi sống, nhập mới mỗi ngày, đảm bảo hương vị tự nhiên và chất lượng của từng món ăn.</li>
                            <li><strong>Sự đa dạng:</strong> Thực đơn phong phú của chúng tôi kết hợp giữa hải sản đặc sản địa phương và các món ăn chế biến sáng tạo, đáp ứng khẩu vị của mọi khách hàng.</li>
                            <li><strong>Chất lượng:</strong> Mỗi món ăn đều được chế biến cẩn thận, đảm bảo hương vị tinh tế và sự hài lòng tối đa.</li>
                            <li><strong>Không gian thoải mái:</strong> Hải Sản Biển Ngọc mang đến không gian sang trọng và gần gũi, lý tưởng cho những buổi gặp gỡ và chia sẻ khoảnh khắc ý nghĩa bên gia đình và bạn bè.</li>
                        </ul>
                    </div>
                </section>
            </main>
            <SiteFooter />
            <FloatingSocialButtons />
        </div>
    );
}

export default Page;
