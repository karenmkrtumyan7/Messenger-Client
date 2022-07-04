import styled from 'styled-components';
import { Row, Table } from 'antd';

const UserReportActionsStyled = styled(Row)`
  column-gap: 5px;
  flex-wrap: nowrap;
`;

const UsersTableStyled = styled(Table)`
  width: 1500px;
`;

export {
  UserReportActionsStyled,
  UsersTableStyled,
};
