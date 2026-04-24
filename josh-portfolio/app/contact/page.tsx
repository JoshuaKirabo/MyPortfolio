import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact — Joshua Kirabo",
  description: "Get in touch with Joshua Kirabo for software engineering work.",
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader activePath="/contact" />

      <section className="bg-secondary py-[90px]">
        <div className="container">
          <p className="text-orange text-xl font-Syne font-bold">Contact</p>
          <h1 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] font-Syne font-bold tracking-[-1.5px] mt-2">
            Let&rsquo;s Build Something Great
          </h1>
          <p className="paragraph mt-6 max-w-[760px]">
            I&rsquo;m open to product engineering roles, contract builds, and collaboration on
            thoughtful software.
          </p>
        </div>
      </section>

      <section className="bg-white py-[100px]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl border border-black-text-100">
            <h2 className="text-black-800 text-2xl font-Syne font-bold">Email</h2>
            <p className="paragraph mt-4">joshuak2001@gmail.com</p>
            <h2 className="text-black-800 text-2xl font-Syne font-bold mt-8">Location</h2>
            <p className="paragraph mt-4">Arizona, United States</p>
          </div>
          <div className="p-8 rounded-2xl border border-black-text-100">
            <h2 className="text-black-800 text-2xl font-Syne font-bold">Availability</h2>
            <p className="paragraph mt-4">
              Usually replies within one business day. Best for me: project brief, desired
              timeline, and expected outcomes.
            </p>
            <a href="mailto:joshuak2001@gmail.com" className="inline-flex mt-8 btn-primary">
              Send Email
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
