import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: MessagesService){}

  clear(){
    this.service.clearMessages()
    location.reload()
  }

  dropdownOpen = false;

  toggleDropdown(){
    this.dropdownOpen = !this.dropdownOpen;
  }


}
