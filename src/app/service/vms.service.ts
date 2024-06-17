import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {TimeTableModel} from "../model/time-table.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {VmsTimeModel} from "../model/vms-time.model";

@Injectable({
  providedIn: 'root'
})
export class VmsService {

  private API_URL: string = "https://efa.vvo-online.de"

  constructor(
    private http: HttpClient
  ) { }

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(url: string, path: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.get(url + path, { params, headers: headers})
      .pipe(catchError(VmsService.formatErrors));
  }

  public getTimeTable(nameInfo: string): Observable<TimeTableModel> {
    let params: HttpParams = new HttpParams();
    params = params.set("language", "de");
    params = params.set("mode", "direct");
    params = params.set("nameInfo_dm", nameInfo);
    params = params.set("type_dm", "any");
    params = params.set("outputFormat", "JSON");
    params = params.set("useRealtime", "1");

    return this.get(this.API_URL, "/VMSSL3/XSLT_DM_REQUEST", params);
  }

  public static getTimeString(time: VmsTimeModel): string {
    let hours = "0" + time.hour;
    let minutes = "0" + time.minute;
    return hours.substr(-2)+ ":" + minutes.substr(-2);
  }
}
