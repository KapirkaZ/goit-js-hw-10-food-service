import './styles.css';
import menuTemplate from './templates/template.hbs';
import './changeTheme.js';
import './styles.css';

let menu = document.querySelector('.js-menu');

function buildMenu(array) {
  const markup = array.map(post => menuTemplate(post)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuElement);
