
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App bg-light" >
        <RouterProvider router={routes} />
        <Toaster></Toaster>
    </div>
  );
}

export default App;
