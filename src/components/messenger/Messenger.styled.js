import styled from 'styled-components';
import {
  Avatar, Button, Col, Input, Row,
} from 'antd';
import { SendOutlined } from '@ant-design/icons';

const UserItemStyled = styled(Row)`
  position: relative;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.5rem;
  flex-wrap: nowrap;
  background-color: ${(props) => (props.active ? props.theme.colors.dodgerBlue : 'initial')};
  span {
    color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.black)};
  }
  &:hover {
    background-color: ${(props) => (!props.active ? props.theme.colors.porcelain : props.theme.colors.dodgerBlue)};
    &:after {
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
  color: ${(props) => props.theme.colors.dustyGray};
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const LastMessageTimeStyled = styled(LastMessageStyled)`
  white-space: nowrap;
`;

const UserNameStyled = styled(LastMessageStyled)`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  color: ${(props) => props.theme.colors.black};
`;

const UserAvatarStyled = styled(Avatar)`
  width: 40px;
  height: 40px;
`;

const UserDescriptionWrapperStyled = styled(Row)`
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 1;
  margin-left: 1rem;
  justify-content: space-around;
`;

const UserSearchStyled = styled(Input)`
  border-radius: 21px;
  height: 42px;
  padding: 0 1rem;
`;

const UserSearchButtonStyled = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.dodgerBlue};
  border-color: ${(props) => props.theme.colors.dodgerBlue};
`;

const UserSearchWrapperStyled = styled(Row)`
  column-gap: 10px;
  flex-wrap: nowrap;
`;

const MessengerHeaderStyled = styled.div`
  background-color: #eceff1;
  padding: 15px 29px;
  width: 100%;
`;

const ToUserNameStyled = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
`;

const MessengerInputStyled = styled(Input)`
  background-color: transparent;
  width: 100px;
  margin-bottom: 0;
  border: none;
  height: 42px;
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
    background: none;
  }
  flex-grow: 1;
`;

const MessengerSendStyled = styled(Button)`
  background-color: transparent;
  border: none;
  margin-bottom: 0;
  box-shadow: none;
  &:focus, &:active, &:hover {
    outline: none;
    border: none;
    box-shadow: none;
    color: initial;
    background: none;
  }
  &:after {
    content: none;
  }
`;

const MessengerFormStyled = styled(Row)`
  background-color: ${(props) => props.theme.colors.porcelain};
  border: 1px solid ${(props) => props.theme.colors.mercury};
  border-radius: 5px;
  align-items: center;
`;

const SendOutlinedStyled = styled(SendOutlined)`
  color: ${(props) => props.theme.colors.dustyGray};
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
    color: initial;
  }
`;

const SearchStyled = styled(Row)`
  padding: 2rem;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  flex-wrap: nowrap;
  //flex-shrink: 1;
`;

const UserItemsStyled = styled(Col)`
  height: 100%;
  overflow-y: auto;
`;

const LeftStyled = styled(Row)`
  width: 300px;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.mercury};
`;

const RightStyled = styled(Row)`
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
  flex-grow: 10;
  flex-shrink: 1;
  flex-wrap: nowrap;
  flex-direction: column;
  width: calc(100% - 320px);
`;

const MessengerStyled = styled(Row)`
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

const ActiveChatWrapperStyled = styled(Row)`
  height: 100%;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.mercury};
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px 29px;
`;

const ActiveChatInnerStyled = styled.div`
  width: 100%;
`;

const ActiveChatStyled = styled(Row)`
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;
  overflow: auto;
`;

const BubbleStyled = styled.div`
  max-width: 90%;
  background-color: ${(props) => (props.me ? props.theme.colors.dodgerBlue : props.theme.colors.porcelain)};
  align-self: ${(props) => (props.me ? 'flex-end' : 'flex-start')};
  color: ${(props) => (props.me ? props.theme.colors.white : props.theme.colors.black)};
  border-radius: ${(props) => {
    if (props.me) {
      switch (props.type) {
      case 'first':
        return '10px 10px 0px 10px';
      case 'middle':
        return '10px 0 0 10px';
      case 'last':
        return '10px 0 10px 10px';
      default:
        return '10px';
      }
    } else {
      switch (props.type) {
      case 'first':
        return '10px 10px 10px 0';
      case 'middle':
        return '0 10px 10px 0';
      case 'last':
        return '0 10px 10px 10px';
      default:
        return '10px';
      }
    }
  }};
  font-size: 1.2rem;
  margin-bottom: 4px;
  padding: 13px 14px;
  word-break: break-all;
`;

const MessengerFormWrapperStyled = styled.div`
  flex: 1 0 auto; 
  padding: 0 29px 10px;
`;

export {
  UserItemStyled,
  UserNameStyled,
  UserDescriptionWrapperStyled,
  UserAvatarStyled,
  LastMessageStyled,
  UserSearchStyled,
  UserSearchButtonStyled,
  MessengerHeaderStyled,
  ToUserNameStyled,
  MessengerInputStyled,
  MessengerSendStyled,
  MessengerFormStyled,
  ActiveChatInnerStyled,
  UserSearchWrapperStyled,
  SendOutlinedStyled,
  SearchStyled,
  UserItemsStyled,
  LeftStyled,
  RightStyled,
  MessengerStyled,
  ActiveChatWrapperStyled,
  ActiveChatStyled,
  BubbleStyled,
  MessengerFormWrapperStyled,
  LastMessageTimeStyled,
};
