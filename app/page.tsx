import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <p>Hellow</p>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
