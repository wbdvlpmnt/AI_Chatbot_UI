import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  chatMessageControl = new FormControl('');

  messages: message[] = [
    {
      messageType: 'system',
      messageContent: 'How may I help you today?',
    },
    {
      messageType: 'user',
      messageContent: 'what is the larget mountain?',
    },
    {
      messageType: 'system',
      messageContent: 'The largest mountain is Mount Everest',
    },
  ];

  send() {
    const message: message = {
      messageType: 'user',
      messageContent: this.chatMessageControl.value
        ? this.chatMessageControl.value
        : '',
    };
    this.messages.push(message);
    this.chatMessageControl.reset();
    console.log(message);
  }
}
