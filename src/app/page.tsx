import AlbionCalc from "@/components/AlbionCalc";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center p-20">
      <h1 className="text-3xl font-semibold mb-10">Albion Calculator</h1>
      <AlbionCalc />
    </main>
  );
}
