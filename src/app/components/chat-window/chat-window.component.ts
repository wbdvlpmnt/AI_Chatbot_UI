import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatbotService } from 'src/app/services/chatbot.service';
import { message } from 'src/app/types';

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
  ];

  constructor(private chatbotService: ChatbotService) {}

  send() {
    const message: message = {
      messageType: 'user',
      messageContent: this.chatMessageControl.value
        ? this.chatMessageControl.value
        : '',
    };
    this.messages.push(message);
    this.chatMessageControl.reset();
    this.chatbotService.sendPrompt(message).subscribe((res: message) => {
      this.messages.push(res);
    });
  }
}
