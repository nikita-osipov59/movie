import { BorderPanel, List } from "@/components/ui";

import { getBySearchStore } from "@/store";

export const SearchPage = () => {
  const { data } = getBySearchStore();

  return (
    <section>
      <BorderPanel title="Query">
        <List data={data} />
      </BorderPanel>
    </section>
  );
};
