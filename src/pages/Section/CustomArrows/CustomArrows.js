import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '~/pages/Home/HomPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NextImg(params) {
    const { onClick } = params;

    return (
        <div className={cx('click-right')} onClick={onClick}>
            <button>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
}
function PrevImg(params) {
    const { onClick } = params;

    return (
        <div className={cx('click-left')} onClick={onClick}>
            <button>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

function SimpleSlider() {
    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextImg />,
        prevArrow: <PrevImg />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="">
            <Slider {...settings}>
                <div className="px-16">
                    <img src="https://demo.templatesjungle.com/kaira/images/banner-image-1.jpg" alt=""></img>
                    <div className="py-10 ">
                        <h5 className="mb-2 text-4xl text-slate-700 cursor-pointer ">SORT LEATHER JACKETS</h5>
                        <div className="mb-4 ">
                            <span className="text-3xl text-slate-500">
                                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.
                            </span>
                        </div>
                        <div className="text-3xl">
                            <button>
                                DISCOVER NOW
                                <div></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-16">
                    <img src="https://demo.templatesjungle.com/kaira/images/banner-image-2.jpg" alt=""></img>
                    <div className="py-10 ">
                        <h5 className="mb-2 text-4xl text-slate-700 cursor-pointer ">SORT LEATHER JACKETS</h5>
                        <div className="mb-4 ">
                            <span className="text-3xl text-slate-500">
                                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.
                            </span>
                        </div>
                        <div className="text-3xl">
                            <button>
                                DISCOVER NOW
                                <div></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-16">
                    <img src="https://demo.templatesjungle.com/kaira/images/banner-image-3.jpg" alt=""></img>
                    <div className="py-10 ">
                        <h5 className="mb-2 text-4xl text-slate-700 cursor-pointer ">SORT LEATHER JACKETS</h5>
                        <div className="mb-4 ">
                            <span className="text-3xl text-slate-500">
                                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.
                            </span>
                        </div>
                        <div className="text-3xl">
                            <button>
                                DISCOVER NOW
                                <div></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-16">
                    <img src="https://demo.templatesjungle.com/kaira/images/banner-image-4.jpg" alt=""></img>
                    <div className="py-10 ">
                        <h5 className="mb-2 text-4xl text-slate-700 cursor-pointer ">SORT LEATHER JACKETS</h5>
                        <div className="mb-4 ">
                            <span className="text-3xl text-slate-500">
                                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.
                            </span>
                        </div>
                        <div className="text-3xl">
                            <button>
                                DISCOVER NOW
                                <div></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-16">
                    <img src="https://demo.templatesjungle.com/kaira/images/banner-image-5.jpg" alt=""></img>
                    <div className="py-10 ">
                        <h5 className="mb-2 text-4xl text-slate-700 cursor-pointer ">SORT LEATHER JACKETS</h5>
                        <div className="mb-4 ">
                            <span className="text-3xl text-slate-500">
                                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.
                            </span>
                        </div>
                        <div className="text-3xl">
                            <button>
                                DISCOVER NOW
                                <div></div>
                            </button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
