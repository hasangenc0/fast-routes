import {Router} from 'fast-routes';

const router = new Router('/');

router.add('home', 'homePage', () => {
  console.log('home route');
});

router.add('contact', 'contactPage', () => {
  console.log('contact route');
});

router.listen();
