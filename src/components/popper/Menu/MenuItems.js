import classNames from 'classnames/bind';
import Buttons from '~/components/Buttons';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    return (
        <Buttons className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Buttons>
    );
}

export default MenuItems;
