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

  // Метод створення графіку
  lineChartMethod() {
    // Якщо графік існує, то видаляємо його
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    // Створюємо новий графік з наступними параметрами
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      // Тип - лінійний графік
      type: 'line',
      // Основні дані
      data: {
        // Значення на осі X
        labels: this.xx,
        // Властивості datasets
        datasets: [
          {
            // Підпис графіку
            label: 'Графік функції',
            // Налаштування для виведення
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
          }
        ]
      }
    });
  }

  graphras(xn: any, xk: any, h: any) {
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);
    let x: number;
    x = this.xn;
    this.xx = new Array();
    this.yy= new Array();

    while (x <= this.xk){
      this.xx.push(x.toFixed(2));
      this.yy.push(parseFloat(this.xySeries.get(x)));
      x = x + this.h;
    }
  
    this.lineChartMethod();
  }
  

  getResultAndGraph(xn: any, xk: any, h: any) {
    this.result(xn, xk, h);
    this.graphras(xn, xk, h);
  }
  

  ngOnInit() {
  }

}
