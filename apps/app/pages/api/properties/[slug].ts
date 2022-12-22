import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const getPropertySlugs = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  try {
    const response = await axios.get(
      `${process.env.ROOSONGO_CLIENT_API_HOST}/api/property-details/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_WEB_APP_KEY}`,
        },
      }
    );
    const property = response.data;
    res.status(200).json({ property });
  } catch (error) {
    console.log("-------->", JSON.stringify({ error }, null, 2));
    res.status(401).json({ property: null });
  }
};

export default getPropertySlugs;
