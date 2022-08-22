import styled from 'styled-components';
import {
  Col, DatePicker, Image, Input, Row, Tabs,
} from 'antd';

const UserReportActionsStyled = styled(Row)`
  column-gap: 5px;
  flex-wrap: nowrap;
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

const AvatarWrapperStyled = styled(Row)`
  justify-content: center;
  margin-bottom: 10px;
`;

const AvatarStyled = styled(Image)`
  width: 10rem;
  height: 10rem;
  border: 1px solid black;
  border-radius: 50%;
`;

const AccountInfoTitle = styled.h2`
  font-size: 1.42rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.silverSand};
  margin-bottom: 2.14rem;
`;

const AccountInfoDetailsTitlesWrapper = styled(Row)`
  margin-bottom: 1.78rem;
  flex-direction: column;
  row-gap: 10px;
  text-align: end;
`;

const AccountInfoDetailsStyled = styled(Row)`
  font-weight: bold;
  flex-direction: column;
  row-gap: 10px;
`;

const AccountInfoMainWrapper = styled(Row)`
  justify-content: center; 
  background-color: ${(props) => props.theme.colors.white}; 
  border-radius: 10px; 
  flex: 1 1 auto;
`;

const AccountInfoDetailsWrapperStyled = styled(Row)`
  column-gap: 1rem;
`;

const AccountStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 70%;
  margin: 0 auto;
`;

const UserTabsStyled = styled(Tabs)`
  margin-bottom: 2.14rem;
`;

const UserInfoStyled = styled(Row)`
  row-gap: 10px;
`;

export {
  UserReportActionsStyled,
  FiltersInputStyled,
  FiltersDatePickerStyled,
  FilterWrapper,
  FiltersButtonsWrapper,
  FilterInputWrapperStyled,
  AccountInfoWrapper,
  AccountInfoTitle,
  AccountInfoDetailsTitlesWrapper,
  AccountInfoDetailsStyled,
  AccountInfoDetailsWrapperStyled,
  AccountInfoMainWrapper,
  AccountStyled,
  UserTabsStyled,
  UserInfoStyled,
  AvatarWrapperStyled,
  AvatarStyled,
};
