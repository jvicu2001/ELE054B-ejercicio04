import './App.scss';
import { BaseRouter } from './routers/BaseRouter';
//Esto es lo que hace react
//const div = document.createElement("div");
// div.classList.add("App")
// const h1 = document.createElement("h1")
// h1.innerText = "Hola Papus!";
// div.appendChild(h1);

function App() {
  return (
    <>
      <BaseRouter></BaseRouter>
    </>
    
  );
}

export default App;
