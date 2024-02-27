import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  // Поле для створення графіку
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef; // Отримання доступу до елемента з індент. lineCanvas
  lineChart: any;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;
  a: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = []
  constructor() { Chart.register(...registerables); }
  ngOnInit() {
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
            spanGaps: false,
          }
        ]
      }
    });
  }
  graphras(xn: any, xk: any, a: any, h: any) {
    try{
      this.data1 = [];
      this.xn = parseFloat(xn);
      this.xk = parseFloat(xk);
      this.a = parseFloat(a);
      this.h = parseFloat(h);
      
      let x: number, y: number, i: number = 0;
      x = this.xn;
      this.xx = new Array();
      this.yy = new Array();
      
      if((isNaN(this.xn) == true) || (isNaN(this.xk) == true) || (isNaN(this.a) == true) || (isNaN(this.h) == true))
        throw new Error('Parameter is not a number!');
      
      while (x < this.xk) {
        if (x <= 0) {
          y = Math.pow(Math.abs(5), Math.sin(x) + 2) + Math.sin(x);
        }
        else
          if (x <= this.a) {
            y = Math.pow(x, 3) + Math.pow((Math.abs(x) + 1), 0.1*x);
          }
          else {
            y = (Math.pow((Math.sin(x + 2)), 3)) / (Math.pow(Math.sin(x) * Math.sin(x) + Math.pow(Math.cos(x), 4), 1/4));
          }
          this.xx.push(x.toFixed(1));
        this.yy.push(parseFloat(y.toFixed(1)));
        let s = "x= " + x.toFixed(1) + " y=" + y.toFixed(1);
        this.data1.push(s);
        x = x + this.h;
      }
      this.lineChartMethod();
    }
    catch (error) {
      console.log(error);
    }
  }
}
