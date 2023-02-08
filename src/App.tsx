import {
  ClickedChannel,
  Feed,
  ClickedSingleVideo,
  SharedLayout,
  Error,
} from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity, cacheTime: Infinity },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Feed />} />
            <Route path="/video/:videoId" element={<ClickedSingleVideo />} />
            <Route path="/channel/:chanelId" element={<ClickedChannel />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
