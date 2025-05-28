import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebSocketService } from './servi/websockets';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messages: any[] = [];
  text: string = '';
  private messageSubscription?: Subscription;

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.messageSubscription = this.webSocketService.getMessages().subscribe(message => {
      console.log('Received message:', message);
      this.messages.push(message);
      
    });
  }

  sendMessage() {
    if (!this.text.trim()) {
      return;
    }
    const message = this.text;
    this.webSocketService.sendMessage({message:message});
    this.text = '';
  }

  ngOnDestroy() {
    this.messageSubscription?.unsubscribe();
    this.webSocketService.closeConnection();
  }
}
