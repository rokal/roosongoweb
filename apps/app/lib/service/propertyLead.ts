import axios from "axios";

interface LeadParams {
  author: string;
  phoneNumber: string;
  email: string;
  message: string;
  propertyId: number;
  captcha: string;
}

export const submitLead = async (params: LeadParams) => {
  const res = await axios.post("/api/property-lead", params);
  const leadResults = res.data;
  return leadResults;
};
