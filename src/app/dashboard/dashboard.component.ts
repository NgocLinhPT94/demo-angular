import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() title = '';
  @Output() reset: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doReset() {
    this.reset.emit();
  }

}
