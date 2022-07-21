import styled from 'styled-components';
import { Spin } from 'antd';

const SpinStyled = styled(Spin)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: transparent;
`;

export { SpinStyled };
