import App from '../Root';

const ClearCache = () => import(/* webpackChunkName: "Mauth" */ '../pages/clearCache');
const Index = () => import(/* webpackChunkName: "home" */ '@/pages/home/index');
const Layout = () => import(/* webpackChunkName: "home" */ '@/pages/layout/index');
const AboutUs = () => import(/* webpackChunkName: "aboutUs" */ '@/pages/aboutUs');

// 404
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../components/ErrorPage/NotFound');

const routes = [{
    path: '/',
    redirect: '/marmot'
},
    {
        path: '/marmot',
        component: Layout,
        children: [
            {
                path: '',
                component: Index,
                name: 'MarmotIndex',
                meta: {
                    pageName: 'homeIndex'
                }
            },
            {
                path: '/marmot/aboutUs',
                component: AboutUs,
                name: 'AboutUs',
                meta: {
                    pageName: 'AboutUs'
                }
            },
            {
                path: '/marmot/clearCache',
                component: ClearCache,
                name: 'ClearCache'
            },
        ],
    }
];

routes.push({
    path: '/*',
    component: NotFound
});

export default routes;
