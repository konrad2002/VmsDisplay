import {Component, OnInit} from '@angular/core';
import {TimeTableModel} from "../../model/time-table.model";
import {VmsService} from "../../service/vms.service";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

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
  public stationName: string = "Robert-Siewert-Str%252C+Chemnitz";
  public stationId: string = "36030050";

  constructor(
    private vmsService: VmsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let name =  this.route.snapshot.queryParamMap.get('stopName');
    let nameInfo =  this.route.snapshot.queryParamMap.get('stopId');

    if (name) this.stationName = name;
    if (nameInfo) this.stationId = nameInfo;

    this.fetchData();

    setInterval(() => {
      this.fetchData();
    }, 5000);

  }

  fetchData() {
    this.vmsService.getTimeTable(this.stationId).subscribe(data => {
      this.timeTable = data
    })
  }
}
