import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.value = '';
  }
}
