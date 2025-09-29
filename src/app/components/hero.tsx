import styles from "./hero.module.css";
import { useTranslation } from 'react-i18next';
import TextType from './effects/typing';
import GradientText from './effects/gradienttext';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className={styles.container} id="Home">

            <div className={styles.heroContent}>
                <TextType className={styles.title}
                    text={[t('play_smart') + t('stay_safe')]}
                    typingSpeed={75}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="|"
                    loop={true}
                />
                <p className={styles.description}>
                    {t('description')}
                </p>
                <a href="#SafetyTips"><button className={styles.btn}>
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="">
                    {t('get_started')}
                    </GradientText>
                </button></a>
            </div>
            
        </div>
    )
}
