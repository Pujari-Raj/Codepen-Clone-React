import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Home />    {/* children (DataProvider is parent and home is child component) */}
      </DataProvider>
    </div>
  );
}

export default App;
