import type { JourneyItem } from "@/content/journey";

type JourneySectionProps = {
  items: JourneyItem[];
};

export default function JourneySection({
  items,
}: JourneySectionProps) {
  return (
    <div className="space-y-16">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="grid gap-6 md:grid-cols-[160px_1fr]"
        >
          <div>
            <p className="text-sm font-medium text-neutral-500">
              {item.period}
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              {item.type}
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              {item.organization}
            </p>

            <p className="mt-5 leading-7 text-neutral-600">
              {item.description}
            </p>

            {item.highlights && (
              <ul className="mt-5 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm text-neutral-600"
                  >
                    — {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}