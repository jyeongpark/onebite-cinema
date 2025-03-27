import SearchableLayout from "@/component/searchable-layout";

export default function Home() {
  return <h1>ONEBITE CINEMA</h1>;
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
