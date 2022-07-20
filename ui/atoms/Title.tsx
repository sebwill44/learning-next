import { TitleProps } from '../../types/TitleProps';
import styles from './Title.module.css';
export const Title = ({text = 'Hello!'}:TitleProps) => {
    return (
        <h1 className={styles.title}>{text}</h1>
    )
};