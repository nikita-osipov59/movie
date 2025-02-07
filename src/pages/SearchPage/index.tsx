import { BorderPanel, List } from "@/components/ui";

import { useGetQueryMovieBySearch } from "@/hooks";

export const SearchPage = () => {
  const { data, isLoading, isError } = useGetQueryMovieBySearch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
