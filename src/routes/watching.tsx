import { createFileRoute } from "@tanstack/react-router";

import { anime, anilistProfile } from "@/data/shelf";
import { buildMeta, site } from "@/data/site";
import { linkProps } from "@/lib/links";
import { PageContainer } from "@/components/PageContainer";
import { Reveal } from "@/components/Reveal";
import { ShelfRow } from "@/components/ShelfRow";

const description = "Anime Premnath is watching, has finished, and plans to start next.";

export const Route = createFileRoute("/watching")({
  component: WatchingPage,
  head: () =>
    buildMeta({
      title: `Watching — ${site.name}`,
      description,
      path: "/watching",
    }),
});

function WatchingPage() {
  return (
    <PageContainer>
      <h1 className="animate-rise font-display text-3xl font-semibold tracking-tight text-foreground">
        Watching
      </h1>
      <p className="animate-rise rise-delay-1 mt-2 text-sm text-muted-foreground">
        Anime shelf — currently watching, finished and planning. Full list on{" "}
        <a
          href={anilistProfile}
          {...linkProps(anilistProfile)}
          className="text-foreground underline underline-offset-4 hover:opacity-70"
        >
          AniList
        </a>
        .
      </p>

      <div className="mt-8 divide-y divide-border border-y border-border">
        {anime.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 60}>
            <ShelfRow entry={entry} />
          </Reveal>
        ))}
      </div>
    </PageContainer>
  );
}
