import styles from './sidebar.module.scss';
import classNames from 'classnames';
export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['s-btn-wrapper']}>
                <a className={styles['s-btn']}>Button</a>
                <a className={styles['s-btn']}>Button</a>
                <a className={styles['s-btn']}>Button</a>
                <a className={styles['s-btn']}>Button</a>
                <a className={styles['s-btn']}>Button</a>
                
            </div>
        </div>
    );
};
