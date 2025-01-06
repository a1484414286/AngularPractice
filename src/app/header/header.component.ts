import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titleVariable : String = "this loaded dynamically";
  isDisabled : boolean = true;
  isActive : boolean = false;

  fruitName : String = "apple"

  handleToggle()
  {
    this.isActive = !this.isActive
  }

  buttonClick()
  {
    console.log("button is clicked")
  }

  keyEnter(event : object)
  {
    const keyEvent = event as KeyboardEvent
    console.log(keyEvent)
  } 
}
