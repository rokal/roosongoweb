import { NextPage } from "next";
import { GeoProvider } from "src/context/geo";
import { Geo } from "src/types/geo";

interface Props {
  geo: Geo;
}
const SearchPage: NextPage<Props> = ({ geo }: Props) => {
  const title = `Logements à louer `;

  return (
    <GeoProvider geo={geo}>
      <div>Welcome to the search page</div>
    </GeoProvider>
  );
};

SearchPage.getInitialProps = async ({ query, req, res }) => {
  const geo = {} as Geo;
  return { geo };
};

export default SearchPage;
