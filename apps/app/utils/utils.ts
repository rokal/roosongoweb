export const slugifyGeoDescription = (txt: string) =>
  txt.split(", ").join("__");
export const unslugifyDescription = (txt: string) => txt.split("__").join(", ");

import { NextRouter } from "next/router";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const groupBy = function (arrayCollection: any[], key: string) {
  return arrayCollection.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const executeFetch = async (url: string) => {
  const resp = await fetch(url);
  return await resp.json();
};

export const isSearchPage = (pathname: string) =>
  pathname.indexOf("search") >= 0;
export const isPropertyDetailsPage = (pathname: string) =>
  pathname.indexOf("properties") >= 0;

/* export const buildBooleanOptions = (): SelectItem[] => {
  return [
    { value: "null", label: "Peu importe" },
    { value: "true", label: "Oui" },
    { value: "false", label: "Non" },
  ];
}; */
export const buildBooleanValue = (boolValue: string) => {
  const label =
    boolValue === "true"
      ? "Oui"
      : boolValue === "false"
      ? "Non"
      : "Peu importe";
  return {
    value: boolValue,
    label,
  };
};

export const formatPrice = (price: number) =>
  `${Intl.NumberFormat("fr-FR", { style: "currency", currency: "XOF" }).format(
    price
  )}`;

export const updateRouterQuery = (router: NextRouter, query: any) => {
  router.push(
    {
      pathname: router.pathname,
      query,
    },
    undefined,
    {
      shallow: false,
    }
  );
};
