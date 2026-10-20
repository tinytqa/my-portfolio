import TabView from "@/components/layout/TabView";

// Every tab route renders the same TabView, which picks the section from the URL.
export default function Home() {
  return <TabView />;
}
