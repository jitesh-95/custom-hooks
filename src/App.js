import "./App.css";
import Urldata from "./components/Urldata";
import useTimeout from "./hooks/useTimeout";

function App() {
  const { ready } = useTimeout(5000);

  return (
    <>
      <div style={{ textAlign: "center" }}>{ready ? "Ready" : "Not-Ready"}</div>
      <Urldata />
    </>
  );
}

export default App;
