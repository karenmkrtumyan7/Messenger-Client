import { Typography, Grid } from 'antd';
import { AuthHeaderStyled, ContainerStyled } from 'components/auth//Auth.styled';

const { Title } = Typography;

const AuthHeader = () => {
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  return (
    <AuthHeaderStyled mid={md ? 1 : 0}>
      <ContainerStyled mid={md ? 1 : 0}>
        <Title level={3}> Your Logo </Title>
      </ContainerStyled>
    </AuthHeaderStyled>
  );
};

export { AuthHeader };
