import styles from "./Resources.module.css";
import { useTranslation } from 'react-i18next';

export default function Resources() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{t('resources.title')}</h1>
        <div className={styles.content}>
            <div className={styles.card}>
                <h3>{t('resources.content')}</h3>
                <p>{t('resources.content')}</p>
            </div>
            <div className={styles.card}>
                <h3>{t('resources.content')}</h3>
                <p>{t('resources.content')}</p>
            </div>
        </div>
    </div>
  )

}