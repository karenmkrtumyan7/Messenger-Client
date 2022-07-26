import styled from 'styled-components';
import {
  Col, DatePicker, Input, Row, Table, Tabs,
} from 'antd';

const UserReportActionsStyled = styled(Row)`
  column-gap: 5px;
  flex-wrap: nowrap;
`;

const UsersTableStyled = styled(Table)`
  width: 1500px;
`;

const FiltersInputStyled = styled(Input)`
  width: 100%;
`;

const FiltersDatePickerStyled = styled(DatePicker)`
  width: 100%;
`;

const FilterWrapper = styled(Row)`
  column-gap: 30px;
  justify-content: center;
`;

const FiltersButtonsWrapper = styled(Row)`
  column-gap: 10px;
  justify-content: center;
`;

const FilterInputWrapperStyled = styled(Col)`
  width: 200px;
  box-sizing: border-box;
`;

const AccountInfoWrapper = styled.div`
  margin: 100px 0;
`;

const AccountInfoTitle = styled.h2`
  font-size: 20px;
  border-bottom: 1px solid #C2C6CB;
  margin-bottom: 30px;
`;

const AccountInfoDetailsTitlesWrapper = styled(Col)`
  margin-right: 25px;
  text-align: end;
`;

const AccountInfoDetailsWrapper = styled(Col)`
  font-weight: bold;
`;

const AccountInfoMainWrapper = styled(Row)`
  justify-content: center; 
  background-color: white; 
  border-radius: 10px; 
  flex: 1 1 auto;
`;

const AccountStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 70%;
  margin: 0 auto;
`;

const UserTabsStyled = styled(Tabs)`
  margin-top: 30px;
`;

const UserInfoStyled = styled(Row)`
  row-gap: 10px;
`;

export {
  UserReportActionsStyled,
  UsersTableStyled,
  FiltersInputStyled,
  FiltersDatePickerStyled,
  FilterWrapper,
  FiltersButtonsWrapper,
  FilterInputWrapperStyled,
  AccountInfoWrapper,
  AccountInfoTitle,
  AccountInfoDetailsTitlesWrapper,
  AccountInfoDetailsWrapper,
  AccountInfoMainWrapper,
  AccountStyled,
  UserTabsStyled,
  UserInfoStyled,
};
