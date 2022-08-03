import { ActiveChatStyled, BubbleStyled } from 'components/messenger/Messenger.styled';

const messages = [
  {
    from: 'id1',
    to: 'id2',
    text: 'Barev',
  },
  {
    from: 'id2',
    to: 'id1',
    text: 'Barev',
  },
  {
    from: 'id1',
    to: 'id2',
    text: 'Inch ka?',
  },
  {
    from: 'id1',
    to: 'id2',
    text: 'Vonc es',
  },
  {
    from: 'id1',
    to: 'id2',
    text: '?',
  },
  {
    from: 'id2',
    to: 'id1',
    text: 'Lav du asa',
  },
];

const ActiveChat = () => {
  // test
  const id = 'id1';
  return (
    messages.length && (
      <ActiveChatStyled>
        {
          messages.map((message) => (
            <BubbleStyled me={id === message.from}>{ message.text }</BubbleStyled>
          ))
        }
      </ActiveChatStyled>
    )
  );
};

export { ActiveChat };
