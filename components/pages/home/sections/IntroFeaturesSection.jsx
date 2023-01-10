import { useMemo } from 'react';
import {  XCircle, Star, Lock, Zap } from 'react-feather';
import Tile from '@/components/common/Tile';
import Typography from '@/components/common/Typography';
import { Grid, GridItem, Section, Stack } from '@/components/common/layout';
import { useSite } from '@/components/common/Site';

const IntroFeaturesSection = () => {
  const { breakpoint } = useSite();

  const gap = useMemo(() => breakpoint === 'xs' ? 24 : 40, [breakpoint])
  
  return (
    <Section contained gutterBottom={20} variant="secondary">
      <Grid columns={{ xs: 1, lg: 2 }} gap={{ xs: 6, lg: 12 }}>
        <GridItem>
          <Stack>
            <Zap size={gap} />
            <Typography variant="intro" gutterTop>Fast AF</Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Float is fully native macOS app. It&apos;s fast, lightweight and extremely efficient.
            </Typography>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <Lock size={gap} />
            <Typography variant="intro" gutterTop>
            Privacy. That&apos;s Float.
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Unline most browsers. Float doesn&apos;t collect user data, and doesn&apos;t track you.
            </Typography>
          </Stack>
        </GridItem>
          <GridItem>
          <Stack>
            <Star size={gap} />
            <Typography variant="intro" gutterTop>
              Customizable
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Float is fully customizable. You can change the theme, window border and more.
            </Typography>
          </Stack>
        </GridItem>
          <GridItem>
          <Stack>
            <XCircle size={gap} />
            <Typography variant="intro" gutterTop>
              Ad blocking
            </Typography>
            <Typography variant="intro" style={{ opacity: .5 }}>
              Float blocks Ads, cookies and ignores caches by default.
            </Typography>
          </Stack>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default IntroFeaturesSection;
