import React from 'react';
import classNames from 'classnames/bind';
import styles from './Blog.scss';
import ContactGmail from '../Section/ContactGmail';
import Footer from '~/layouts/componentsHeader/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InstargramSix from '../Section/InstargramSix';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('blog')}>
            <section>
                <div className={cx('blog-img-top')}>
                    <div className={cx('blog-heder_img')}>
                        <img src="	https://demo.templatesjungle.com/kaira/images/hero-image3.jpg" alt="blog" />
                    </div>
                    <div className={cx('blog-sibar')}>
                        <h1>BLOG GRID WITH SIDEBAR</h1>
                        <div className={cx('blog-next_page')}>
                            <a href="/">Home</a>
                            <p>/</p>
                            <a href="/page">Pages</a>
                            <p>/</p>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('product-pxpy')}>
                <div className="container mx-auto flex">
                    <div className={cx('left row-span-2  ')}>
                        <div className="row grid grid-cols-3 gap-3">
                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image1.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image2.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image3.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image4.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image5.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>

                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image6.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>

                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image7.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image8.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>
                            <div className={cx('therr-fashion')}>
                                <img src="https://demo.templatesjungle.com/kaira/images/post-image9.jpg" alt="" />
                                <div className="my-6 flex flex-wrap gap-2">
                                    <div className={cx('name-fashion')}>
                                        <span>FASHION</span>
                                        <span className="px-3">/</span>
                                        <span>JUL 11, 2022</span>
                                    </div>
                                    <h5 className="text-5xl mb-3">
                                        <a href="/">HOW TO LOOK OUTSTANDING IN PASTEL</a>
                                    </h5>
                                    <p className="text-3xl whitespace-normal">
                                        Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida
                                        orci,fringilla...
                                    </p>
                                </div>
                            </div>
                        </div>
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
                    <div className={cx('right row-span-3')}>
                        <div className={cx('input-search')}>
                            <input type="text" placeholder="Search..." />
                            <button type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <h5>CATEGORIES</h5>
                        <div>
                            <ul>
                                <li>
                                    <a href="/">All</a>
                                </li>
                                <li>
                                    <a href="/">Women</a>
                                </li>

                                <li>
                                    <a href="/">Accessories</a>
                                </li>

                                <li>
                                    <a href="/">Fashion</a>
                                </li>

                                <li>
                                    <a href="/">Dressup</a>
                                </li>

                                <li>
                                    <a href="/">Makeup</a>
                                </li>
                                <li>
                                    <a href="/">Photography</a>
                                </li>
                            </ul>
                        </div>
                        <h5>TAGS</h5>
                        <ul className={cx('button-tags flex flex-wrap gap-x-2 gap-y-6')}>
                            <li>
                                <a href="/"> Beauty</a>
                            </li>
                            <li>
                                <a href="/"> Fashion</a>
                            </li>

                            <li>
                                <a href="/"> Travel</a>
                            </li>

                            <li>
                                <a href="/"> Denim</a>
                            </li>

                            <li>
                                <a href="/"> Trending</a>
                            </li>

                            <li>
                                <a href="/"> Clothing</a>
                            </li>
                            <li>
                                <a href="/"> Photography</a>
                            </li>
                            <li>
                                <a href="/"> Jackets</a>
                            </li>
                        </ul>
                        <h5>RECENT POSTS</h5>
                        <div>
                            <div className={cx('recent ')}>
                                <div className={cx('recent-img')}>
                                    <img
                                        src="https://demo.templatesjungle.com/kaira/images/post-small-image1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="recent-span">
                                    <span>JUL 11, 2022</span>
                                    <a href="/">
                                        <h6>HOW TO LOOK OUTSTANDING IN PASTEL</h6>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('recent ')}>
                                <div className={cx('recent-img')}>
                                    <img
                                        src="https://demo.templatesjungle.com/kaira/images/post-small-image2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="recent-span">
                                    <span>JUL 11, 2022</span>
                                    <a href="/">
                                        <h6>HOW TO LOOK OUTSTANDING IN PASTEL</h6>
                                    </a>
                                </div>
                            </div>
                            <div className={cx('recent ')}>
                                <div className={cx('recent-img')}>
                                    <img
                                        src="https://demo.templatesjungle.com/kaira/images/post-small-image3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="recent-span">
                                    <span>JUL 11, 2022</span>
                                    <a href="/">
                                        <h6>HOW TO LOOK OUTSTANDING IN PASTEL</h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h5>FOLLOW US:</h5>
                        <div>
                            <ul>
                                <li>
                                    <a href="/">Facebook</a>
                                </li>
                                <li>
                                    <a href="/">Twitter</a>
                                </li>
                                <li>
                                    <a href="/">Pinterest</a>
                                </li>
                                <li>
                                    <a href="/">Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <ContactGmail />
            <section className="container mx-auto">
                <InstargramSix />
            </section>
            <Footer />
        </div>
    );
}
export default Blog;
