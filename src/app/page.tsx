import HeaderMainContent from "@/components/dashboard/headermaincontent";
import MiddleContentMainContent from "@/components/dashboard/MiddleContentMainContent";

export default function Home() {
  return (
    <main className="w-full h-auto  overflow-x-auto  flex-col ">
      <HeaderMainContent />
      <MiddleContentMainContent />
    </main>
  );
}
