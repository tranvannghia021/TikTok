import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { wapper as PopperWrapper } from '~/components/popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItems from '~/components/AccountItems';
import Buttons from '~/components/Buttons';
import Menu from '~/components/popper/Menu';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Enghlish',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },

    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];
const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'Language':
            //
            break;
        default:
            throw new Error('underfind');
    }
};
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hhh',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        sepatate: true,
    },
];
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setsearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TiTok" />

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
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
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn', 'custom-icon-search')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} placement="bottom" content="Upload video">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon className={cx('custom-icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} placement="bottom" content="Message">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon className={cx('custom-icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} placement="bottom" content="Inbox">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon className={cx('custom-icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Buttons text>Upload</Buttons>
                            <Buttons primary>Log in</Buttons>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5be2b941571b3449e6a1aec43ce751e3~c5_100x100.jpeg?x-expires=1654326000&x-signature=eIiywETH5iUB6wJUfGIjmQ%2FjoiQ%3D"
                                className={cx('user-avatar')}
                                alt="nguyen b"
                                falseBack="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/f8471a65f4bc3c5b167454d6980dd0da~c5_720x720.jpeg?x-expires=1654588800&x-signature=rzwAcEfzy0gZK6EBfw16EF%2FMhDg%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
