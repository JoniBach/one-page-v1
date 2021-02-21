import MainPage from "./pages/MainPage";
import "./App.css";
import { styles } from "./components/styles";

function App() {
  return (
    // <body style={styles.body}>
      <div style={styles.grid.container}>
        <div style={styles.grid.header}>
          <MainPage />
        </div>
      </div>
    // </body>
  );
}

export default App;
