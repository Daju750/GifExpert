import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<App />);