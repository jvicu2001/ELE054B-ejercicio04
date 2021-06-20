import './App.scss';
import {Provider} from 'react-redux';
import { BaseRouter } from './routers/BaseRouter';
import { store } from './store/store';
//Esto es lo que hace react
//const div = document.createElement("div");
// div.classList.add("App")
// const h1 = document.createElement("h1")
// h1.innerText = "Hola Papus!";
// div.appendChild(h1);

function App() {
  return (
    <Provider store={store}>
      <BaseRouter></BaseRouter>
    </Provider>
    
  );
}

export default App;
