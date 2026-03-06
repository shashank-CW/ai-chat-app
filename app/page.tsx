'use client';

import { useChat } from '@ai-sdk/react';
import ChatHeader from '@/components/ChatHeader';
import MessageList from '@/components/MessageList';
import ChatInput from '@/components/ChatInput';

export default function Chat() {
  const { messages, sendMessage } = useChat();

  const handleSendMessage = (text: string) => {
    sendMessage({ text });
  };

  return (
    <main>
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </main>
  );
}
