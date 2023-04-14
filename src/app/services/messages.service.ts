import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messages: string[] = []
  constructor(private cacheService: CacheService) { }

  addMessage(message:string) {
    this.messages.push(message);
    this.cacheService.set('messages', this.messages);
  }
  getMessages(){
    const cachedMessages = 
    this.cacheService.get('messages');
    this.messages = cachedMessages || this.messages;
    return this.messages
  }

  clearMessages(){
    this.messages = []
    this.cacheService.set('messages',this.messages);
  }
}
