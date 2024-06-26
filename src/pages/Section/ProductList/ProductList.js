import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import sytles from './ProductList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(sytles);

function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [sortBy, setSortBy] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + 24;
    const pageCount = Math.ceil(data.length / 24);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 24) % data.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        const fetchDataProduct = async () => {
            try {
                const result = await fetch('https://6535694ec620ba9358ec769e.mockapi.io/product');
                const jsonData = await result.json();
                setloading(false);
                setData(jsonData);
            } catch {
                console.log(Error);
            }
        };
        fetchDataProduct();
    }, []);

    if (loading) {
        return <div className={cx('loading')}>Loading..</div>;
    }

    const sortProducts = (productsToSort, sortBy) => {
        if (sortBy === 'lowToHigh') {
            return productsToSort.slice().sort((a, b) => a.price - b.price);
        } else if (sortBy === 'highToLow') {
            return productsToSort.slice().sort((a, b) => b.price - a.price);
        }
        return productsToSort;
    };
    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        setSortBy(selectedSortBy);
    };
    const sortedProducts = sortProducts(data, sortBy);
    const currentItems = sortedProducts.slice(itemOffset, endOffset);

    return (
        <div>
            <div className={cx('showing-left')}>
                <div>
                    <span>
                        Showing {currentItems.length} of {data.length} results
                    </span>
                </div>
                <div>
                    <select onChange={handleSortChange} name="" id="">
                        <option value="">Mới Nhất</option>
                        <option value="lowToHigh">Thấp đến Cao</option>
                        <option value="highToLow">Cao đến Thấp</option>
                    </select>
                </div>
            </div>
            <div className="w-full h-auto grid grid-cols-6 gap-6 flex justify-between ">
                {currentItems.map((item) => (
                    <div key={item.id} className={cx('arrivals-img')}>
                        <img src={item.img} alt="" />
                        <a className={cx('arrivals-a')} href="/">
                            {item.name}
                        </a>
                        <div>
                            <p className={cx('arrivals-p')}>{item.price}</p>
                            <div>
                                <span className={cx('arrivals-span')}>ADD TO CART</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ReactPaginate
                nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={3}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default ProductList;
