import $ from 'jquery';

import './style.scss';

let count = 0;

setInterval(() => {
  count += 1;
  $('#main').html(`You've been on this page for ${count} seconds.`);
}, 1000);
