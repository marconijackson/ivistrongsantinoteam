import { getSponsors } from "@/lib/sponsors";
import SponsorGrid from "@/components/SponsorGrid";

export default async function Home() {
  const sponsors = await getSponsors();
  const activeSponsors = sponsors.filter((sponsor) => sponsor.active);

  return (
    <main className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12">
      <div className="flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold text-zinc-900">Parceiros</h1>
          <p className="text-zinc-600">Juntos somos mais fortes</p>
        </div>
        <SponsorGrid sponsors={activeSponsors} />
      </div>
    </main>
  );
}
