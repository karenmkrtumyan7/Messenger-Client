import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Auth } from '../components/auth/Auth';
import SignInForm from '../containers/auth/SignIn';
import { Spin } from '../components/settings/Spin';
import { selectLoading } from '../selectors';

function SignIn(props) {
  const { isLoading } = props;
  return (
    <>
      <Auth>
        <SignInForm />
      </Auth>
      { isLoading && <Spin /> }
    </>
  );
}

SignIn.propTypes = {
  isLoading: PropTypes.bool,
};

SignIn.defaultProps = {
  isLoading: false,
};

const mapStateToProps = ({ settings }) => ({
  isLoading: selectLoading(settings),
});

export default connect(mapStateToProps)(SignIn);
