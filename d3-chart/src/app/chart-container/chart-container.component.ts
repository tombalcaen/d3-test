import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit {

  data: Array<object> = [];
  chartColor: Array<string> = ['orange', 'lightblue', 'lightgreen',"olive"];
  chartLegend: {x: 'chapters', y: 'conformity'};
  chartDimensions: {width: 1200, height: 350};

  constructor() { }

  ngOnInit() {
    this.data = [
      {key: 'conformity', values : [
        {label: 'hoofdstuk 1', value: 40},
        {label: 'hoofdstuk 2', value: 30},
        {label: 'hoofdstuk 3', value: 20},
        {label: 'hoofdstuk 4', value: 10},
        {label: 'hoofdstuk 5', value: 10},
        {label: 'hoofdstuk 6', value: 10},
        {label: 'hoofdstuk 7', value: 10},
        {label: 'hoofdstuk 8', value: 10},
      ]},
      {key: 'non-conformity', values : [
        {label: 'hoofdstuk 1', value: 5},
        {label: 'hoofdstuk 2', value: 10},
        {label: 'hoofdstuk 3', value: 15},
        {label: 'hoofdstuk 4', value: 20},
        {label: 'hoofdstuk 5', value: 10},
        {label: 'hoofdstuk 6', value: 10},
        {label: 'hoofdstuk 7', value: 10},
        {label: 'hoofdstuk 8', value: 10},
      ]},
      {key: 'non-conformity', values : [
        {label: 'hoofdstuk 1', value: 20},
        {label: 'hoofdstuk 2', value: 20},
        {label: 'hoofdstuk 3', value: 20},
        {label: 'hoofdstuk 4', value: 20},
        {label: 'hoofdstuk 5', value: 10},
        {label: 'hoofdstuk 6', value: 10},
        {label: 'hoofdstuk 7', value: 10},
        {label: 'hoofdstuk 8', value: 10},
      ]},
      {key: 'non-conformity', values : [
        {label: 'hoofdstuk 1', value: 4},
        {label: 'hoofdstuk 2', value: 5},
        {label: 'hoofdstuk 3', value: 6},
        {label: 'hoofdstuk 4', value: 7},
        {label: 'hoofdstuk 5', value: 10},
        {label: 'hoofdstuk 6', value: 10},
        {label: 'hoofdstuk 7', value: 10},
        {label: 'hoofdstuk 8', value: 10},
      ]},
      {key: 'not-filled', values : [
        {label: 'hoofdstuk 1', value: 100 - 5 - 40 - 20 - 4},
        {label: 'hoofdstuk 2', value: 100 - 10 - 30 - 20 - 5},
        {label: 'hoofdstuk 3', value: 100 - 15 - 20 - 20 - 6},
        {label: 'hoofdstuk 4', value: 100 - 20 - 10 - 20 - 7},
        {label: 'hoofdstuk 5', value: 100 - 10 - 10 - 10 - 10},
        {label: 'hoofdstuk 6', value: 100 - 10 - 10 - 10 - 10},
        {label: 'hoofdstuk 7', value: 100 - 10 - 10 - 10 - 10},
        {label: 'hoofdstuk 8', value: 100 - 10 - 10 - 10 - 10},
      ]},
    ]
  }

}
