import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Loader from './layout/common/loaders';
import VideoRepetition from './pages/video-repetition/video-repetition';
const App = React.lazy(() => import('./layout/App'));
const Dashboard = React.lazy(() => import('./pages/dashboard/dashboard'));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.Fragment>
    <HashRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/dashboard1`} element={<Dashboard />} />
            <Route path={`${import.meta.env.BASE_URL}repetition/video`} element={<VideoRepetition title='Video repetition' />} />
            <Route path={`${import.meta.env.BASE_URL}repetition/audio`} element={<VideoRepetition title='Audio repetition' />} />
          </Route>
          <Route></Route>
        </Routes>
      </React.Suspense>
    </HashRouter>
  </React.Fragment>
);
