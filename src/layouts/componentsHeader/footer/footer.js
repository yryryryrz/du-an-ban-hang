import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div>
            <div className="container mx-auto row flex-wrap items-center mt-16 grid-col">
                <div className={cx('footer-top')}>
                    <div className={cx('footer-font')}>
                        <img src="https://demo.templatesjungle.com/kaira/images/main-logo.png" alt="" />
                        <p>
                            Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in.
                            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
                        </p>
                        <div>
                            <ul className={cx('footer-font_icon')}>
                                <li>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faPinterest} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('footer-Four')}>
                        <h5>QUICK LINKS</h5>
                        <ul>
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li>
                                <a href="/">ABOUT</a>
                            </li>
                            <li>
                                <a href="/">SERVICES</a>
                            </li>
                            <li>
                                <a href="/">SINGLE ITEM</a>
                            </li>
                            <li>
                                <a href="/">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer-Four')}>
                        <h5>HELP & INFO</h5>
                        <ul>
                            <li>
                                <a href="/">TRACK YOUR ORDER</a>
                            </li>
                            <li>
                                <a href="/">RETURNS + EXCHANGES</a>
                            </li>
                            <li>
                                <a href="/">SHIPPING + DELIVERY</a>
                            </li>
                            <li>
                                <a href="/">CONTACT US</a>
                            </li>
                            <li>
                                <a href="/">FIND US EASY</a>
                            </li>
                            <li>
                                <a href="/">FAQS</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer-Four')}>
                        <h5>CONTACT US</h5>
                        <p>
                            Do you have any questions or suggestions?
                            <span>
                                <a href="/">contact@yourcompany.com</a>
                            </span>
                        </p>
                        <p>
                            Do you need support? Give us a call.
                            <span>
                                <a href="/">+43 720 115 278 </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('border-mr')}>
                <div className="container mx-auto px-5">
                    <div className={cx('border-top')}>
                        <div className={cx('border-demo')}>
                            <span>
                                We ship with:
                                <img src="https://demo.templatesjungle.com/kaira/images/arct-icon.png" alt=""></img>
                                <img src="https://demo.templatesjungle.com/kaira/images/dhl-logo.png" alt=""></img>
                            </span>
                            <span>
                                Payment Option:
                                <img src="https://demo.templatesjungle.com/kaira/images/visa-card.png" alt=""></img>
                                <img src="https://demo.templatesjungle.com/kaira/images/paypal-card.png" alt=""></img>
                                <img src="https://demo.templatesjungle.com/kaira/images/master-card.png" alt=""></img>
                            </span>
                        </div>
                        <div className={cx('border-Copyright')}>
                            <p>© Copyright 2022 Kaira. All rights reserved. Design by</p>
                            <div>
                                <a href="/">TemplatesJungle</a>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
