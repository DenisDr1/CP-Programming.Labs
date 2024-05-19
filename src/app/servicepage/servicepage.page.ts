import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TabService } from './service/tab/tab.service';
import { SeriesService } from './service/series/series.service';
import { RecursionService } from './service/recursion/recursion.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  yy1: number[] = [];
  yy2: number[] = [];
  yy3: number[] = [];
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  constructor(private tabService: TabService,  private seriesService: SeriesService, private recursionService: RecursionService) 
  { Chart.register(...registerables); }

  result(xn: any = 0.1, xk: any = 3.1, h:any = 0.1) {
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabService.getTab(this.xn, this.xk, this.h);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(this.xn, this.xk, this.h);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(this.xn, this.xk, this.h);
    this.input();
  }

  input() {
    this.xyTab.forEach((value, key, map)=>{
      let s=' ';
      let y:number = 0;
      y=value;
      s=y.toFixed(4)+" --- ";
      y=this.xySeries.get(key);
      s=s+y.toFixed(4)+" --- ";
      y=this.xyRecursion.get(key);
      s=s+y.toFixed(4)+" --- ";
      let x = key;
      this.xyInput.set(x.toFixed(2),s);
    })
  }
  
  getResultAndGraph(xn: any, xk: any, h: any) {
    this.result(xn, xk, h);
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);

    const tabData = this.tabService.getTab(this.xn, this.xk, this.h);
    const seriesData = this.seriesService.getTab(this.xn, this.xk, this.h);
    const recursionData = this.recursionService.getTab(this.xn, this.xk, this.h);

    this.xx = Array.from(tabData.keys()).map(x => x.toFixed(2));
    this.yy1 = Array.from(tabData.values());
    this.yy2 = Array.from(seriesData.values());
    this.yy3 = Array.from(recursionData.values());

    this.lineChartMethod();
  }

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Функція',
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy1,
          },
          {
            label: 'Ряд циклічно',
            fill: false,
            backgroundColor: 'rgba(255,99,132,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy2,
          },
          {
            label: 'Ряд рекурсивно',
            fill: false,
            backgroundColor: 'rgba(255,206,86,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy3,
          }
        ]
      }
    });
  }
  

  ngOnInit() {
  }

}
