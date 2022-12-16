import algoliasearch from "algoliasearch/lite";

export const getAlgoliaClient = () => {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_KEY || "",
    process.env.ALGOLIA_APP_SECRET || ""
  );
  const algoliaPropertiesIndex = client.initIndex("properties");
  return algoliaPropertiesIndex;
};
