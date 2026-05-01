"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Questions",
          id: "products",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ExamStore Iraq"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="مستقبلك يبدأ من هنا: أسئلة وزارية موثوقة"
      description="احصل على أفضل الأسئلة الوزارية لجميع المراحل الدراسية في العراق. دقة، سرعة، وضمان للنجاح."
      tag="منصة الاختبارات الأولى في العراق"
      buttons={[
        {
          text: "تصفح الأسئلة",
          href: "#products",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-vintage-library-with-wooden-shelves-sophisticated-green-lamps_482257-125675.jpg",
          imageAlt: "طالب يدرس",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/girl-is-sitting-white-table-office-she-holds-tablet-works-with-financial-diagrams_197531-25030.jpg",
          imageAlt: "لوحة تحكم ذكية",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pens-pencils-markers-wooden-desk_23-2147654049.jpg",
          imageAlt: "ورقة امتحانية",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/group-ethnic-multicultural-students-sitting-table-library_496169-1216.jpg",
          imageAlt: "طالب يدرس",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-freelancer-working-from-home-using-financial-graphs_482257-119054.jpg",
          imageAlt: "لوحة تحكم ذكية",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="لماذا تختار منصتنا لتحميل الأسئلة؟"
      buttons={[
        {
          text: "تعرف علينا",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "أمن المعلومات",
          description: "ضمان تحميل آمن وسريع لجميع الملفات.",
          imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-concept-illustration_23-2151883558.jpg",
          imageAlt: "digital security shield",
        },
        {
          title: "تحميل فوري",
          description: "احصل على الأسئلة مباشرة بعد إتمام عملية الشراء.",
          imageSrc: "http://img.b2bpic.net/free-photo/half-charged-battery-front-side-with-white-background_187299-40052.jpg",
          imageAlt: "fast download icon",
        },
        {
          title: "دقة عالية",
          description: "نسخ وزارية أصلية ومطابقة للمناهج الحالية.",
          imageSrc: "http://img.b2bpic.net/free-photo/stamp-envelope-illustration_187299-47988.jpg",
          imageAlt: "official document stamp",
        },
      ]}
      title="مميزاتنا الأساسية"
      description="نوفر أدوات متكاملة تساعد الطالب العراقي على التفوق."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "رياضيات - السادس العلمي",
          price: "5,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/ball-pen-clipboard-with-papers_23-2147688649.jpg",
          imageAlt: "math exam cover",
        },
        {
          id: "2",
          name: "فيزياء - السادس العلمي",
          price: "4,500 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-boy-reading_23-2147663445.jpg",
          imageAlt: "science exam cover",
        },
        {
          id: "3",
          name: "كيمياء - الثالث المتوسط",
          price: "4,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-vintage-objects-still-life_23-2150348591.jpg",
          imageAlt: "history exam cover",
        },
        {
          id: "4",
          name: "إسلامية - السادس الإعدادي",
          price: "3,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-stack-books-with-we-did-it-message_23-2151966290.jpg",
          imageAlt: "literature exam cover",
        },
        {
          id: "5",
          name: "لغة عربية - الثالث المتوسط",
          price: "3,500 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-with-pen-writing-paper_1232-615.jpg",
          imageAlt: "physics exam booklet",
        },
        {
          id: "6",
          name: "تاريخ - السادس الأدبي",
          price: "4,000 IQD",
          imageSrc: "http://img.b2bpic.net/free-photo/science-elements-lab-with-empty-notepad_23-2148697226.jpg",
          imageAlt: "chemistry exam cover",
        },
      ]}
      title="أحدث الأسئلة الوزارية"
      description="اختر المادة والمرحلة التي تود الحصول على أسئلتها الوزارية."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "طالب",
          price: "10,000 IQD",
          subtitle: "دخول لمدة شهر",
          buttons: [
            {
              text: "اشتراك",
              href: "#",
            },
          ],
          features: [
            "تحميل 5 أسئلة",
            "دعم فني محدود",
          ],
        },
        {
          id: "pro",
          badge: "متميز",
          price: "25,000 IQD",
          subtitle: "دخول لمدة فصل دراسي",
          buttons: [
            {
              text: "اشتراك",
              href: "#",
            },
          ],
          features: [
            "تحميل 20 سؤالاً",
            "دعم فني 24/7",
          ],
        },
        {
          id: "gold",
          badge: "نخبة",
          price: "45,000 IQD",
          subtitle: "اشتراك سنوي شامل",
          buttons: [
            {
              text: "اشتراك",
              href: "#",
            },
          ],
          features: [
            "تحميل غير محدود",
            "حلول نموذجية مجانية",
          ],
        },
      ]}
      title="باقات الاشتراكات"
      description="احصل على وصول غير محدود للملفات بأفضل الأسعار."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "15,000+",
          description: "طالب راضٍ",
        },
        {
          id: "2",
          value: "500+",
          description: "أسئلة وزارية",
        },
        {
          id: "3",
          value: "98%",
          description: "نسبة نجاح",
        },
      ]}
      title="إنجازاتنا"
      description="فخورون بمساعدة آلاف الطلبة."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "مفيد جداً",
          quote: "بفضل هذه المنصة، حصلت على درجات عالية في الوزاري.",
          name: "علي محمد",
          role: "طالب سادس علمي",
          imageSrc: "http://img.b2bpic.net/free-photo/surprised-woman-graduate-holding-books-head-cap_176420-14259.jpg",
        },
        {
          id: "2",
          title: "سرعة فائقة",
          quote: "الأسئلة دقيقة جداً ومطابقة لما جاء في الامتحان الوزاري.",
          name: "سارة أحمد",
          role: "طالبة ثالث متوسط",
          imageSrc: "http://img.b2bpic.net/free-photo/international-day-education-student-attending-school-anime-style_23-2151066347.jpg",
        },
        {
          id: "3",
          title: "تنظيم رائع",
          quote: "سهولة الوصول للملفات كانت مفتاح نجاحي.",
          name: "حسن خليل",
          role: "طالب سادس أدبي",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-girl-with-documents_23-2147657320.jpg",
        },
        {
          id: "4",
          title: "سعر مناسب",
          quote: "الأسعار ممتازة مقابل الجودة المقدمة.",
          name: "مريم جاسم",
          role: "طالبة إعدادية",
          imageSrc: "http://img.b2bpic.net/free-photo/notebooks-orange-green-background-school-snack-concept_169016-26381.jpg",
        },
        {
          id: "5",
          title: "دعم فني متعاون",
          quote: "ساعدوني كثيراً في اختيار المواد الصحيحة.",
          name: "ياسر محمود",
          role: "طالب سادس",
          imageSrc: "http://img.b2bpic.net/free-photo/female-ceo-boss-discussing-videocall-about-new-project_482257-106452.jpg",
        },
      ]}
      title="آراء الطلبة"
      description="ماذا يقول الطلبة عن منصتنا."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "كيف أشتري الأسئلة؟",
          content: "يمكنك إضافة الأسئلة للسلة والدفع عبر بطاقات الماستر كارد أو زين كاش.",
        },
        {
          id: "2",
          title: "هل الأسئلة محدثة؟",
          content: "نعم، نقوم بتحديث الأسئلة فور صدورها من الوزارة.",
        },
        {
          id: "3",
          title: "هل يمكنني استرجاع أموالي؟",
          content: "إذا كان الملف معطوباً، سنقوم بإرسال نسخة جديدة أو تعويضك.",
        },
      ]}
      title="أسئلة شائعة"
      description="كل ما تحتاج معرفته عن المنصة."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="تواصل معنا"
      title="هل تحتاج إلى مساعدة؟"
      description="فريق الدعم الفني جاهز للإجابة على جميع استفساراتك."
      imageSrc="http://img.b2bpic.net/free-photo/front-view-student-holding-books-library_23-2148727868.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ExamStore Iraq"
      columns={[
        {
          title: "الشركة",
          items: [
            {
              label: "من نحن",
              href: "#",
            },
            {
              label: "الأسئلة",
              href: "#products",
            },
          ],
        },
        {
          title: "الدعم",
          items: [
            {
              label: "اتصل بنا",
              href: "#contact",
            },
            {
              label: "الخصوصية",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 ExamStore Iraq. جميع الحقوق محفوظة."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
