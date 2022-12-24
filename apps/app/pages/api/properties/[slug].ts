import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const getPropertyDetails = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  try {
    const response = await axios.get(
      `${process.env.ROOSONGO_SERVER_API_HOST}/api/property-details/${slug}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_WEB_APP_KEY}`,
        },
      }
    );
    const property = response.data;
    res.status(200).json({ property });
  } catch (error) {
    console.log("--------> error : --+", JSON.stringify({ error }, null, 2));
    res.status(200).json({ property: null });
  }
};

export default getPropertyDetails;
