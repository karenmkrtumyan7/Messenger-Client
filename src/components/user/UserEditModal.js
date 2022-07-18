import { EditOutlined } from '@ant-design/icons';
import {
  Button, Input, Modal, Form,
} from 'antd';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { AppConstants } from 'constants/app.constants';

const { Item } = Form;

export function UserEditModal(props) {
  const { data, editUser } = props;
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { validateFields, resetFields } = form;

  useEffect(() => () => {
    if (!visible) {
      resetFields();
    }
  }, [resetFields, visible]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    validateFields().then((values) => {
      const existingObj = _.pick(data, ['userName', 'email', 'contact']);
      if (!_.isEqual(existingObj, values)) {
        editUser(data._id, values);
      }
    });
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" icon={<EditOutlined />} onClick={showModal} />
      <Modal
        title="Edit User"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender
      >
        <Form
          name="as"
          form={form}
          initialValues={data}
        >
          <Item
            name="userName"
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
              {
                pattern: AppConstants.regexp.username,
                message: 'Username is not valid',
              },
            ]}
          >
            <Input
              addonBefore="Username"
              placeholder="Username"
            />
          </Item>
          <Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Email is required',
              },
              {
                type: 'email',
                message: 'Email is not valid',
              },
            ]}
          >
            <Input
              addonBefore="Email"
              placeholder="Email"
            />
          </Item>
          <Item
            name="contact"
            rules={[
              {
                required: true,
                message: 'Contact number is required',
              },
              {
                pattern: AppConstants.regexp.contactNumber,
                message: 'Contact number is not valid',
              },
            ]}
          >
            <Input
              addonBefore="Contact number"
              placeholder="Contact Number"
            />
          </Item>
        </Form>
      </Modal>
    </>
  );
}

UserEditModal.propTypes = {
  data: PropTypes.object,
  editUser: PropTypes.func,
};

UserEditModal.defaultProps = {
  data: {},
  editUser: null,
};
