import { BannerRadiusStyled, BannerTitleStyled } from 'components/styledComponents/Banner/BannerStyled';
import PropTypes from 'prop-types';

const Banner = (props) => {
  const { text } = props;
  return (
    <BannerRadiusStyled>
      <BannerTitleStyled>
        {text}
      </BannerTitleStyled>
    </BannerRadiusStyled>
  );
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
};

export { Banner };
