import styled from 'styled-components';

export const ListItem = styled.li`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 32px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.card};
  border-radius: 0px 0px 20px 20px;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 288px;
  }
`;
export const ImgWrap = styled.div`
  position: relative;
  background: ${p => p.theme.colors.accent};
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1;
  padding: 6px 0;
  width: 158px;
  font-size: 12px;
  line-height: calc(16 / 12);
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 0px 40px 40px 0px;
`;

export const Img = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: calc(38 / 28);
  height: 76px;
  overflow: hidden;
`;

export const ListInfo = styled.ul`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
  line-height: calc(22 / 16);
`;

export const LiInfo = styled.li`
  display: flex;
`;

export const Lable = styled.p`
  width: 90px;
  flex-shrink: 0;
`;
export const Text = styled.p`
  @media screen and (min-width: 768px) {
  }
`;

export const ThumbBtn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 12px;
  padding-bottom: 12px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const Wrap = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  height: 100%;
`;
