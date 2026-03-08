import { createPageMetadata } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog";
import BlogListingWithFilters from "@/components/sections/BlogListingWithFilters";
import CTASection from "@/components/sections/CTASection";

export const metadata = createPageMetadata({
  title: "Blog | Cirugía Bariátrica y Salud - Dr. Mario Ruvalcaba",
  description:
    "Artículos sobre cirugía bariátrica, nutrición, salud y estilo de vida saludable. Información confiable del Dr. Mario Ruvalcaba, cirujano bariátrico en Mérida.",
  path: "/blog",
  keywords: [
    "blog cirugía bariátrica",
    "artículos salud",
    "nutrición bariátrica",
    "estilo de vida saludable",
  ],
  ogImage: "/images/og-blog.png",
});

export default function BlogPage() {
  const categories = Array.from(
    new Set(BLOG_POSTS.map((post) => post.category))
  );

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">Blog</p>
          <h1 className="mt-4 text-4xl font-display text-white md:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-navy-300">
            Artículos informativos sobre cirugía bariátrica, nutrición y estilo
            de vida saludable.
          </p>
        </div>
      </section>

      <BlogListingWithFilters posts={BLOG_POSTS} categories={categories} />

      <CTASection
        heading="¿Tienes Dudas sobre Cirugía Bariátrica?"
        description="Agenda una consulta con el Dr. Mario Ruvalcaba y resuelve todas tus preguntas."
        variant="navy"
      />
    </>
  );
}
