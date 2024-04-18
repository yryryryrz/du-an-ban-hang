import React from 'react';
import classNames from 'classnames/bind';
import styles from './InstargramSix.scss';

const cx = classNames.bind(styles);

function InstargramSix() {
    return (
        <div className={cx('follow-six')}>
            <div className={cx('follow-h6')}>
                <h6>Follow us on Instagram</h6>
            </div>
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
            </div>
        </div>
    );
}

export default InstargramSix;
