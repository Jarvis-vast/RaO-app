import { DestinationRecommender } from "@/components/itinerary/DestinationRecommender";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function DestinationsPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const mood = (searchParams?.mood as string) || "Adventure";

  return (
    <main className="flex-1 flex flex-col items-center pt-32 pb-24 px-6 min-h-screen bg-transparent">
      <DestinationRecommender userMood={mood} />
    </main>
  );
}
