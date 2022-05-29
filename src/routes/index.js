//layout
import { HeaderOnly } from '~/components/Layouts';
//page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Uploads from '~/pages/Uploads';
import Search from '~/pages/Search';
//public route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Uploads, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
