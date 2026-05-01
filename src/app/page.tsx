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
        { name: "الرئيسية", id: "hero" },
        { name: "الأسئلة", id: "products" },
        { name: "الباقات", id: "pricing" },
        { name: "الأسئلة الشائعة", id: "faq" },
        { name: "تواصل معنا", id: "contact" }
      ]}
      brandName="منصة الأسئلة الوزارية"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="بوابة الطالب العراقي للنجاح الوزاري"
      description="نقدم أضخم مكتبة للأسئلة الوزارية الموثوقة مع الحلول النموذجية لمختلف المراحل الدراسية."
      tag="منصة النجاح والتميز"
      buttons={[{ text: "ابدأ التحميل الآن", href: "#products" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/elegant-vintage-library-with-wooden-shelves-sophisticated-green-lamps_482257-125675.jpg", imageAlt: "library" },
        { imageSrc: "http://img.b2bpic.net/free-photo/girl-is-sitting-white-table-office-she-holds-tablet-works-with-financial-diagrams_197531-25030.jpg", imageAlt: "student" },
        { imageSrc: "http://img.b2bpic.net/free-photo/pens-pencils-markers-wooden-desk_23-2147654049.jpg", imageAlt: "desk" }
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      title="نسعى لدعم الطلبة بأفضل الموارد التعليمية"
      buttons={[{ text: "اكتشف المزيد", href: "#features" }]}
      useInvertedBackground={false}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={true}
      title="لماذا منصتنا هي الخيار الأفضل؟"
      description="نحن نركز على الدقة والسهولة في الحصول على المراجع الوزارية."
      features={[
        { title: "دقة وزارية", description: "جميع الأسئلة مطابقة للنسخ الوزارية الرسمية.", imageSrc: "http://img.b2bpic.net/free-photo/stamp-envelope-illustration_187299-47988.jpg" },
        { title: "سهولة التصفح", description: "نظام بحث متطور للوصول لمادتك بسرعة.", imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-concept-illustration_23-2151883558.jpg" },
        { title: "دعم كامل", description: "مساعدة تقنية فورية في حال حدوث أي مشكلة.", imageSrc: "http://img.b2bpic.net/half-charged-battery-front-side-with-white-background_187299-40052.jpg" }
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      title="تصفح الأسئلة الوزارية"
      description="اختر المادة والمرحلة الدراسية وحمل الملفات مباشرة."
      products={[
        { id: "1", name: "رياضيات السادس العلمي", price: "5,000 IQD", imageSrc: "http://img.b2bpic.net/free-photo/ball-pen-clipboard-with-papers_23-2147688649.jpg" },
        { id: "2", name: "فيزياء السادس العلمي", price: "4,500 IQD", imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-boy-reading_23-2147663445.jpg" },
        { id: "3", name: "كيمياء الثالث المتوسط", price: "4,000 IQD", imageSrc: "http://img.b2bpic.net/flat-lay-vintage-objects-still-life_23-2150348591.jpg" }
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      title="باقات اشتراك تناسب الجميع"
      description="اختر الباقة المناسبة لمرحلتك الدراسية واحصل على وصول شامل."
      plans={[
        { id: "basic", badge: "طالب مبتدئ", price: "10,000 IQD", subtitle: "دخول أساسي", features: ["تحميل 5 ملفات", "دعم أساسي"], buttons: [{ text: "اشترك الآن" }] },
        { id: "pro", badge: "طالب متميز", price: "25,000 IQD", subtitle: "دخول متقدم", features: ["تحميل غير محدود", "دعم 24/7", "حلول مجانية"], buttons: [{ text: "اشترك الآن" }] }
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      gridVariant="bento-grid"
      textboxLayout="default"
      useInvertedBackground={false}
      title="أرقامنا"
      description="نحن نفخر بما قدمناه للطلاب."
      metrics={[
        { id: "m1", value: "15,000+", description: "طالب مستفيد" },
        { id: "m2", value: "600+", description: "ملف وزاري جاهز" },
        { id: "m3", value: "98%", description: "نسبة رضا المستخدمين" }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      title="ماذا يقول الطلبة؟"
      description="آراء الطلبة الذين حققوا درجات النجاح معنا."
      testimonials={[
        { id: "t1", title: "ممتاز جداً", quote: "الأسئلة وفرت علي الكثير من الجهد والبحث.", name: "علي أحمد", role: "طالب سادس" },
        { id: "t2", title: "منقذ حقيقي", quote: "التنظيم والسرعة كانا رائعين.", name: "مريم يوسف", role: "طالبة ثالث متوسط" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      title="الأسئلة الشائعة"
      description="إجابات على أهم تساؤلاتكم."
      faqs={[
        { id: "f1", title: "كيف يتم الدفع؟", content: "يمكنكم الدفع عبر زين كاش أو بطاقات الماستر كارد." },
        { id: "f2", title: "هل يمكن تحميل الملفات على الهاتف؟", content: "نعم، المنصة تدعم جميع الأجهزة." }
      ]}
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="تواصل معنا"
      title="هل لديك استفسار؟"
      description="فريق الدعم متاح للإجابة عن أسئلتك في أي وقت."
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ExamStore Iraq"
      columns={[
        { title: "المنصة", items: [{ label: "الأسئلة", href: "#products" }, { label: "من نحن", href: "#about" }] },
        { title: "الدعم", items: [{ label: "اتصل بنا", href: "#contact" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}