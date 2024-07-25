import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8000/chatbot';

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  sendPrompt(message: Message): Observable<any> {
    return this.http.post<any>(this.url, message, this.httpOptions);
  }
}
