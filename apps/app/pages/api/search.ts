import type { NextApiRequest, NextApiResponse } from "next";
import { getAlgoliaClient } from "../../lib/algolia/client";
import { getQuery } from "../../lib/algolia/queryBuilder/getQuery";
import { SearchParams } from "../../lib/types/search";

const algoliaClient = getAlgoliaClient();

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const params: SearchParams = req.body;
  const algoliaQuery = getQuery(params);
  try {
    const results = await algoliaClient.search("", algoliaQuery);
    res.status(200).json({ results });
  } catch (error) {
    console.log("-------->", JSON.stringify({ error }, null, 2));
    res.status(401).json({ results: [] });
  }
};

export default search;
