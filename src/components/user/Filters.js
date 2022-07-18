import {
  Button, Col, Form, Row,
} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { getIsoDate } from 'utils';
import {
  FilterInputWrapperStyled,
  FiltersButtonsWrapper,
  FiltersDatePickerStyled,
  FiltersInputStyled,
  FilterWrapper,
} from './User.styled';
import LocalStorageService from '../../services/localStorage.service';

export function Filters(props) {
  const { setFilterParams, setPagination, getUsers } = props;
  const [form] = Form.useForm();

  const onFinish = (filterParams) => {
    const requestData = { ...filterParams, createdAt: getIsoDate(filterParams.createdAt) };
    setPagination((prevState) => ({ total: prevState.total, pageSize: 10, current: 1 }));
    setFilterParams(requestData);
    getUsers({ page: 1, limit: 10, ...filterParams });
  };

  const onReset = () => {
    form.resetFields();
    setFilterParams({});
    setPagination((prevState) => ({ total: prevState.total, pageSize: 10, current: 1 }));
    getUsers({ page: 1, limit: 10 });
  };

  const [showFilter, setShowFilter] = useState(LocalStorageService.get('usersFilterView'));
  const viewHandler = () => {
    LocalStorageService.set('usersFilterView', !showFilter);
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <Row justify="end">
        <Button type="text" icon={<FilterOutlined />} onClick={viewHandler}>Filter</Button>
      </Row>
      {showFilter && (
        <Form
          form={form}
          name="filters"
          initialValues={{
            createdAt: '',
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <FilterWrapper>
            <FilterInputWrapperStyled>
              <Form.Item
                label="Email"
                name="email"
              >
                <FiltersInputStyled />
              </Form.Item>
            </FilterInputWrapperStyled>
            <FilterInputWrapperStyled>
              <Form.Item
                label="Username"
                name="userName"
              >
                <FiltersInputStyled />
              </Form.Item>
            </FilterInputWrapperStyled>
            <FilterInputWrapperStyled>
              <Form.Item
                label="Contact"
                name="contact"
              >
                <FiltersInputStyled />
              </Form.Item>
            </FilterInputWrapperStyled>
            <FilterInputWrapperStyled>
              <Form.Item
                label="Date"
                name="createdAt"
              >
                <FiltersDatePickerStyled />
              </Form.Item>
            </FilterInputWrapperStyled>
            <FilterInputWrapperStyled>
              <Form.Item>
                <FiltersButtonsWrapper>
                  <Col>
                    <Button type="primary" htmlType="submit">
                      Apply
                    </Button>
                  </Col>
                  <Col>
                    <Button htmlType="button" onClick={onReset}>
                      Reset
                    </Button>
                  </Col>
                </FiltersButtonsWrapper>
              </Form.Item>
            </FilterInputWrapperStyled>
          </FilterWrapper>
        </Form>
      )}
    </div>
  );
}

Filters.propTypes = {
  setFilterParams: PropTypes.func,
  setPagination: PropTypes.func,
  getUsers: PropTypes.func,
};

Filters.defaultProps = {
  setFilterParams: null,
  setPagination: null,
  getUsers: null,
};
