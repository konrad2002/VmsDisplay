import {Component, OnInit} from '@angular/core';
import {TimeTableModel} from "../../model/time-table.model";
import {VmsService} from "../../service/vms.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-time-table',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.scss'
})
export class TimeTableComponent implements OnInit {
  public timeTable?: TimeTableModel


  constructor(
    private vmsService: VmsService
  ) {
  }

  ngOnInit() {
    this.fetchData();

    setInterval(() => {
      this.fetchData();
    }, 5000);

  }

  fetchData() {
    this.vmsService.getTimeTable("Robert-Siewert-Str%252C+Chemnitz", "36030050").subscribe(data => {
      this.timeTable = data
    })
  }
}
