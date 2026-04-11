import type { MetadataRoute } from "next";

// AI bots that power search / answer engines — explicit allow improves
// visibility in ChatGPT, Perplexity, Gemini, and Apple Intelligence results.
const AI_BOTS_ALLOWED = [
  "GPTBot",             // OpenAI training + SearchGPT
  "OAI-SearchBot",      // OpenAI search crawler
  "ChatGPT-User",       // ChatGPT live page fetches
  "ClaudeBot",          // Anthropic training
  "Claude-Web",         // Claude.ai live fetches
  "Google-Extended",    // Gemini / AI Overviews opt-in signal
  "Applebot-Extended",  // Apple Intelligence
  "PerplexityBot",      // Perplexity answer engine
  "Amazonbot",          // Alexa / Amazon Rufus
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything except internal API routes
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Explicit allow for AI search bots (pro-visibility for YMYL medical)
      ...AI_BOTS_ALLOWED.map((userAgent) => ({ userAgent, allow: "/" })),
      // Block CCBot (Common Crawl — uncontrolled open corpus redistribution)
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: "https://drmarioruvalcaba.com/sitemap.xml",
    host: "https://drmarioruvalcaba.com",
  };
}
