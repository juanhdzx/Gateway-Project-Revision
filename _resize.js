var cssFile = document.createElement('activities.css');
    cssLink1.rel = 'stylesheet';
    cssLink1.href = "activities.css";  // or path for file {themes('/styles/mobile.css')}
    document.head.appendChild(cssFile); // append css to head element

const sharp = require('sharp')

const resizeImage = () => {
  const resize = sharp('https://www.recablog.com/wp-content/uploads/2020/03/0_D6ywM9AkjrhO9i8W.jpg')
  .resize(350, 260)
  .toFile(__dirname + '/users/juanhdz/GatewayProject')

  console.log(resize)
}

resizeImage()