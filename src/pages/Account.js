import { Banner } from 'components/common/Banner';
import { AccountInfo } from 'components/user/AccountInfo';
import { BannerStyled } from 'components/styledComponents/Banner/BannerStyled';
import { AccountStyled } from 'components/user/User.styled';

const Account = () => (
  <BannerStyled>
    <AccountStyled>
      <Banner />
      <AccountInfo />
    </AccountStyled>
  </BannerStyled>
);

export { Account };
