import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modify-button',
  templateUrl: './modify-button.component.html',
  styleUrls: ['./modify-button.component.css']
})
export class ModifyButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  // onClick() {
  //   console.log("clicked")
  // }

  onClick() {
    this.btnClick.emit();
  }

}
