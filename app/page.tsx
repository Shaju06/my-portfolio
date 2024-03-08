import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Components/Hero"), {
  loading: () => <p>Loading</p>,
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
    </main>
  );
}
