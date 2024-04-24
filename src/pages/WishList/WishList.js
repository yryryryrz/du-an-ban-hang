import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './WishList.scss';
import classNames from 'classnames/bind';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ContactGmail from '../Section/ContactGmail';
import InstargramSix from '../Section/InstargramSix';
import Footer from '~/layouts/componentsHeader/footer';
const cx = classNames.bind(styles);

function WishList() {
    return (
        <div className={cx('Wish-list')}>
            <div className="bg-neutral-200">
                <section className={cx('wish-List_section container mx-auto')}>
                    <div className={cx('wish-route flex justify-center no-underline list-none')}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <p>/</p>
                        <span> Wishlist</span>
                    </div>
                </section>
            </div>
            <section className={cx('cart-product container mx-auto')}>
                <div className={cx('flex justify-between')}>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>UNIT PRICE</th>
                                <th>STOCK STATUS</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex">
                                        <img
                                            src="https://demo.templatesjungle.com/kaira/images/wishlist-item1.jpg"
                                            alt=""
                                        />
                                        <h3>
                                            <span>HANDMADE CROP SWEATER</span>
                                        </h3>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>$54.99</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>In Stock</span>
                                    </div>
                                </td>
                                <td>
                                    <button>ADD TO CART</button>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

export default WishList;
