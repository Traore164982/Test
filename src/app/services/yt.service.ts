import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YtService {
  apiKey="AIzaSyAnPVTUippwh2LGGj-EasknroEanGiwIf4";
  constructor(private http: HttpClient) { }

}
