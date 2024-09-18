import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

<Routes>
  <Route path="/" element={ <Home /> } />
</Routes>
    </div>
  );
}

export default App;
