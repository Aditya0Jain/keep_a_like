import Home from "./components/home";
import DataProvider from "./context/Dataprovider";
function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
