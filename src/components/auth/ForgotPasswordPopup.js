import { Modal, Input } from 'antd';
import { useState } from 'react';

import { ForgotPassStyled } from './Auth.styled';

export function ForgotPasswordPopup() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const emailOnChangeHandler = ({ value }) => setEmail(value);

  return (
    <>
      <ForgotPassStyled onClick={showModal}>Forgot password ?</ForgotPassStyled>
      <Modal title="Forgot Password" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input value={email} placeholder="Type email" onChange={emailOnChangeHandler} />
      </Modal>
    </>
  );
}
