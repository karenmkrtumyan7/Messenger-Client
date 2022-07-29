import { Button, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavigationService } from 'services/navigationService';
import { useParams } from 'react-router-dom';

const EditPermissions = (props) => {
  const {
    resourcePermissions, updatePermissions, resetChangeStatus, changeStatus,
  } = props;
  const plainOptions = Object.keys(resourcePermissions);
  const defaultCheckedList = plainOptions.filter((option) => resourcePermissions[option] === true);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const { id } = useParams();

  useEffect(() => {
    if (changeStatus) {
      resetChangeStatus();
      NavigationService('/users/');
    }
  }, [changeStatus]);

  const onClick = () => {
    const requestData = {};
    plainOptions.forEach((option) => {
      requestData[option] = checkedList.includes(option);
    });
    updatePermissions(id, requestData);
  };

  return (
    <div>
      <Checkbox.Group options={plainOptions} value={checkedList} onChange={(list) => setCheckedList(list)} />
      <Button type="primary" onClick={onClick}>Save</Button>
    </div>
  );
};

EditPermissions.propTypes = {
  resourcePermissions: PropTypes.object,
  updatePermissions: PropTypes.func,
  resetChangeStatus: PropTypes.func,
  changeStatus: PropTypes.func,
};

EditPermissions.defaultProps = {
  resourcePermissions: {},
  updatePermissions: null,
  resetChangeStatus: null,
  changeStatus: null,
};

export { EditPermissions };
