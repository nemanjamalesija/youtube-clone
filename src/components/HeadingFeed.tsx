import { useGlobalContext } from '../context';

const SearchStatusHeading = () => {
  const { searchTerm, activeCategory } = useGlobalContext();
  return (
    <h1 className="main-heading">
      {!searchTerm || activeCategory === 'Home' ? 'New' : searchTerm}{' '}
      <span>videos</span>
    </h1>
  );
};

export default SearchStatusHeading;
