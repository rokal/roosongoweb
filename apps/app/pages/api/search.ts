import type { NextApiRequest, NextApiResponse } from "next";
const algoliasearch = require("algoliasearch/lite");
import { SearchParams } from "../../types/search";

const getAlgoliaClient = () => {
  const client = algoliasearch(
    process.env.ALGOLIA_APP_KEY,
    process.env.ALGOLIA_APP_SECRET
  );
  const algoliaPropertiesIndex = client.initIndex("properties");
  return algoliaPropertiesIndex;
};

const algoliaClient = getAlgoliaClient();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const params: SearchParams = req.body;
};
