"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import BlogCard from "@/components/sections/BlogCard";
import type { BlogPost } from "@/types";

interface BlogListingWithFiltersProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogListingWithFilters({
  posts,
  categories,
}: BlogListingWithFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const t = useTranslations("blog");

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <>
      {/* Category Filter Pills */}
      <section className="border-b border-navy-100 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              selectedCategory === null
                ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white"
                : "border border-navy-200/60 text-navy-600 hover:border-teal-400 hover:text-teal-600"
            }`}
          >
            {t("allCategories")}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white"
                  : "border border-navy-200/60 text-navy-600 hover:border-teal-400 hover:text-teal-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-navy-500">
              {t("noPosts")}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
