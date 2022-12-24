import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export const getSlugs = async (): Promise<string[]> => {
  const response = await axios.get(
    `${process.env.ROOSONGO_SERVER_API_HOST}/api/properties-all`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_WEB_APP_KEY}`,
      },
    }
  );
  return response.data;
}

const getPropertySlugs = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await getSlugs()
    res.status(200).json({ results });
  } catch (error) {
    console.log(JSON.stringify({ error }, null, 2));
    res.status(401).json({ results: [] });
  }
};

export default getPropertySlugs;
