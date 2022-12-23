import { useContext } from "react";
import { SearchContext } from "./SearchProvider";

export function useSearchResults() {
  const { result } = useContext(SearchContext);
  return { result };
}
