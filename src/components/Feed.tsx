import { useGlobalContext } from '../context';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  const { searchTerm, activeCategory } = useGlobalContext();

  return (
    <main className="app-main">
      <h1 className="main-heading">
        {!searchTerm || activeCategory === 'Home' ? 'New' : searchTerm}{' '}
        <span>videos</span>
      </h1>
      <Sidebar />
      <Videos />
    </main>
  );
};

export default Feed;
