import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlurService {

  constructor() { }

  public blurSiblings() {
    const parents = document.querySelectorAll('.parent');
    parents.forEach((parent) => {
      const siblings = parent.querySelectorAll('.child');
      siblings.forEach((sibling) => {
        sibling.classList.add('blur')
      })
    })
  }

  public clearSiblings() {
    const parents = document.querySelectorAll('.parent');
    parents.forEach((parent) => {
      const siblings = parent.querySelectorAll('.child');
      siblings.forEach((sibling) => {
        sibling.classList.remove('blur')
      })
    })
  }
}
