import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatbotService } from 'src/app/services/chatbot.service';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent {
  chatMessageControl = new FormControl('');

  messages: Message[] = [
    {
      messageType: 'system',
      messageContent: 'How may I help you today?',
    },
  ];

  constructor(private chatbotService: ChatbotService) {}

  send() {
    const message: Message = {
      messageType: 'user',
      messageContent: this.chatMessageControl.value
        ? this.chatMessageControl.value
        : '',
    };
    this.messages.push(message);
    this.chatMessageControl.reset();
    this.chatbotService.sendPrompt(message).subscribe((res: Message) => {
      this.messages.push(res);
    });
  }
}
