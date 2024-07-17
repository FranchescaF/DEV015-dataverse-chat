//función
//encargada de generar el contenido de la vista.

/*export function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Welcome to the home page!';
  return viewEl;
}*/

export const Home = (props) => {
  const viewEl = document.createElement('div');
  viewEl.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
  console.log(props.id);
  return viewEl;
}
