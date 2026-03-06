import { Send } from 'lucide-react';
import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        value={input}
        placeholder="Type your message..."
        onChange={handleInputChange}
        className="chat-input"
      />
      <button type="submit" className="send-button">
        <span>Send</span>
        <Send size={16} strokeWidth={2.5} />
      </button>
    </form>
  );
}
