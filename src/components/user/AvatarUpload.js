import { Image, message, Upload } from 'antd';

const props = {
  name: 'file',
  action: 'http://localhost:8001/users/avatar',
  // headers: {
  //   authorization: 'authorization-text',
  // },
  multiple: false,
  maxCount: 1,

  // beforeUpload: (file) => {
  //   const isPNG = file.type === 'image/png';
  //
  //   if (!isPNG) {
  //     message.error(`${file.name} is not a png file`);
  //   }
  //    console.log(userDetails);

  //   return isPNG || Upload.LIST_IGNORE;
  // },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AvatarUpload = () => (
  <Upload {...props}>
    <Image
      preview={false}
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </Upload>
);

export { AvatarUpload };
