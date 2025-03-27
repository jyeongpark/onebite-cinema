import SearchableLayout from "@/component/searchable-layout";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();

  const { q } = router.query;

  return <h1>검색 결과 : {q}</h1>;
}

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
