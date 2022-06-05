import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <Image src="https://9mobi.vn/cf/images/2015/03/nkk/hinh-anh-dep-1.jpg" alt="abc" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItems;
