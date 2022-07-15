import { Col, Row } from 'antd';
import Users from 'containers/user/UserReport';
import Filters from 'containers/user/Filters';
import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { selectUsersCount } from '../selectors';

function UserReport(props) {
  const { count } = props;
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: count,
  });

  return (
    <Row justify="center">
      <Col>
        <Filters setPagination={setPagination} />
        <Users pagination={pagination} setPagination={setPagination} />
      </Col>
    </Row>
  );
}

UserReport.propTypes = {
  count: PropTypes.number,
};

UserReport.defaultProps = {
  count: null,
};

const mapStateToProps = ({ user }) => ({
  count: selectUsersCount(user),
});

export default connect(mapStateToProps)(UserReport);
