import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './contact.scss';
import classNames from 'classnames/bind';
import {
    faFacebookSquare,
    faInstagramSquare,
    faPinterestSquare,
    faTwitterSquare,
    faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import ContactGmail from '../Section/ContactGmail';
import Footer from '~/layouts/componentsHeader/footer';
import InstargramSix from '../Section/InstargramSix';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contacts ')}>
            <section className="checkout container mx-auto flex justify-between items-center py-16">
                <h1 className="my-10 pb-3">Checkout</h1>
                <div className={cx('contact-rouse flex no-underline list-none')}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <p>/</p>
                    <li>
                        <a href="/">Pages</a>
                    </li>
                    <p>/</p>
                    <span>Checkout</span>
                </div>
            </section>
            <section className={cx('checkout container mx-auto contacts-tow flex')}>
                <div className={cx('left-contact')}>
                    <h2>CONTACT INFORMATION</h2>
                    <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
                    <div>
                        <div className={cx('contact-head')}>
                            <h5>HEAD OFFICE</h5>
                            <p>730 Glenstone Ave 65802, Springfield, US</p>
                            <div className={cx('contact-phone')}>
                                <a href="/">+123 987 321</a>
                                <a href="/">+123 987 321</a>
                            </div>
                            <a href="/">kaira@templatesjungle.com</a>
                        </div>
                        <div className={cx('contact-head')}>
                            <h5>HEAD OFFICE</h5>
                            <p>730 Glenstone Ave 65802, Springfield, US</p>
                            <div className={cx('contact-phone')}>
                                <a href="/">+123 987 321</a>
                                <a href="/">+123 987 321</a>
                            </div>
                            <a href="/">kaira@templatesjungle.com</a>
                        </div>
                        <div>
                            <h5>SOCIAL INFO</h5>
                            <ul className={cx('font_icon')}>
                                <li>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faYoutubeSquare} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faPinterestSquare} />
                                    </a>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('right-contact')}>
                    <h2>GOT ANY QUESTIONS?</h2>
                    <p>Use the form below to get in touch with us.</p>
                    <form action="">
                        <div className={cx('form-input col-lg-12 flex mb3')}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Write Your Name Here"
                                className={cx('form-control ps-3 mr-8')}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Write Your Email Here"
                                className={cx('form-control ps-3 ')}
                            />
                        </div>
                        <div className={cx('form-input')}>
                            <input type="text" name="text" placeholder="Phone Number" className={cx('form-control')} />
                        </div>
                        <div className={cx('form-input col-lg-12 flex mb3')}>
                            <input
                                type="text"
                                name="Subject"
                                placeholder="Write Your Subject Here"
                                className={cx('form-control')}
                            />
                        </div>
                        <div className={cx('form-input')}>
                            <textarea
                                name=""
                                id=""
                                placeholder="Write Your Message Here"
                                rows="8"
                                className={cx('form-control ps-3')}
                            ></textarea>
                        </div>
                        <div className="d-gird">
                            <button className={cx('btn-submit')}>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className={cx('checkout container mx-auto contacts-tow')}>
                <div className="row flex  ">
                    <div className="col md-4  w-4/12">
                        <div className={cx('content-box')}>
                            <h5>USA</h5>
                            <p>730 Glenstone Ave 65802, Springfield, US</p>
                            <div>
                                <li>
                                    <a href="/">+123 987 321</a>
                                    <a href="/"> +123 123 654</a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href="/">kaira@templatesjungle.com</a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4  w-4/12">
                        <div className={cx('content-box')}>
                            <h5>FRANCE</h5>
                            <p>13 Rue Montmartre 75001, Paris, France</p>
                            <div>
                                <li>
                                    <a href="/">+123 987 321</a>
                                    <a href="/"> +123 123 654</a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href="/">kaira@templatesjungle.com</a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4 w-4/12">
                        <div className={cx('content-box')}>
                            <h5>OFFICE</h5>
                            <p>18 Chapel Brow PR25 3NE, Leyland, UK</p>
                            <div>
                                <li>
                                    <a href="/">+123 987 321</a>
                                    <a href="/"> +123 123 654</a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href="/">kaira@templatesjungle.com</a>
                                </li>
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

export default Contact;
