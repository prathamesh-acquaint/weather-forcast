import AppContext from "./context/AppContext";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <AppContext>
        <Layout />
      </AppContext>
    </>
  );
}

export default App;
