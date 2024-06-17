import {Routes} from '@angular/router';
import {TimeTableComponent} from "./components/time-table/time-table.component";

export const routes: Routes = [
  {path: '', component: TimeTableComponent, pathMatch: "full"},
];
