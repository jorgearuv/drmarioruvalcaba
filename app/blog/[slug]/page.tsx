import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { generateBlogArticleJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import BlogContentRenderer from "@/components/sections/BlogContentRenderer";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const metadata = createPageMetadata({
    title: `${post.title} | Dr. Mario Ruvalcaba`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "cirugía bariátrica", "Dr. Mario Ruvalcaba"],
  });

  if (post.imagePath) {
    const ogImage = {
      url: post.imagePath,
      width: 1200,
      height: 630,
      alt: post.title,
    };
    metadata.openGraph = { ...metadata.openGraph, images: [ogImage] };
    metadata.twitter = { ...metadata.twitter, images: [ogImage] };
  }

  return metadata;
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = generateBlogArticleJsonLd(post, DOCTOR_INFO.siteUrl);

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-navy-300">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70 line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          <Badge variant="teal">{post.category}</Badge>

          <h1 className="mt-4 font-display text-3xl text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-navy-300">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{formattedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.imagePath && (
        <div className="mx-auto max-w-4xl px-4 -mt-8 relative z-10">
          <Image
            src={post.imagePath}
            alt={post.title}
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, 896px"
            priority
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <BlogContentRenderer content={post.content} />
        </div>
      </article>

      <CTASection
        heading="¿Tienes más preguntas sobre la cirugía bariátrica?"
        description="Agenda una consulta de valoración. Juntos revisamos tu caso, resolvemos tus dudas y, si la cirugía es la opción adecuada para ti, te acompañamos en cada paso del camino."
        variant="teal"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
