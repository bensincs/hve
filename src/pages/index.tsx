import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): ReactNode {
  return (
    <Layout description="Run elite Hypervelocity Engineering crews that deliver production-ready solutions in days.">
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroBadge}>Hypervelocity Engineering</div>
          <h1 className={styles.heroTitle}>The HVE Runbook</h1>
          <p className={styles.heroSubtitle}>
            Blueprints, tools, and rituals for crews shipping production
            solutions at speed.
          </p>
          <div className={styles.heroMeta}>
            <span>🎯 Outcomes over output</span>
            <span>⚡ Days not weeks</span>
            <span>🤝 Humans + AI</span>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              What powers Hypervelocity Engineering
            </h2>
            <p className={styles.sectionLead}>
              Three focus areas keep elite crews shipping high-quality outcomes
              without slowing down.
            </p>
            <div className={styles.grid}>
              <article className={styles.card}>
                <div className={styles.cardAccent} aria-hidden="true" />
                <span className={styles.cardIcon} aria-hidden="true">
                  🤝
                </span>
                <h3>Tight multidisciplinary teams</h3>
                <p>
                  Align designers, developers, data scientists, and operators
                  around the same business outcome.
                </p>
              </article>
              <article className={styles.card}>
                <div className={styles.cardAccent} aria-hidden="true" />
                <span className={styles.cardIcon} aria-hidden="true">
                  🚀
                </span>
                <h3>Mission-critical starting points</h3>
                <p>
                  Reuse AI reference architectures, launch playbooks, and
                  governance patterns proven in production.
                </p>
              </article>
              <article className={styles.card}>
                <div className={styles.cardAccent} aria-hidden="true" />
                <span className={styles.cardIcon} aria-hidden="true">
                  🤖
                </span>
                <h3>AI agents across the lifecycle</h3>
                <p>
                  Pair human judgment with copilots from discovery to rollout so
                  every run learns faster.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className={styles.sectionAlt}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Put The HVE Runbook to work</h2>
            <p className={styles.sectionText}>
              Use the docs to spin up your next crew, then tap into field notes
              to see how other teams launch, learn, and iterate with hve.run.
            </p>
            <div className={styles.ctaGroup}>
              <Link
                className="button button--primary button--lg"
                to="/docs/basics/overview"
              >
                Get Started
              </Link>
              <Link className="button button--secondary button--lg" to="/blog">
                See latest stories
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
