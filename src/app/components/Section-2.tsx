import styles from "./Section-2.module.css";
import { useTranslation } from 'react-i18next';
import SpotlightCard from './ui/SpotlightCard';
import Image from 'next/image';
import ShinyText from './effects/shinytext';

export default function Section2() {
  const { t } = useTranslation();
  return (
    <>
    <div className={styles.container} id="SafetyTips">
        <h2 className={styles.title}>{t('safety_online_tips')}</h2>
        <div className={styles.Gridbox}>
            {/* <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div> */}

            <SpotlightCard className={styles.card} spotlightColor="rgba(164, 164, 164, 0.6)">
                <Image className={styles.Image} src="/MarkedNo.svg" alt="Don't do it" width={50} height={50} />
                <h2><ShinyText 
                text={t('tip_1')}
                disabled={false} 
                speed={3} 
                className='custom-class' /></h2>
                <p className={styles.description}>{t('tip_1_description')}</p>
            </SpotlightCard>

            <SpotlightCard className={styles.card} spotlightColor="rgba(164, 164, 164, 0.6)">
                <Image className={styles.Image} src="/NoComment.svg" alt="Don't say anything" width={50} height={50} />
                <h2><ShinyText 
                text={t('tip_2')}
                disabled={false} 
                speed={3} 
                className='custom-class' /></h2>
                <p className={styles.description}>{t('tip_2_description')}</p>
            </SpotlightCard>

            <SpotlightCard className={styles.card} spotlightColor="rgba(164, 164, 164, 0.6)">
                <Image className={styles.Image} src="/people.svg" alt="Don't befriend anyone" width={50} height={50} />
                <h2><ShinyText 
                text={t('tip_3')}
                disabled={false} 
                speed={3} 
                className='custom-class' /></h2>
                <p className={styles.description}>{t('tip_3_description')}</p>
            </SpotlightCard>

            <SpotlightCard className={styles.card} spotlightColor="rgba(164, 164, 164, 0.6)">
                <Image className={styles.Image} src="/warning.svg" alt="Tell an adult about everything" width={50} height={50} />
                <h2><ShinyText 
                text={t('tip_4')}
                disabled={false} 
                speed={3} 
                className='custom-class' /></h2>
                <p className={styles.description}>{t('tip_4_description')}</p>
            </SpotlightCard> 
            
            <SpotlightCard className={styles.card} spotlightColor="rgba(164, 164, 164, 0.6)">
                <Image className={styles.Image} src="/Support.svg" alt="be respectful" width={50} height={50} />
                <h2><ShinyText 
                text={t('tip_5')}
                disabled={false} 
                speed={3} 
                className='custom-class' /></h2>
                <p className={styles.description}>{t('tip_5_description')}</p>
            </SpotlightCard>

            <SpotlightCard className={styles.card} spotlightColor="rgba(164, 164, 164, 0.6)">
                <Image className={styles.Image} src="/Monitored.svg" alt="be monitored" width={50} height={50} />
                <h2><ShinyText 
                text={t('tip_6')}
                disabled={false} 
                speed={3} 
                className='custom-class' /></h2>
                <p className={styles.description}>{t('tip_6_description')}</p>
            </SpotlightCard> 
        </div>
        <a className={styles.Resources} href="#Resources">{t('resources')}</a>

    </div>
    </>
  );
}
