import { Router } from './router.js';

const router = new Router();

router.add(404,'/pages/404.html','assets/mountains-universe-404.jpg')
router.add('/exploracao','/pages/exploracao.html', 'assets/mountains-universe-3.png')
router.add('/index.html','/pages/home.html', 'assets/mountains-universe-1.png')
router.add('/universo','/pages/universo.html', 'assets/mountains-universe-2.png')
router.add('/','/pages/home.html', 'assets/mountains-universe-1.png')

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();