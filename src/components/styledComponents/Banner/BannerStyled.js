import styled from 'styled-components';
import { Row } from 'antd';

const BannerStyled = styled(Row)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const BannerRadiusStyled = styled(Row)`
  background-color: ${(props) => props.theme.colors.bondiBlue};
  height: 50px;
  border-radius: 10px;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1.78rem;
`;

const BannerTitleStyled = styled.h3`
  font-size: 1.14rem; 
  color: ${(props) => props.theme.colors.white}; 
  margin: 0;
`;

export { BannerStyled, BannerRadiusStyled, BannerTitleStyled };
