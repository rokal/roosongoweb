const SearchRedirect = () => null;

SearchRedirect.getInitialProps = async ({ res }: any) => {
  res.writeHead(302, { Location: "/search/ouagadougou" });
  res.end();
};

export default SearchRedirect;
