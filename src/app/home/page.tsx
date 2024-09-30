import React from 'react';
import Header from '@/components/Home/Header';
import Hero from '@/components/Home/Hero';
import ContentSection from '@/components/Home/ContentSection';
import Footer from '@/components/Home/Footer';

const ThienPhucExpress: React.FC = () => {
  const navItems = ['Home', 'Document', 'Hỗ trợ'];
  const aboutParagraphs = [
    'Goship API là giải pháp tích hợp API vận chuyển và chuyển phát nhanh dành cho doanh nghiệp đối tác, những người kinh doanh nhỏ lẻ và hơn thế nữa.',
    'Đối tượng phục vụ chính của Goship là các website bán lẻ, marketplace, logistics platform...',
    'Phụ thuộc vào cách vận hành của doanh nghiệp của bạn, có 2 cách tích hợp API vận chuyển: <br /> Sử dụng nội bộ: Bạn sẽ tự kiểm soát hầu hết công việc lựa chọn đơn vị vận chuyển, in nhãn, bàn giao hàng... <br /> Tích hợp trong trang checkout: Hướng tiếp cận này phù hợp với các dịch vụ bên thứ 3 như các sàn, platform SaaS... Điểm lợi của hướng này là tăng trải nghiệm người dùng, khách hàng sẽ hài lòng hơn khi họ được quyền so sánh giá, lựa chọn đơn vị vận chuyển mà họ có thể nhận hàng tiện nhất.',
    'Goship API rất đơn giản, kết nối với Goship API để tiết kiệm thời gian và chi phí phát triển sản phẩm, giúp bạn tập trung hơn vào nghiệp vụ cốt lõi trong sản phẩm của mình.'
  ];
  const differenceParagraphs = [
    'Không giống với các giải pháp dịch vụ vận chuyển khác, Thiên Phúc bị ám ảnh bởi việc giúp các shop tối ưu thời gian, chi phí và quy trình khi làm việc với các đơn vị vận chuyển trên thị trường.',
    'Chúng tôi nghĩ rằng, một phần mềm hay một hệ thống mà quá nhiều chức năng sẽ khiến người dùng phải mất nhiều thời gian tìm hiểu cách sử dụng. Mặc dù đã cân nhắc rất nhiều lần việc xây dựng các tính năng như quản lý kho, POS... nhưng cuối cùng chúng tôi nhận ra rằng, khách hàng của chúng tôi không cần một sản phẩm có nhiều tính năng.',
    'Chúng tôi đã tiến hành khảo sát các khách hàng là các shop bán lẻ sử dụng phần mềm Goship và 1 vài khách hàng sử dụng Goship API. Nhu cầu thực sự là 1 phần mềm quản lý vận đơn tập trung, dễ dàng thay đổi đơn vị giao hàng mà không ảnh hưởng tới hoạt động kinh doanh hàng ngày, chăm sóc đơn hàng nếu có sự cố thì báo lại cho người gửi, nhắc đơn vị vận chuyển lấy hàng và giao hàng nhanh hơn, kiểm soát được tiền thu hộ có chính xác không, bàn giao hàng hóa và nhận hàng hoàn từ shipper có đủ không, đơn vị vận chuyển nào đang tối ưu hiện tại...',
    'Đó là lý do chúng tôi quyết tâm xây dựng một giải pháp giúp khách hàng quản lý vận đơn một cách hiệu quả bằng thước đo tỷ lệ đơn hàng thành công.'
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-50 text-neutral-900">
      <div className="flex flex-col w-full max-md:max-w-full">
        <Header title="TPEXPRESS" navItems={navItems} userImage="/user-avatar.jpg" />
        <main className="flex flex-col px-8 py-6 w-full text-lg font-medium max-md:px-5 max-md:max-w-full">
          <Hero
            imageSrc="/assets/Logistics.png"
            title="THIÊN PHÚC EXPRESS"
            subtitle="Lựa chọn vận chuyển hàng hóa tốt nhất!"
            description="Đảm bảo giao hàng tận nơi trong thời gian ngắn nhất"
          />
          <ContentSection title="Về TPPartner API" paragraphs={aboutParagraphs} />
          <ContentSection title="TPExpress có gì khác biệt?" paragraphs={differenceParagraphs} />
        </main>
        <Footer email="thienphucex@dev.vn" phone="1900 9000" />
      </div>
    </div>
  );
};

export default ThienPhucExpress;