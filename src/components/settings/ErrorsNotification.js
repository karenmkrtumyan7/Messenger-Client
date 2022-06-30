import { notification } from 'antd';
import { useEffect } from 'react';

export function ErrorsNotification(props) {
  const { messages, component, resetFailure } = props;

  useEffect(() => {
    if (messages.length) {
      messages.forEach((message) => {
        notification.error({
          description: message,
          placement: 'bottomLeft',
          duration: 3,
        });
      }, [messages]);
      resetFailure();
    }

    return () => {
      if (!messages.length) {
        notification.destroy();
      }
    };
  });

  return component;
}
