import {ServingLinesListEntryModel} from "./serving-lines-line.model";
import {DepartureListEntryModel} from "./departure-list-entry.model";

export interface TimeTableModel {
  dm: {
    input: {
      input: string;
    }
  }
  servingLines: {
    lines: ServingLinesListEntryModel[];
  }
  departureList: DepartureListEntryModel[];
}
