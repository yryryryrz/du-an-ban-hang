import classNames from 'classnames/bind';
import styles from './shop.scss';
import ProductList from '../Section/ProductList';
import ContactGmail from '../Section/ContactGmail';
import Footer from '~/layouts/componentsHeader/footer';
import InstargramSix from '../Section/InstargramSix';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <div className={cx('shop')}>
            <div className={cx('border-bt')}>
                <section className="container mx-auto">
                    <div className={cx('header-h1')}>
                        <h1>SHOP SIX COLUMN</h1>
                        <div className={cx('header-right')}>
                            <nav className="container mx-auto">
                                <a href="/">Home</a>
                                <span>/</span>
                                <a href="/Page">Page</a>
                                <span>/</span>
                                <span>Shop</span>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
            <section className="container mx-auto">
                <div className="body-padding">
                    <div className={cx('showing-left')}>
                        <div>
                            <span>Showing 12 of 55 results</span>
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="Default Sorting">Default Sorting</option>
                                <option value="Size">Size</option>
                                <option value="Price">Price</option>
                            </select>
                        </div>
                    </div>
                    <div className=" ">
                        <ProductList />
                        <div>
                            <div className={cx('pagination')}>
                                <ul>
                                    <li className={cx('pagination-one')}>
                                        <a href="/">1</a>
                                    </li>
                                    <li>
                                        <a href="/">2</a>
                                    </li>
                                    <li>
                                        <a href="/">3</a>
                                    </li>
                                    <li>
                                        <a href="/">4</a>
                                    </li>
                                    <li>
                                        <a href="/">5</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ContactGmail />
            </section>
            <section className="container mx-auto">
                <InstargramSix />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}
export default Shop;
