// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
/*TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import Home from './views/Home';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Definir rutas en router.
const routes = {
  '/': Home,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */);
});

// Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
  onURLChange(/* location */);
});
