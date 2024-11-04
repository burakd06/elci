// import { _pricingHome } from 'src/_mock';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeGiris } from '../homegiris';


import { HomeGörsel } from '../homegörsel';

import { HomeBanner } from '../homebanner';

import { Homeİcons } from '../homeicons';
import { HomeSorular } from '../homesorular';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <HomeGiris />

      <HomeGörsel />

      <HomeSorular />

      <Homeİcons />

      <HomeBanner />

      

     
    </>
  );
}
