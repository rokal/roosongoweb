import { NextPage } from "next";
import { GeoProvider } from "context/geo";
import { Geo } from "types/geo";

import { getGeoFromAddress } from "service/places";
import { unslugifyDescription } from "utils/utils";
import { searchProperties } from "service/properties";
import { SearchResponse } from "types/searchResponse";
import { SearchContextProvider } from "context/search";
import { Header } from "@components/Header";
import Footer from "@components/Footer";
import { SearchTitle } from "@components/SearchTitle";
import { EmptyResults } from "@components/EmptyResults";
import PropertyList from "@components/PropertyList";
import FilterHeader from "@components/FiltersHeader";

interface Props {
  geo: Geo;
  address: string;
  searchResults: SearchResponse;
}

const SearchPage: NextPage<Props> = ({
  geo,
  searchResults,
  address,
}: Props) => {
  const title = `Logements à louer - ${address}`;

  return (
    <GeoProvider geo={geo}>
      <SearchContextProvider result={searchResults}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="max-w-full px-4 mx-auto sm:px-6">
            <FilterHeader />
            <SearchTitle title={title} />
            <EmptyResults />
            <PropertyList />
          </div>
          <Footer />
        </div>
      </SearchContextProvider>
    </GeoProvider>
  );
};

SearchPage.getInitialProps = async ({ query }) => {
  const address = unslugifyDescription(query.geoSlug as string);
  const geo: Geo = await getGeoFromAddress(address);
  const searchResults = await searchProperties({ geo });
  return { geo, searchResults: searchResults, address };
};

export default SearchPage;
