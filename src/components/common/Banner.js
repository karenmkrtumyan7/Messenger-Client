import { BannerRadiusStyled, BannerTitleStyled } from 'components/styledComponents/Banner/BannerStyled';
import PropTypes from 'prop-types';

const Banner = (props) => {
  const { role } = props;
  return (
    <BannerRadiusStyled>
      <BannerTitleStyled>
        {role}
      </BannerTitleStyled>
    </BannerRadiusStyled>
  );
};

Banner.propTypes = {
  role: PropTypes.string.isRequired,
};

export { Banner };
