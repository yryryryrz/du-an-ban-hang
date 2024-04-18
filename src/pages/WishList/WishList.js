import styles from './WishList.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function WishList() {
    return (
        <div className={cx('Wish-list')}>
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
    );
}

export default WishList;
