import styles from './UILoading.module.css';
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const UILoading = ({
    color='white',
                   }) => {
    const [loaderIcon, setLoaderIcon] = useState('#FFFFFF');

    useEffect(() => {
        switch (color) {
            case 'white':
                setLoaderIcon('#FFFFFF');
                break;
            case 'black':
                setLoaderIcon('#000000');
                break;
            case 'violet':
                setLoaderIcon('#AE72C2');
        }
    }, []);

    return (
        <div className={styles.loader}>
            <svg className={styles.pl} viewBox="0 0 64 64" width="64px" height="64px"
                 xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#000"/>
                        <stop offset="100%" stopColor="#fff"/>
                    </linearGradient>
                    <mask id="grad-mask">
                        <rect x="0" y="0" width="64" height="64" fill="url(#grad)"/>
                    </mask>
                </defs>
                <circle className={styles.pl__ring} cx="32" cy="32" r="26" fill="none" stroke={loaderIcon}
                        strokeWidth="12"
                        strokeDasharray="169.65 169.65" strokeDashoffset="-127.24" strokeLinecap="round"
                        transform="rotate(135)"/>
                <g fill={loaderIcon}>
                    <circle className={styles.pl__ball1} cx="32" cy="45" r="6" transform="rotate(14)"/>
                    <circle className={styles.pl__ball2} cx="32" cy="48" r="3" transform="rotate(-21)"/>
                </g>
                <g mask="url(#grad-mask)">
                    <circle className={styles.pl__ring} cx="32" cy="32" r="26" fill="none" stroke={loaderIcon}
                            strokeWidth="12" strokeDasharray="169.65 169.65" strokeDashoffset="-127.24"
                            strokeLinecap="round" transform="rotate(135)"/>
                    <g fill={loaderIcon}>
                        <circle className={styles.pl__ball1} cx="32" cy="45" r="6" transform="rotate(14)"/>
                        <circle className={styles.pl__ball2} cx="32" cy="48" r="3" transform="rotate(-21)"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

UILoading.propTypes = {
    color: PropTypes.string
}

export default UILoading;
