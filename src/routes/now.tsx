import { createFileRoute } from "@tanstack/react-router";

import { now, nowUpdated } from "@/data/now";
import { buildMeta, site } from "@/data/site";
import { formatDate } from "@/lib/format";
import { PageContainer } from "@/components/PageContainer";
import { Reveal } from "@/components/Reveal";

const description =
  "What Premnath is building, learning, watching, playing and reading right now.";

export const Route = createFileRoute("/now")({
  component: NowPage,
  head: () =>
    buildMeta({
      title: `Now — ${site.name}`,
      description,
      path: "/now",
    }),
});

function NowPage() {
  return (
    <PageContainer>
      <h1 className="animate-rise font-display text-3xl font-semibold tracking-tight text-foreground">
        Now
      </h1>
      <p className="animate-rise rise-delay-1 mt-2 text-sm text-muted-foreground">
        A snapshot of what has my attention. Last updated {formatDate(nowUpdated)}.
      </p>

      <dl className="mt-8 divide-y divide-border border-y border-border">
        {now.map((item, index) => (
          <Reveal key={item.label} delay={index * 60}>
            <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
              <dt className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:w-28">
                {item.label}
              </dt>
              <dd className="min-w-0">
                <p className="text-[0.95rem] font-medium text-foreground">{item.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.detail}</p>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </PageContainer>
  );
}
