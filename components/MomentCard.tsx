import type { Moment } from "@/content/moments";

type MomentCardProps = {
  moment: Moment;
  index: number;
};

export default function MomentCard({
  moment,
  index,
}: MomentCardProps) {
  return (
    <article className="grid gap-6 md:grid-cols-[100px_1fr]">
      {/* Year */}
      <div>
        <p className="text-sm font-medium text-neutral-400">
          {moment.year}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-2xl">
        <div className="aspect-[16/9] w-full overflow-hidden border border-neutral-200 bg-neutral-100">
          {moment.image ? (
            <img
              src={moment.image}
              alt={moment.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-neutral-400">
              Moment image
            </div>
          )}
        </div>

        <p className="mt-5 text-xs font-medium uppercase tracking-wider text-neutral-400">
          {moment.category}
        </p>

        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
          {moment.title}
        </h3>

        {moment.location && (
          <p className="mt-1 text-sm text-neutral-500">
            {moment.location}
          </p>
        )}

        <p className="mt-4 leading-7 text-neutral-600">
          {moment.description}
        </p>
      </div>
    </article>
  );
}