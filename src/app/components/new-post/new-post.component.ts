import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  buttonFunction = "opacity-50 cursor-not-allowed"
  textColorClass = ""
  tweetMessage: string = ""
  tweetMaxLenght: number = 280
  tweetRemain: number = this.tweetMaxLenght

  

  changeTweet() {
    this.tweetRemain = 280 - this.tweetMessage.trim().length;
    if (this.tweetRemain >= 0) {
      this.textColorClass = 'text-gray-800'
      this.buttonClick()
    } else {
      this.textColorClass = 'text-red-500'
      this.buttonClick()
    }
  }

  sendTweet() {
    if (this.tweetRemain >= 0 && this.tweetRemain <= 279 ){
      alert("Seu Tweet foi enviado!")
    }
  }

  buttonClick() {
    if (this.tweetRemain == 280 || this.tweetRemain < 0)  {
      this.buttonFunction = 'opacity-50 cursor-not-allowed';
    } else {
      this.buttonFunction = 'hover:bg-blue-700';
    }
  }

}
