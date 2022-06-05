import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ className, src, alt, falseBack: customFalseback = images.noImage, ...prop }, ref) => {
    const [falseBack, setFalseBack] = useState('');
    const hanldeFalseback = () => {
        setFalseBack(customFalseback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={falseBack || src}
            alt={alt}
            {...prop}
            onError={hanldeFalseback}
        />
    );
});

export default Image;
