import styled from 'styled-components';
import {
  Col, DatePicker, Input, Row, Table,
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

export {
  UserReportActionsStyled,
  UsersTableStyled,
  FiltersInputStyled,
  FiltersDatePickerStyled,
  FilterWrapper,
  FiltersButtonsWrapper,
  FilterInputWrapperStyled,
};
