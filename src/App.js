import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <h2>Il mio soggiorno a Bali</h2>

      <ImageComponent
        src="https://a.cdn-hotels.com/gdcs/production128/d1581/5051d8fd-8069-4c18-b58a-b12af862bcbc.jpg?impolicy=fcrop&w=800&h=533&q=medium"
        alt="Bali image"
        className="image"
      />

      <ButtonComponent text="Scopri di più!" />
    </div>
  );
}

export default App;
