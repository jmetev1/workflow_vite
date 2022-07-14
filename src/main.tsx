import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ErrorBoundary } from './ErrorBoundary';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import AddPatient from './routes/AddPatient';
import Diagnose from './routes/Diagnose';
import App from './App';
import Question from './routes/Question';
import Scofr from './routes/Scofr';
import { questionContent } from './questions';
import { Notes } from './Notes';
import { createRoot } from 'react-dom/client';
// const dev = process.env.NODE_ENV === 'development';
import { RecoilRoot } from 'recoil';
const { start, rsv, scofr, noflulike } = questionContent;

const root = createRoot(document.getElementById('root')!);

root.render(
  <ErrorBoundary>
    <StrictMode>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<App />} >
              <Route path="addpatient" element={<AddPatient />} />
              <Route path="home" element={<Home />} />
              <Route path='notes' element={<Notes />} />
              <Route path="diagnose" element={<Diagnose />} >
                <Route path="" element={<Question {...start} />} />
                <Route path="scofr" element={<Scofr />} />
                <Route path="rsv" element={<Question {...rsv} />} />
                <Route path='noflulike' element={<Question {...noflulike} />} />
                <Route path="*" element={<div>not found</div>} />
              </Route>
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </StrictMode>
  </ErrorBoundary >

);

// if (dev) {
//   const script = document.createElement('script');
//   script.src = 'reload/reload.js';
//   script.id = 'reload';
//   document.body.appendChild(script);
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
//     background-image: linear-gradient(to bottom, #0788DE, #116AB