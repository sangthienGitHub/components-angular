import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why Chipotle restaurant is usually packed with people',
      content: 'Because its food taste good',
    },
    {
      title: 'What does a lemon taste like?',
      content: 'lemon tastes like citrus',
    },
    { title: 'What kind of food a dog like?', content: 'Maybe dog food :)' },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
