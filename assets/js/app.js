require('../css/app.scss');

const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesContext.keys().forEach(imagesContext);

var $ = require('jquery');
require('bootstrap-sass');

$('.carousel').carousel()