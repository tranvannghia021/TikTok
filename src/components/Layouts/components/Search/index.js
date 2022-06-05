import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { wapper as PopperWrapper } from '~/components/popper';
import AccountItems from '~/components/AccountItems';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setsearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 2]);
        }, 0);
    }, []);
    const handleClear = () => {
        setSearchValue('');
        setsearchResult([]);
        inputRef.current.focus();
    };
    const handlehidenResult = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                        <AccountItems />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handlehidenResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn', 'custom-icon-search')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
