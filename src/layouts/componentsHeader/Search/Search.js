import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';

import { faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchvalue] = useState();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            setLoading(false);
        };
        fetchApi();
    }, []);

    const handleClear = () => {
        setFirstName('');
        setSearchvalue('');
        inputRef.current.focus();
    };

    return (
        // Việc sử dụng thẻ bao bọc <div> hoặc <span> xung quanh phần tử tham
        // chiếu sẽ giải quyết vấn đề này bằng cách tạo ngữ cảnh ParentNode mới.
        <div>
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={(searchValue, firstName)}
                    spellCheck={false}
                    placeholder="Search accounts and videos"
                    onChange={(e) => {
                        if (!e.target.value.startsWith(' ')) {
                            setSearchvalue(e.target.value);
                            setFirstName(e.target.value);
                        }
                    }}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <a href="Shop">
                        <SearchIcon />
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Search;
