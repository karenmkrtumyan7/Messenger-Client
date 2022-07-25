import { Button, Checkbox } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';

const EditPermissions = (props) => {
  const { resourcePermissions } = props;
  const plainOptions = Object.keys(resourcePermissions);
  const defaultCheckedList = plainOptions.filter((option) => resourcePermissions[option] === true);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const onChange = (list) => {
    setCheckedList(list);
  };

  return (
    <div>
      <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} />
      <Button type="primary">Save</Button>
    </div>
  );
};

EditPermissions.propTypes = {
  resourcePermissions: PropTypes.object,
};

EditPermissions.defaultProps = {
  resourcePermissions: {},
};

export { EditPermissions };
