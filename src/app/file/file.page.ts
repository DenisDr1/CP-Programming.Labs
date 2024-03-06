import { Component, OnInit, Input } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any = [];
  data_newspapers: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/6559dca554105e766fd22630';
  loading: any;
  lenght: number = 0; 

  constructor(public loadingController:LoadingController) {
  }
  async load() {
    this.loading = await this.loadingController.create ({
        spinner: "bubbles",
        message: 'Loading...'
    });
    await this.loading.present();
    this.data_newspapers = [];
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        while (this.data[i] != undefined) {
          this.data_newspapers.push(this.data[i][0]);
          i++;
          this.lenght++;
        }
        this.loading.dismiss();
      });
  }

  toggleDetails(i: number) {
    if(this.showDetails[i]) {
      this.showDetails[i] = false;
    }
    else {
      this.showDetails[i] = true;
    }
  }

  findNewsPapers() {
    let selectedDate = (document.getElementById('date') as HTMLInputElement).value;
    let dateObj = new Date(selectedDate);
    let month: number = dateObj.getMonth() + 1;
    for (let i = 0; i < this.lenght; i++) {
      let publishedInObj = new Date(this.data_newspapers[i]['publishedIn']);
      let publishedInMonth: number = publishedInObj.getMonth() + 1;
      if (month == publishedInMonth) {
        console.log(this.data_newspapers[i]["name"]);
        this.data_newspapers[i].highlight = true;
      }
      else {
        this.data_newspapers[i].highlight = false;
      }
    }
  }

  ngOnInit() {
  }
}
