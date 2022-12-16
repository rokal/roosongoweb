import { useSearchResults } from "context/search";

export const EmptyResults = () => {
  const { result } = useSearchResults();
  if (result?.hits && result?.hits?.length > 0) return null;
  return (
    <div className="flex items-center justify-center h-80">
      <div className="border-2 border-dashed p-14 md:p-24">
        <div className="text-2xl text-center">Aucun résultat trouvé</div>
        <div className="text-center">
          Veuillez reviser vos filtres et/ou la zone de recherche
        </div>
      </div>
    </div>
  );
};
