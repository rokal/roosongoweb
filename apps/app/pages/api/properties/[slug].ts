import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Property } from "@lib/types/property";

export const getProperty = async (slug: string): Promise<Property> => {
  const response = await axios.get(
    `${process.env.ROOSONGO_SERVER_API_HOST}/api/property-details/${slug}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_WEB_APP_KEY}`,
      },
    }
  );
  return response.data;
}

const getPropertyDetails = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  try {
    const property = await getProperty(slug as string)
    console.log(property)
    res.status(200).json({ property });
  } catch (error) {
    console.log("--------> ", JSON.stringify({ error }, null, 2));
    res.status(200).json({ property: null });
  }
};

export default getPropertyDetails;
