import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Auth } from '../components/auth/Auth';
import SignUpForm from '../containers/auth/SignUp';
import { selectLoading } from '../selectors';
import { Spin } from '../components/settings/Spin';

function SignUp(props) {
  const { isLoading } = props;
  return (
    <>
      <Auth>
        <SignUpForm />
      </Auth>
      { isLoading && <Spin />}
    </>
  );
}

SignUp.propTypes = {
  isLoading: PropTypes.bool,
};

SignUp.defaultProps = {
  isLoading: false,
};

const mapStateToProps = ({ settings }) => ({
  isLoading: selectLoading(settings),
});

export default connect(mapStateToProps)(SignUp);
