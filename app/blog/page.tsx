import { createPageMetadata } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog";
import BlogCard from "@/components/sections/BlogCard";
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

      {/* Category Tags */}
      <section className="border-b border-navy-100 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4">
          <span className="rounded-full bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-2 text-sm font-semibold text-white">
            Todos
          </span>
          {categories.map((category) => (
            <span
              key={category}
              className="cursor-pointer rounded-full border border-navy-200/60 px-4 py-2 text-sm font-medium text-navy-600 transition-colors hover:border-teal-400 hover:text-teal-600"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="¿Tienes Dudas sobre Cirugía Bariátrica?"
        description="Agenda una consulta con el Dr. Mario Ruvalcaba y resuelve todas tus preguntas."
        variant="navy"
      />
    </>
  );
}
