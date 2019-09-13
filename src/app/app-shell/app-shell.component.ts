import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  trackByTitle(index: number, item: any): number { return item.title; }
  trackByVal(index: number, item: any): number { return item.val; }

  get distributeds() {
    return [
      {
        title: '萬',
        list: [
          {name: '大', val: this.dataService.distributed.get('1:OVER')},
          {name: '小', val: this.dataService.distributed.get('1:UNDER')}
        ]
      },
      {
        title: '千',
        list: [
          {name: '大', val: this.dataService.distributed.get('2:OVER')},
          {name: '小', val: this.dataService.distributed.get('2:UNDER')}
        ]
      },
    ];
  }
}
