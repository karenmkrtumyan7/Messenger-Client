import { EditOutlined } from '@ant-design/icons';
import {
  Button, Input, Modal,
} from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function UserEditModal(props) {
  const { data } = props;
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [values, setValues] = useState(data);
  const {
    id, email, contact, username,
  } = values;

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
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
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
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Username"
          onChange={handleInputChange}
          name="username"
          value={username}
        />
        <Input
          placeholder="Id"
          onChange={handleInputChange}
          name="id"
          value={id}
        />
        <Input
          placeholder="Email"
          onChange={handleInputChange}
          name="email"
          value={email}
        />
        <Input
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
};

UserEditModal.defaultProps = {
  data: {},
};
