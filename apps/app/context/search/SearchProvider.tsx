import React, { createContext, ReactNode } from "react";
import { SearchResponse } from "types/searchResponse";

interface SearchContextValue {
  result?: SearchResponse;
}

interface SearchProviderProps {
  result?: SearchResponse;
  children?: ReactNode;
}
export const SearchContext = createContext<SearchContextValue>({});

export const SearchContextProvider = ({
  result,
  children,
}: SearchProviderProps) => {
  return (
    <SearchContext.Provider value={{ result }}>
      {children}
    </SearchContext.Provider>
  );
};
