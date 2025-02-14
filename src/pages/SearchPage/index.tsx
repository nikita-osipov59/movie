import { BorderPanel, List } from "@/components/ui";

import { useGetQueryMovieBySearch } from "@/hooks";

const SearchPage = () => {
  const { data, isError } = useGetQueryMovieBySearch();

  if (isError) {
    return <div>Увы, мы ничего не нашли, попробуйте изменить запрос.</div>;
  }

  return (
    <section>
      <BorderPanel title="Query">
        <List data={data!} />
      </BorderPanel>
    </section>
  );
};
export default SearchPage;
