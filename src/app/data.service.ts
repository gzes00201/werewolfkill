import { Injectable } from '@angular/core';

var mockData = {
  '1:OVER': 52,
  '1:UNDER': 48,
  '2:OVER': 51,
  '2:UNDER': 49,
  '3:OVER': 55,
  '3:UNDER': 45,
};

function objectToMap(obj) {
  const map = new Map();

  Object.keys(obj).forEach(key => {
    map.set(key, obj[key]);
  });

  return map;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  distributed = objectToMap(mockData);
  data = []
  constructor() {
    console.log(this.distributed)
    setInterval(() => {
      this.data.push(1);
      mockData = {
        '1:OVER': mockData['1:OVER'] + 1,
        '1:UNDER': mockData['1:UNDER'] - 1,
        '2:OVER': mockData['2:OVER'] ,
        '2:UNDER': mockData['2:UNDER'] ,
        '3:OVER': mockData['3:OVER'] ,
        '3:UNDER': mockData['3:UNDER'] ,
      };
      this.distributed = objectToMap(mockData);
    }, 1000);
  }
}
