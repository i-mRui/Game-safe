'use client';

import './assets/fonts.css'
import styles from "./page.module.css";
// import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/hero';
import Hyperspeed from './components/backgrounds/hyperspeed';
import Section2 from './components/Section-2';
import Resources from './components/Resources';

export default function Home() {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (

    <div className={styles.page}>
      <div className={styles.Section}>
        <Hyperspeed
              effectOptions={{
                  onSpeedUp: () => { },
                  onSlowDown: () => { },
                  distortion: 'turbulentDistortion',
                  length: 400,
                  roadWidth: 10,
                  islandWidth: 2,
                  lanesPerRoad: 4,
                  fov: 90,
                  fovSpeedUp: 150,
                  speedUp: 2,
                  carLightsFade: 0.4,
                  totalSideLightSticks: 20,
                  lightPairsPerRoadWay: 40,
                  shoulderLinesWidthPercentage: 0.05,
                  brokenLinesWidthPercentage: 0.1,
                  brokenLinesLengthPercentage: 0.5,
                  lightStickWidth: [0.12, 0.5],
                  lightStickHeight: [1.3, 1.7],
                  movingAwaySpeed: [60, 80],
                  movingCloserSpeed: [-120, -160],
                  carLightsLength: [400 * 0.03, 400 * 0.2],
                  carLightsRadius: [0.05, 0.14],
                  carWidthPercentage: [0.3, 0.5],
                  carShiftX: [-0.8, 0.8],
                  carFloorSeparation: [0, 5],
                  colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xFFFFFF,
                  brokenLines: 0xFFFFFF,
                  leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                  rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                  sticks: 0x03B3C3,
                  }
              }}/>
        <Header />
        <Hero />
      </div>
      <div className={styles.Section}>
        <Section2 />
      </div>
      <div className={styles.Section}>
        <Resources />
      </div>
      
    </div>
  );
}
