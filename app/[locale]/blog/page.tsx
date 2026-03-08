import { setRequestLocale, getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { getBlogPosts } from "@/lib/blog";
import BlogListingWithFilters from "@/components/sections/BlogListingWithFilters";
import CTASection from "@/components/sections/CTASection";
import type { Locale } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (locale === "en") {
    return createPageMetadata({
      title: "Blog | Bariatric Surgery & Health - Dr. Mario Ruvalcaba",
      description: "Articles about bariatric surgery, nutrition, health, and healthy lifestyle. Reliable information from Dr. Mario Ruvalcaba.",
      path: "/blog",
      locale: "en",
      alternateLocalePath: "/blog",
      keywords: [
        "bariatric surgery blog",
        "health articles",
        "bariatric nutrition",
        "healthy lifestyle",
      ],
      ogImage: "/images/og-blog.png",
    });
  }

  return createPageMetadata({
    title: "Blog | Cirugía Bariátrica y Salud - Dr. Mario Ruvalcaba",
    description:
      "Artículos sobre cirugía bariátrica, nutrición, salud y estilo de vida saludable. Información confiable del Dr. Mario Ruvalcaba, cirujano bariátrico en Mérida.",
    path: "/blog",
    locale: "es",
    alternateLocalePath: "/blog",
    keywords: [
      "blog cirugía bariátrica",
      "artículos salud",
      "nutrición bariátrica",
      "estilo de vida saludable",
    ],
    ogImage: "/images/og-blog.png",
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });

  const blogPosts = getBlogPosts(locale as Locale);
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">Blog</p>
          <h1 className="mt-4 text-4xl font-display text-white md:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-navy-300">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      <BlogListingWithFilters posts={blogPosts} categories={categories} />

      <CTASection
        heading={t("ctaHeading")}
        description={t("ctaDescription")}
        variant="navy"
      />
    </>
  );
}
