import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <h1 className="text-red-700 text-7xl flex justify-center items-center uppercase">hello
      </h1>
      <div className="p-6">
        <Button>Click me</Button>
      </div>
    </main>
  );
}
