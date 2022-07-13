import {
  Button, Col, Form, Row,
} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FilterInputWrapperStyled,
  FiltersButtonsWrapper,
  FiltersDatePickerStyled,
  FiltersInputStyled,
  FilterWrapper,
} from './User.styled';
import { getIsoDate } from '../../utils';

export function Filters(props) {
  const { getUsersByFilter } = props;
  const [form] = Form.useForm();

  const onFinish = (filterParams) => {
    const requestData = { ...filterParams, createdAt: getIsoDate(filterParams.createdAt) };
    getUsersByFilter(requestData);
  };

  const onReset = () => {
    form.resetFields();
    getUsersByFilter();
  };

  const [showFilter, setShowFilter] = useState(true);
  const viewHandler = () => setShowFilter(!showFilter);

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
  getUsersByFilter: PropTypes.func,
};

Filters.defaultProps = {
  getUsersByFilter: null,
};
