import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="card-premium card-glow overflow-hidden group">
        <div className="relative h-48">
          {post.imagePath ? (
            <Image
              src={post.imagePath}
              alt={post.title}
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
              className="object-cover"
            />
          ) : (
            <div className="h-full bg-gradient-to-br from-teal-600/5 to-navy-900/5 flex items-center justify-center">
              <span className="text-navy-400 text-sm">{post.category}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <Badge variant="teal">{post.category}</Badge>

          <h3 className="text-xl font-display text-navy-900 mt-3 group-hover:text-teal-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-navy-600 mt-2 text-sm line-clamp-2">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4 text-xs text-navy-400">
            <span>{formattedDate}</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
