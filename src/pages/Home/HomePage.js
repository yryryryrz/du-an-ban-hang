import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import ProductHome from '../Section/ProductHome';
import Footer from '~/layouts/componentsHeader/footer';
import ContactGmail from '../Section/ContactGmail/ContactGmail';
import CustomArrows from '../Section/CustomArrows';
const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('list-click bg-slate-50')}>
            <div className="container mx-auto ">
                <div className={cx('header-move-down')}>
                    <div className={cx('header-title')}>
                        <h1 className={cx('header-h1')}>New Collections</h1>
                        <div className={cx('header-span-text')}>
                            <span className={cx('header-text')}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum
                                consequuntur, adipisci repellat! Eveniet commodi voluptatem voluptate, eum minima, in
                                suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!
                            </span>
                        </div>
                    </div>
                    <div>
                        <section className="w-full">
                            <CustomArrows />
                        </section>
                    </div>
                </div>
            </div>
            <section className="container mx-auto flex justify-between py-20">
                <div className="text-center px-8 py-12">
                    <div>
                        <FontAwesomeIcon className="h-10 w-10" icon={faAddressBook} />
                    </div>
                    <h4 className="text-5xl my-6">Book An Appointment</h4>
                    <p className="text-3xl mb-6">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                </div>
                <div className="text-center px-8 py-12">
                    <div>
                        <FontAwesomeIcon className="h-10 w-10" icon={faAddressBook} />
                    </div>
                    <h4 className="text-5xl my-6">Book An Appointment</h4>
                    <p className="text-3xl mb-6">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                </div>
                <div className="text-center px-8 py-12">
                    <div>
                        <FontAwesomeIcon className="h-10 w-10" icon={faAddressBook} />
                    </div>
                    <h4 className="text-5xl my-6">Book An Appointment</h4>
                    <p className="text-3xl mb-6">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                </div>
                <div className="text-center px-8 py-12">
                    <div>
                        <FontAwesomeIcon className="h-10 w-10" icon={faAddressBook} />
                    </div>
                    <h4 className="text-5xl my-6">Book An Appointment</h4>
                    <p className="text-3xl mb-6">At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                </div>
            </section>
            <section className="container mx-auto ">
                <div className="w-full h-auto row col  flex justify-between">
                    <div className={cx('fixed-img')}>
                        <img
                            className={cx('img_shop')}
                            src="https://demo.templatesjungle.com/kaira/images/cat-item1.jpg"
                            alt=""
                        />
                        <div className="py-4 ">
                            <a className={cx('name-product')} href="/">
                                SHOP FOR MEN
                            </a>
                        </div>
                    </div>
                    <div className={cx('fixed-img')}>
                        <img
                            className={cx('img_shop')}
                            src="https://demo.templatesjungle.com/kaira/images/cat-item2.jpg"
                            alt=""
                        />
                        <div className="py-4 ">
                            <a className={cx('name-product')} href="/">
                                SHOP FOR MEN
                            </a>
                        </div>
                    </div>
                    <div className={cx('fixed-img')}>
                        <img
                            className={cx('img_shop')}
                            src="https://demo.templatesjungle.com/kaira/images/cat-item3.jpg"
                            alt=""
                        />
                        <div className="py-4 ">
                            <a className={cx('name-product')} href="/">
                                SHOP FOR MEN
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div>
                    <div className={cx('product-new_arrivals')}>
                        <h4 className={cx('new_h4')}>OUR NEW ARRIVALS</h4>
                        <a href="/" className={cx('new_a')}>
                            VIEW ALL PRODUCTS
                        </a>
                    </div>
                    <ProductHome />
                </div>
            </section>
            <section className="bg-slate-100 py-16 py3">
                <div className=" container mx-auto row flex px-5">
                    <div className="w-1/2">
                        <img
                            className={cx('blog-left_img')}
                            src="https://demo.templatesjungle.com/kaira/images/single-image-2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="bg-white w-1/2 flex items-center">
                        <div className={cx('blog-right')}>
                            <h3>CLASSIC WINTER COLLECTION</h3>
                            <p>
                                Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla
                                a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus
                                sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis
                                donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus
                                ac faucibus sit faucibus sit libero.
                            </p>
                            <button>
                                <a href="/">SHOP COLLECTION</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div>
                    <div className={cx('product-new_arrivals')}>
                        <h4 className={cx('new_h4')}>BEST SELLING ITEMS</h4>
                        <a href="/" className={cx('new_a')}>
                            VIEW ALL PRODUCTS
                        </a>
                    </div>
                    <ProductHome />
                </div>
            </section>
            <section className="bg-slate-100 py-16">
                <div className={cx('compliment')}>
                    <h3>WE LOVE GOOD COMPLIMENT</h3>
                    <div className={cx('compliment-p')}>
                        <p>“More than expected crazy soft, flexible and best fitted white simple denim shirt.”</p>
                        <div>CASUAL WAY</div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div>
                    <div className={cx('product-new_arrivals')}>
                        <h4 className={cx('new_h4')}>YOU MAY ALSO LIKE</h4>
                        <a href="/" className={cx('new_a')}>
                            VIEW ALL PRODUCTS
                        </a>
                    </div>
                    <ProductHome />
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div>
                    <div className={cx('product-new_arrivals')}>
                        <h4 className={cx('new_h4')}>READ BLOG POSTS</h4>
                        <a href="/" className={cx('new_a')}>
                            VIEW ALL
                        </a>
                    </div>
                    <div className="flex justify-between">
                        <div className={cx('therr-fashion')}>
                            <img src="https://demo.templatesjungle.com/kaira/images/post-image1.jpg" alt="" />
                            <div className="my-6">
                                <div className={cx('name-fashion')}>
                                    <span>FASHION</span>
                                    <span className="px-3">/</span>
                                    <span>JUL 11, 2022</span>
                                </div>
                                <h5 className="text-5xl mb-3">
                                    <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                </h5>
                                <p className="text-3xl mb-3 whitespace-normal">
                                    Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                    orci,fringilla...
                                </p>
                            </div>
                        </div>
                        <div className={cx('therr-fashion')}>
                            <img src="https://demo.templatesjungle.com/kaira/images/post-image2.jpg" alt="" />
                            <div className="my-6">
                                <div className={cx('name-fashion')}>
                                    <span>FASHION</span>
                                    <span className="px-3">/</span>
                                    <span>JUL 11, 2022</span>
                                </div>
                                <h5 className="text-5xl mb-3">
                                    <a href="/">TOP 10 FASHION TREND FOR SUMMER</a>
                                </h5>
                                <p className="text-3xl mb-3 whitespace-normal">
                                    Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel
                                    tellus...
                                </p>
                            </div>
                        </div>
                        <div className={cx('therr-fashion')}>
                            <img src="https://demo.templatesjungle.com/kaira/images/post-image3.jpg" alt="" />
                            <div className="my-6">
                                <div className={cx('name-fashion')}>
                                    <span>FASHION</span>
                                    <span className="px-3">/</span>
                                    <span>JUL 11, 2022</span>
                                </div>
                                <h5 className="text-5xl mb-3">
                                    <a href="/">CRAZY FASHION WITH UNIQUE MOMENT</a>
                                </h5>
                                <p className="text-3xl mb-3 whitespace-normal">
                                    Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel
                                    tellus...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactGmail />

            <section className={cx('templates')}>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="flex flex-wrap justify-between px-6">
                            <img src="	https://demo.templatesjungle.com/kaira/images/logo1.png" alt="" />
                            <img src="	https://demo.templatesjungle.com/kaira/images/logo2.png" alt="" />
                            <img src="	https://demo.templatesjungle.com/kaira/images/logo3.png" alt="" />
                            <img src="	https://demo.templatesjungle.com/kaira/images/logo4.png" alt="" />
                            <img src="	https://demo.templatesjungle.com/kaira/images/logo5.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={cx('templates-six')}>
                    <a href="/">
                        <img src="	https://demo.templatesjungle.com/kaira/images/insta-item1.jpg" alt="" />
                    </a>
                    <a href="/">
                        <img src="	https://demo.templatesjungle.com/kaira/images/insta-item2.jpg" alt="" />
                    </a>
                    <a href="/">
                        <img src="	https://demo.templatesjungle.com/kaira/images/insta-item3.jpg" alt="" />
                    </a>
                    <a href="/">
                        <img src="	https://demo.templatesjungle.com/kaira/images/insta-item4.jpg" alt="" />
                    </a>
                    <a href="/">
                        <img src="	https://demo.templatesjungle.com/kaira/images/insta-item5.jpg" alt="" />
                    </a>
                    <a href="/">
                        <img src="	https://demo.templatesjungle.com/kaira/images/insta-item6.jpg" alt="" />
                    </a>
                    <a className={cx('templates-follow')} href="https://www.instagram.com/wdwdwdwd.13">
                        Follow us on instagram
                    </a>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HomePage;
