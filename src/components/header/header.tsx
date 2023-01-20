import styles from './header.module.scss';
import classNames from 'classnames';
export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.logo}>DRX.</span>
            <span>
                <a href="/" className={styles['nav-links']}>
                    About
                </a>
                <a href="/" className={styles['nav-links']}>Projects</a>
                <a href="/" className={styles['nav-links']}>Contact</a>
            </span>
        </div>
    );
};
