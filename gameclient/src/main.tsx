import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const params = new URLSearchParams(window.location.search);
const debug = params.get('debug');

if (debug === 'inputs') {
  // Mount the input test harness for debugging inputs
  import('./debug/InputTestHarness').then(({ default: InputTestHarness }) => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <InputTestHarness />
      </StrictMode>
    );
  }).catch((e) => {
    console.error('Failed to load InputTestHarness', e);
  });
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
