
const services = [
  {
    number: "01",
    title: "Website Management",
    description:
      "Website maintenance, webpage customization, and content updates for business websites.",
    tags: ["Website Updates", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Search Engine Optimization",
    description:
      "On-page SEO, keyword research, meta title and description optimization, and Google Search Console monitoring.",
    tags: ["On-Page SEO", "Keyword Research", "Search Console"],
  },
  {
    number: "03",
    title: "Social Media Management",
    description:
      "Social media page management and promotional post design for Facebook and Instagram.",
    tags: ["Social Media", "Content Design", "Branding"],
  },
  {
    number: "04",
    title: "Digital Advertising",
    description:
      "Developing knowledge of Google Ads and Meta Ads, including campaign objectives, targeting, budgets, and performance metrics.",
    tags: ["Google Ads Learning", "Meta Ads Learning"],
  },
];

export const DigitalMarketingSection = () => {
  return (
    <section
      id="digital-marketing"
      className="px-5 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Additional Expertise
        </p>

        <h2 className="text-3xl font-bold md:text-5xl">
          Web Development{" "}
          <span className="text-primary">
            & Digital Marketing
          </span>
        </h2>

        <p className="mt-5 mx-auto max-w-2xl leading-7 text-muted-foreground">
          Alongside front-end development, I have practical
          experience in website management, on-page SEO, and
          social media content management. I am also developing
          my practical knowledge of paid advertising.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <span className="text-sm font-semibold text-primary">
                {service.number}
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
