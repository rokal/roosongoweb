export const SearchTitle = ({ title }: { title: string }) => {
  return (
    <h1
      title={title}
      className="text-lg font-extrabold tracking-tight text-gray-700 truncate"
    >
      {title}
    </h1>
  );
};
