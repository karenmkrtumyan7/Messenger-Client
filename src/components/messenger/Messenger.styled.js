import styled from 'styled-components';
import {
  Avatar, Button, Input, Row,
} from 'antd';

const UserItemStyled = styled(Row)`
    position: relative;
    width: 300px;
    justify-content: space-between;
    cursor: pointer;
    padding: 1.5rem;
    &:hover {
      background-color: ${(props) => props.theme.colors.dodgerBlue};
      span {
        color: white;
      }
      &:after {
        background-color: ${(props) => props.theme.colors.dodgerBlue};
        width: 100%;
        left: 0;
      }
    };
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.colors.mercury};
      width: calc(100% - 3rem);
      left: 1.5rem;
    }
`;

const LastMessageStyled = styled.span`
    font-size: 1rem;
    line-height: 1.2rem;
`;

const UserNameStyled = styled(LastMessageStyled)`
    font-weight: ${(props) => props.theme.typography};
`;

const UserAvatarStyled = styled(Avatar)`
  width: 40px;
`;

const UserDescriptionWrapperStyled = styled(Row)`
  flex-direction: column; 
  justify-content: space-around;
`;

const UserSearchStyled = styled(Input)`
  width: 188px;
  border-radius: 21px;
  height: 42px;
  padding: 0 1rem;
`;

const UserSearchButtonStyled = styled(Button)`
  height: 42px;
  width: 42px;
  margin-left: 10px;
  border-radius: 50%;
`;

export {
  UserItemStyled,
  UserNameStyled,
  UserDescriptionWrapperStyled,
  UserAvatarStyled,
  LastMessageStyled,
  UserSearchStyled,
  UserSearchButtonStyled,
};
