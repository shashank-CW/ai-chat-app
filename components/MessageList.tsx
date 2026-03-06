import { UIMessage } from 'ai';
import { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';

interface MessageListProps {
  messages: UIMessage[];
}

export default function MessageList({ messages }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages-container">
      {messages.map((m) => (
        <MessageItem key={m.id} message={m} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
