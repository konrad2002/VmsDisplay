import {VmsTimeModel} from "./vms-time.model";
import {ServingDepartureLineModel} from "./serving-departure-line.model";

export interface DepartureListEntryModel {
  stopId: number;
  countdown: number;
  dateTime: VmsTimeModel;
  realDateTime: VmsTimeModel;
  servingLine: ServingDepartureLineModel
}
