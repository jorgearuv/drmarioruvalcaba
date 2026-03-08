import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const [common, home, procedures, blog, contact, about, faq] =
    await Promise.all([
      import(`../messages/${locale}/common.json`),
      import(`../messages/${locale}/home.json`),
      import(`../messages/${locale}/procedures.json`),
      import(`../messages/${locale}/blog.json`),
      import(`../messages/${locale}/contact.json`),
      import(`../messages/${locale}/about.json`),
      import(`../messages/${locale}/faq.json`),
    ]);

  return {
    locale,
    messages: {
      common: common.default,
      home: home.default,
      procedures: procedures.default,
      blog: blog.default,
      contact: contact.default,
      about: about.default,
      faq: faq.default,
    },
  };
});
