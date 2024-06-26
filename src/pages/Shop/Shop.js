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
                                <a href="/wishlist">Wish list</a>
                                <span>/</span>
                                <span>Shop</span>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
            <section className="container mx-auto">
                <div className="body-padding">
                    <ProductList />
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
