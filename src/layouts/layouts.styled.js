import styled from 'styled-components';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ContentStyled = styled(Content)`
  padding: 0.71rem 1.28rem;
`;

const LayoutWrapperStyled = styled(Layout)`
  min-height: 100vh;
`;

export {
  LayoutStyled,
  ContentStyled,
  LayoutWrapperStyled,
};
