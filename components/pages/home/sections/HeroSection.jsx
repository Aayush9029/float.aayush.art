
import Image from 'next/image';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Typography from '@/components/common/Typography';
import { Row, Column, Section, Stack } from '@/components/common/layout';
import HeroImage from '../HeroImage';
import Button from '../../../common/Button';

const ProductIconWrap = styled.div`
  width: 128px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSection = () => {
  return (
    <Parallax
      style={{ overflow: 'visible' }}
      renderLayer={(percentage) => {
        return (
          <Section contained gutterTop>
            <Row align="center" style={{ position: 'relative', zIndex: 1 }}>
              <Column width={{ md: 12, lg: 12 }}>
                <Stack gap={2} align="center">
                  <ProductIconWrap>
                    <Image
                      width={128}
                      height={128}
                      src="/product-icon.png"
                      alt="Float product icon"
                    />
                  </ProductIconWrap>
                  <Typography variant="eyebrow-elevated" as="h1">
                    Float for macOS
                  </Typography>
                  <Typography variant="headline-elevated">
                    A lightweight web browsing experience.
                    {/* <br /> */}
                    {/* Open source. Free forever. */}
                  </Typography>
                  <Typography variant="intro-elevated" color="tertiary" gutterBottom>
                    Float is a handy web browser that floats on top of your apps, and even other browsers! 
                  </Typography>
                  <Button onClick={() => window.open("https://apps.apple.com/us/app/float-floating-web-browser/id1621142916")} >Download Now</Button>
                  <Typography variant="body-reduced" color="tertiary">v2.0 | macOS 12+</Typography>
                </Stack>
              </Column>
            </Row>
            <Row align="center">
              <Column>
                <HeroImage percentage={percentage} />
              </Column>
            </Row>
          </Section>
        )
      }}
    />
  );
}

export default HeroSection;
