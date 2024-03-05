import { Component, OnInit } from '@angular/core';
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
        console.log(this.data);
        while (this.data[i] != undefined) {
          this.data_newspapers.push(this.data[i][0]);
          i++;
        }
        this.findNewsPapers();
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
    let date = document.getElementById('date');
    for (let i = 0; i < this.data_newspapers.lenght; i++) {
      if (date == this.data_newspapers['publishedIn']) console.log(this.data_newspapers['name']);
    }
  }

  getGreenColor() {
    return 'green';
  }

  ngOnInit() {
  }
}
