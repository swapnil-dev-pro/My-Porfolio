import { useEffect, useState } from "react";
import { GitFork, Star, Users, GitCommitHorizontal } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const GITHUB_USERNAME = profile.socials.github.split("/").filter(Boolean).pop();

const StatCard = (props) => {
  const { icon: Icon, label, value, loading } = props;
  return (
    <div className="glass-card p-5 rounded-lg text-center card-hover">
      <Icon className="mx-auto mb-2 text-primary" size={22} />
      <p className="text-2xl font-bold">
        {loading ? (
          <span className="inline-block w-8 h-6 bg-primary/20 rounded animate-pulse" />
        ) : (
          value
        )}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

export const GithubStatsSection = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const user = await userRes.json();
        const repos = await reposRes.json();

        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
          : 0;

        setStats({
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          stars: totalStars,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (error) return null;

  return (
    <section id="github" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t("github.heading")} <span className="text-gradient">{t("github.headingHighlight")}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-xl font-normal">
            {t("github.subheading")}
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            <StatCard
              icon={GitFork}
              label={t("github.repos")}
              value={stats?.repos}
              loading={loading}
            />
            <StatCard
              icon={Users}
              label={t("github.followers")}
              value={stats?.followers}
              loading={loading}
            />
            <StatCard
              icon={Star}
              label={t("github.stars")}
              value={stats?.stars}
              loading={loading}
              className="col-span-2 md:col-span-1"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-card p-4 md:p-6 rounded-lg overflow-x-auto">
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
              <GitCommitHorizontal size={16} className="text-primary" />
              {t("github.contribution")}
            </div>
            <img
              src={`https://ghchart.rshah.org/8b5cf6/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
              className="w-full min-w-[600px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
