import { BorderPanel } from "@/components/ui";
import { MovieRandom } from "@/components";

export const HomePage = () => {
  return (
    <>
      <section>
        <BorderPanel title="Random query">
          <MovieRandom />
        </BorderPanel>
      </section>
    </>
  );
};
