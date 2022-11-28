import { Route, Routes as PrimitiveRoutes } from 'react-router-dom';
import { Layout } from './components/Layout';

import { PrivateRoute } from './components/PrivateRoute';

import { Consultations } from './pages/Consultations';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Notes } from './pages/Notes';
import { NotFound } from './pages/NotFound';
import { Overview } from './pages/Overview';
import { Patients } from './pages/Patients';
import { Surgeries } from './pages/Surgeries';

export function Routes() {
  return (
    <PrimitiveRoutes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />

      <Route path='/dashboard' element={
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      }>
        <Route path='' element={<Overview />} />
        <Route path='patients' element={<Patients />} />
        <Route path='consultations' element={<Consultations />} />
        <Route path='surgeries' element={<Surgeries />} />
        <Route path='notes' element={<Notes />} />
      </Route>


      <Route path='*' element={<NotFound />} />
    </PrimitiveRoutes>

  );
}

