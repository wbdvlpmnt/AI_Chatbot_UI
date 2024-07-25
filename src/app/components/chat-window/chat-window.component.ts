import { Component } from '@angular/core';

type message = {
  messageType: 'system' | 'user';
  messageContent: string;
};

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent {
  messages: message[] = [
    {
      messageType: 'system',
      messageContent: 'How may I help you today?',
    },
    {
      messageType: 'user',
      messageContent: 'what is the larget mountain?',
    },
  ];
}
