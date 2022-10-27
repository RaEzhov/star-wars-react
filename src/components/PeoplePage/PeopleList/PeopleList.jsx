import styles from './PeopleList.module.css';

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({id, name, imageUrl}) => {
                return (<li key={id} className={styles.list__item}>
                    <a href='#tmp'>
                        <img src={imageUrl} alt={name} className={styles.person__photo}/>
                        <p>{name}</p>
                    </a>
                </li>)
            })}
        </ul>
    )
};

export default PeopleList;