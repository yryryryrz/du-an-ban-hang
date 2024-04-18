import config from '~/config';

import Home from '~/pages/Home/HomePage';
import Shop from '~/pages/Shop/Shop';
import Blog from '~/pages/Blog/Blog';
import WishList from '~/pages/WishList/WishList';
import Contact from '~/pages/Contact/contact';

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.wishlist, component: WishList },
    { path: config.routes.contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
