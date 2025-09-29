import styles from "./header.module.css";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const { t, i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
 
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
      setDropdownOpen(false);
    };

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <header className={styles.header}>

      <a href="http://localhost:3000/"><Image className={styles.Img} src="/favicon.ico" alt="logo" width={65} height={65} /></a>

      <div className={styles.container}>
        
        <div className={styles.dropdown}>
            <Image className={styles.dropbtn} src="/translate-white.svg" alt="Translate" width={50} height={50} onClick={toggleDropdown} />

            <div className={`${styles.dropdownContent} ${dropdownOpen ? styles.show : ''}`}>

            <button onClick={() => changeLanguage('ar')}>{t('Arabic')}</button>
            <button onClick={() => changeLanguage('en')}>{t('English')}</button>
            <button onClick={() => changeLanguage('es')}>{t('Spanish')}</button>

            </div>
          </div>
          
        <nav>
          <ul className={styles.navbar}>
              <li className={styles.navItem}><a href="#Home">{t('home')}</a></li>
              <li className={styles.navItem}><a href="#SafetyTips">{t('safety_tips')}</a></li>
              <li className={styles.navItem}><a href="#Quiz">{t('quiz')}</a></li>
              <li className={styles.navItem}><a href="#Resources">{t('resources')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
