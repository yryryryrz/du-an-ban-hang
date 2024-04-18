import PropTypes from 'prop-types';
import Header from '../componentsHeader/Header/Header';
import stypes from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(stypes);

function defaultLayout({ children }) {
    return (
        <div className={cx('')}>
            <div>
                <Header />
            </div>
            <div className={cx('')}>
                <div className={cx('')}>{children}</div>
            </div>
        </div>
    );
}

defaultLayout.prototypes = {
    children: PropTypes.node.isRequired,
};

export default defaultLayout;
