import styled from 'styled-components';
import { Row } from 'antd';

const BannerStyled = styled(Row)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const BannerRadiusStyled = styled(Row)`
  background-color: #00a1af;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 25px;
`;

const BannerTitleStyled = styled.h3`
  font-size: 16px; 
  color: white; 
  margin: 0;
`;

export { BannerStyled, BannerRadiusStyled, BannerTitleStyled };
