import { Component } from '@angular/core';
import {ApiCallService } from './api-call.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boxigo';;
  completeData: any = {}
  status = []
  rooms = []
  show = []

  constructor(private apiservice: ApiCallService ) {
    this.apiservice.get()
    .subscribe((data: any) => {
      console.log(data)
      this.completeData =  data.Customer_Estimate_Flow;
      for(let i = 0; i < this.completeData.length; i++) {
        this.rooms.push(this.completeData[i].items.rooms)
        this.show.push(false)
        if(this.completeData[i].status === "8") {
          this.status.push("Transt")
        } else if (this.completeData[i].status === "4") {
          this.status.push("Completed")
        } else {
          this.status.push("Not Completed")
        }
      }
    })
    
  }

  getKeys(obj){
    return Object.keys(obj)
  }

  getValues(obj) {
    return Object.values(obj)
  }

  showDetails (index) {
    this.show[index] = true
  }

  hideDetails (index) {
    this.show[index] = false
  }

}