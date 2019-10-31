import Banner from './components/Banner';
import FAQ from './components/FrequentlyAskedQuestions';

const routes = [
    { path: '/', component: Banner },
    { path: '/home', component: Banner },
    { path: '/faq', component: FAQ },
];

export default routes;