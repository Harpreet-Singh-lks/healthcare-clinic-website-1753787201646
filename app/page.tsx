import React from 'react';
import { ProfileCard } from '../components/ProfileCard'
import { WidgetVideo } from '../components/WidgetVideo'
import { WidgetTestimonialCarousel } from '../components/WidgetTestimonialCarousel'
import { WidgetTestimonialCard } from '../components/WidgetTestimonialCard'
import { WidgetServicesAndConditions } from '../components/WidgetServicesAndConditions'
import { WidgetProfile } from '../components/WidgetProfile'
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ProfileCard
        name="Abigail Peugh"
        photoUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        bio="Digital product creator and entrepreneur helping others build successful online businesses."
        socialLinks={[
          { platform: "instagram", url: "https://instagram.com/abigailpeugh", icon: "instagram", label: "Instagram" },
          { platform: "tiktok", url: "https://tiktok.com/@abigailpeugh", icon: "tiktok", label: "TikTok" },
          { platform: "email", url: "mailto:hello@abigailpeugh.com", icon: "email", label: "Email" },
          { platform: "youtube", url: "https://youtube.com/@abigailpeugh", icon: "youtube", label: "YouTube" }
        ]}
        className=""
      />
      <WidgetVideo
        title="Meet Dr. Bellamy"
        onPlay={() => console.log('Video play clicked')}
        className=""
      />
      <WidgetTestimonialCarousel
        testimonials={[
          {
            quote: "Dr. Bellamy was incredibly thorough and caring. He took the time to explain everything clearly and made me feel comfortable throughout the entire process.",
            author: "Sarah Johnson",
            age: 45,
            condition: "Diabetes",
            rating: 5
          },
          {
            quote: "The best doctor I've ever had. His approach to preventive care is outstanding and he really listens to your concerns.",
            author: "Michael Chen",
            age: 52,
            condition: "Heart Disease",
            rating: 5
          },
          {
            quote: "Professional, knowledgeable, and genuinely caring. Dr. Bellamy has helped me manage my condition effectively.",
            author: "Emily Rodriguez",
            age: 38,
            condition: "Lung Disease",
            rating: 5
          }
        ]}
        overallRating={4.9}
        totalReviews={127}
        recommendedRate={98}
        className=""
      />
      <WidgetTestimonialCard
        quote="Dr. Bellamy was incredibly thorough and caring. He took the time to explain everything clearly and made me feel comfortable throughout the entire process."
        author="Sarah Johnson"
        age={45}
        condition="Diabetes Management"
        rating={5}
        className=""
      />
      <WidgetServicesAndConditions
        specializedServices={[
          { name: "Cardiovascular Care", icon: "/Storefront/Doctor Widget/Services And Conditions/HeartMonitor.svg" },
          { name: "Preventive Medicine", icon: "/Storefront/Doctor Widget/Services And Conditions/MedBag.svg" },
          { name: "General Consultation", icon: "/Storefront/Doctor Widget/Services And Conditions/HealthPlus.svg" }
        ]}
        conditions={[
          "Diabetes Management",
          "Hypertension",
          "High Cholesterol",
          "Preventive Care",
          "Cardiovascular Health",
          "Weight Management"
        ]}
        onAskCondition={() => console.log('Ask about condition clicked')}
        className=""
      />
      <WidgetProfile
        doctorName="Dr. Bellamy Nicholas"
        specialty="MD, Family Medicine"
        patients="1000+"
        experience="10 Yrs"
        rating="4.5"
        imageSrc="/Storefront/Doctor Widget/DoctorImage.png"
        onBookAppointment={() => console.log('Book appointment clicked')}
        className=""
      />
      <WidgetAboutDoctor
        aboutText="Dr. Bellamy Nicholas is a board-certified family medicine physician with over 10 years of experience in primary care. He specializes in preventive medicine, chronic disease management, and patient education."
        education={[
          { college: "Harvard Medical School", activity: "Medical Degree" },
          { college: "Johns Hopkins University", activity: "Residency in Family Medicine" },
          { college: "Stanford University", activity: "Fellowship in Preventive Medicine" }
        ]}
        hospitals={[
          "Massachusetts General Hospital",
          "Johns Hopkins Hospital",
          "Stanford Medical Center"
        ]}
        certificates={[
          "American Board of Family Medicine",
          "Board Certified in Preventive Medicine",
          "Advanced Cardiac Life Support"
        ]}
        languages={["English", "Spanish", "French"]}
        className=""
      />
    </main>
  );
}
