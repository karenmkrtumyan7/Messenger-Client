import { message, Upload } from 'antd';
import localStorageService from 'services/localStorage.service';
import PropTypes from 'prop-types';
import { AvatarStyled } from 'components/user/User.styled';

const config = {
  name: 'file',
  action: 'http://localhost:8001/users/avatar',
  headers: {
    authorization: `Bearer ${localStorageService.get('auth')?.token}`,
  },
  multiple: false,
  maxCount: 1,
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png';

    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }

    return isPNG || Upload.LIST_IGNORE;
  },
  onChange(info) {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AvatarUpload = (props) => {
  const { id } = props;
  return (
    <Upload {...config}>
      <AvatarStyled
        preview={false}
        src={`http://localhost:8001/upload/avatars/${id}.png`}
      />
    </Upload>
  );
};

AvatarUpload.propTypes = {
  id: PropTypes.string.isRequired,
};

export { AvatarUpload };
