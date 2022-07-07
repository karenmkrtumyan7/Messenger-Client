import { EditOutlined } from '@ant-design/icons';
import {
  Button, Input, Modal,
} from 'antd';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export function UserEditModal(props) {
  const { data, edit } = props;
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState(data);
  const initialValues = useRef(values);
  const {
    _id, email, contact, userName,
  } = values;

  useEffect(() => {
    initialValues.current = data;
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    if (!_.isEqual(initialValues.current, values)) {
      edit(values);
    }
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
      >
        <Input
          addonBefore="Username"
          placeholder="Username"
          onChange={handleInputChange}
          name="userName"
          value={userName}
        />
        <Input
          addonBefore="Id"
          placeholder="Id"
          onChange={handleInputChange}
          name="_id"
          value={_id}
          disabled
        />
        <Input
          addonBefore="Email"
          placeholder="Email"
          onChange={handleInputChange}
          name="email"
          value={email}
        />
        <Input
          addonBefore="Contact number"
          placeholder="Contact Number"
          onChange={handleInputChange}
          name="contact"
          value={contact}
        />
      </Modal>
    </>
  );
}

UserEditModal.propTypes = {
  data: PropTypes.object,
  edit: PropTypes.func,
};

UserEditModal.defaultProps = {
  data: {},
  edit: null,
};
