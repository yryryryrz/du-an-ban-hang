import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('list-menu')}>
            <Menu>
                <MenuItem title="HOME" to={config.routes.home} />
                <MenuItem title="SHOP" to={config.routes.shop} />
                <MenuItem title="BLOG" to={config.routes.blog} />
                <MenuItem title="WISH LIST" to={config.routes.wishlist} />
                <MenuItem title="CONTACT" to={config.routes.contact} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
