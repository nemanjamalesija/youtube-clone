import { useGlobalContext } from '../context';
import HeadingFeed from './HeadingFeed';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  return (
    <main className="app-main">
      <HeadingFeed />
      <Sidebar />
      <Videos />
    </main>
  );
};

export default Feed;
