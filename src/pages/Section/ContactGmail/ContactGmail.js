import classNames from 'classnames/bind';
import styles from './ContactGmail.scss';

const cx = classNames.bind(styles);

function ContactGmail() {
    return (
        <section className={cx('newsletter')}>
            <div className="container mx-auto">
                <div className={cx('newletter-center')}>
                    <div className={cx('newletter-big')}>
                        <div className="pb-8">
                            <div className="text-7xl my-16 text-center">SIGN UP FOR OUR NEWSLETTER</div>
                        </div>
                        <form>
                            <input type="text" name="gmail" placeholder="Your Email Address.."></input>
                            <div className={cx('newsletter-sign_up')}>
                                <button className={cx('newsletter-supmit')}>SIGN UP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactGmail;
