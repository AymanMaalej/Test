import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  value = 'test2';
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.value = '';
  }
}
