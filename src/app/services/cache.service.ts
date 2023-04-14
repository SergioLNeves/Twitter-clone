import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private localStorage = window.localStorage;

  constructor() { }

  set(key: string, value: any){
    this.localStorage.setItem(key,JSON.stringify(value))
  }

get(key:string) {
  const value = this.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

  remove(key: string) {
    this.localStorage.removeItem(key);
  }

  clear(){
    this.localStorage.clear();
  }


}
