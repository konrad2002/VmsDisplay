import {ServingLinesListEntryModel} from "./serving-lines-line.model";
import {DepartureListEntryModel} from "./departure-list-entry.model";

export interface TimeTableModel {
  servingLines: {
    lines: ServingLinesListEntryModel[];
  }
  departureList: DepartureListEntryModel[];
}
