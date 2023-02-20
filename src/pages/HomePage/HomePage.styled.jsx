import styled from 'styled-components';

import portraitMob from '../../images/HomePage/portraitMob.webp';
import portraitMob2x from '../../images/HomePage/portraitMob@2x.webp';
import portraitTab from '../../images/HomePage/portraitTab.webp';
import portraitTab2x from '../../images/HomePage/portraitTab@2x.webp';
import portraitDesk from '../../images/HomePage/portraitDesk.webp';
import portraitDesk2x from '../../images/HomePage/portraitDesk@2x.webp';
import BgMob from '../../images/HomePage/BgMob.png';
import BgMob2x from '../../images/HomePage/BgMob@2x.png';
import BgTab from '../../images/HomePage/BgTab.png';
import BgTab2x from '../../images/HomePage/BgTab@2x.png';
import BgDesk from '../../images/HomePage/BgDesk.png';
import BgDesk2x from '../../images/HomePage/BgDesk@2x.png';
import Heart from '../../images/HomePage/Heart.png';
import Heart2x from '../../images/HomePage/Heart@2x.png';

export const Title = styled.h1`
  max-width: 280px;
  font-size: 32px;
  line-height: 1.38;
  font-weight: 700;
  color: black;
  @media screen and (min-width: 768px) {
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
`;

export const HomeSection = styled.section`
  padding-top: 60px;
  min-height: 543px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${portraitMob}), url(${BgMob});
  background-size: 320px 337px, 100vw 470px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${portraitMob2x}), url(${BgMob2x});
  }
  @media screen and (min-width: 768px) {
    min-height: 1108px;
    padding-top: 88px;
    background-image: url(${portraitTab}), url(${BgTab});
    background-size: 645px 715px, 100vw 1033px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitTab2x}), url(${BgTab2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 92px;
    padding-bottom: 408px;
    min-height: calc(100vh - 64px);
    background-image: url(${portraitDesk}), url(${BgDesk}), url(${Heart});
    background-size: 590px 640px, 100vw calc(100vw * 0.375), 92px 89px;
    background-position-x: calc(50% + 330px), center, calc(50% + 118px);
    background-position-y: bottom, bottom, calc(50% - 204px);
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${portraitDesk2x}), url(${BgDesk2x}),
        url(${Heart2x});
    }
  }
`;