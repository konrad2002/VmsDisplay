export interface ServingLinesListEntryModel {
  mode: ServingLinesLineModel
}

export interface ServingLinesLineModel {
  name: string;
  number: number;
  product: string;
  destination: string;
  destId: number;
}
