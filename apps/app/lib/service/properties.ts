
import { SearchParams } from "@lib/types/search";
import { getQuery } from "@lib/algolia/queryBuilder/getQuery";
import { getAlgoliaClient } from "@lib/algolia/client";
import { Property } from "@lib/types/property";

const algoliaClient = getAlgoliaClient();

export const searchProperties = async (searchParams: SearchParams) => {
  const algoliaQuery = getQuery(searchParams);
  try {
    const results = await algoliaClient.search("", algoliaQuery);
    return results
  } catch (error) {
    console.log(JSON.stringify({ error }, null, 2));
    return []
  }
};

export const getProperty = async (slug: string): Promise<Property> => {
  const response = await fetch(
    `${process.env.ROOSONGO_SERVER_API_HOST}/api/property-details/${slug}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_WEB_APP_KEY}`,
      },
    }
  );
  const property = await response.json();
  return property
}

export const getSlugs = async (): Promise<string[]> => {
  const response = await fetch(
    `${process.env.ROOSONGO_SERVER_API_HOST}/api/properties-all`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_WEB_APP_KEY}`,
      },
    }
  );
  const slugs: string[] = await response.json();
  return slugs
}
