
import { generateMetadata } from "@/lib/farcaster-embed";
import { title, description } from "@/lib/metadata";
export { generateMetadata };
import NicknameGenerator from "@/components/nickname-generator";

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <NicknameGenerator />
    </main>
  );
}
