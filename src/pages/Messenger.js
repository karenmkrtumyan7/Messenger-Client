import UserItem from 'components/messenger/UserItem';
import { UserSearch } from 'components/messenger/UserSearch';
import {
  Button, Col, Form, Input, Row,
} from 'antd';
import styled from 'styled-components';
import { To } from 'components/messenger/To';
import { SendOutlined } from '@ant-design/icons';

const SearchStyled = styled(Col)`
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`;

const UserItemsStyled = styled(Col)`
  overflow-y: auto;
`;

const LeftStyled = styled(Row)`
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.mercury};
`;

const RightStyled = styled(Row)`
  background-color: ${(props) => props.theme.colors.white};
  flex-grow: 1;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const MessengerStyled = styled(Row)`
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

const ActiveChatWrapperStyled = styled(Row)`
  height: 100%;
  flex-direction: column;
  padding: 20px 35px 20px;
  border-top: 1px solid ${(props) => props.theme.colors.mercury};
  width: 100%;
  flex-grow: 1;

`;

const ActiveChatStyled = styled(Col)`
  flex-grow: 1;
  flex-shrink: 1;
`;

const ChatInputStyled = styled(Input)`
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

const ChatSendStyled = styled(Button)`
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

const ChatTypeStyled = styled(Row)`
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

const Messenger = () => (
  <MessengerStyled>
    <LeftStyled>
      <SearchStyled>
        <UserSearch />
      </SearchStyled>
      <UserItemsStyled>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </UserItemsStyled>
    </LeftStyled>
    <RightStyled>
      <To />
      <ActiveChatWrapperStyled>
        <ActiveChatStyled>asdasd</ActiveChatStyled>
        <Col>
          <Form>
            <ChatTypeStyled>
              <ChatInputStyled />
              <ChatSendStyled icon={<SendOutlinedStyled />} />
            </ChatTypeStyled>
          </Form>
        </Col>
      </ActiveChatWrapperStyled>
    </RightStyled>
  </MessengerStyled>
);

export { Messenger };
