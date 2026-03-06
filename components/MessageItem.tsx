import { UIMessage } from 'ai';

interface MessageItemProps {
  message: UIMessage;
}

export default function MessageItem({ message }: MessageItemProps) {
  return (
    <div
      className={`message-wrapper ${message.role === 'user' ? 'user' : 'ai'}`}
    >
      <div className={`message ${message.role === 'user' ? 'user' : 'ai'}`}>
        <span className="message-role">
          {message.role === 'user' ? 'You' : 'AI'}
        </span>
        {message.parts.map((part, i) => {
          if (part.type === 'text') {
            return <span key={i}>{part.text}</span>;
          }
          return null;
        })}
      </div>
    </div>
  );
}
