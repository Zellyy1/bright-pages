import { createFileRoute } from "@tanstack/react-router";

import { games, steamProfile } from "@/data/shelf";
import { buildMeta, site } from "@/data/site";
import { linkProps } from "@/lib/links";
import { PageContainer } from "@/components/PageContainer";
import { Reveal } from "@/components/Reveal";
import { ShelfRow } from "@/components/ShelfRow";

const description = "Games Premnath is playing and the ones worth finishing.";

export const Route = createFileRoute("/playing")({
  component: PlayingPage,
  head: () =>
    buildMeta({
      title: `Playing — ${site.name}`,
      description,
      path: "/playing",
    }),
});

function PlayingPage() {
  return (
    <PageContainer>
      <h1 className="animate-rise font-display text-3xl font-semibold tracking-tight text-foreground">
        Playing
      </h1>
      <p className="animate-rise rise-delay-1 mt-2 text-sm text-muted-foreground">
        Games shelf — what is installed and what stuck. Library on{" "}
        <a
          href={steamProfile}
          {...linkProps(steamProfile)}
          className="text-foreground underline underline-offset-4 hover:opacity-70"
        >
          Steam
        </a>
        .
      </p>

      <div className="mt-8 divide-y divide-border border-y border-border">
        {games.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 60}>
            <ShelfRow entry={entry} />
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
