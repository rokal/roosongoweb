import { GetServerSideProps, NextPage } from "next";
import { GeoProvider } from "@lib/context/geo";
import { Geo } from "@lib/types/geo";

import { getGeoFromAddress } from "@lib/service/places";
import { unslugifyDescription } from "@lib/utils/utils";
import { searchProperties } from "@lib/service/properties";
import { SearchResponse } from "@lib/types/searchResponse";
import { SearchContextProvider } from "@lib/context/search";
import { Header } from "@components/layout/Header";
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const address = unslugifyDescription(query.geoSlug as string);
  const geo = await getGeoFromAddress(address);
  if (!geo) {
    return {
      notFound: true,
    };
  } else {
    const searchResults = await searchProperties({ geo });
    return {
      props: {
        geo,
        searchResults: searchResults,
        address,
      },
    };
  }
};

export default SearchPage;
