import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as d3 from 'd3';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { format } from 'url';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() data;
  @Input() chartColor;
  @Input() chartLegend;
  @Input() chartDimensions;

  chartWidth = 1200;
  chartHeight = 350;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  ngOnChanges() {
    this.createChart();
  }

  getChapters() {
    return this.data[0].values.map(hoofdstuk => {
      return hoofdstuk.label
    });
  }

  createChart() {

    const margin = {top: 20, right: 20, bottom: 20, left: 10}

    const width = this.chartWidth - margin.left - margin.right;
    const height = this.chartHeight - margin.top - margin.bottom;

    const svg = d3.select('#chart')
                .append('svg')
                .attr('width', '100%')
                .attr('height', height + 100)
                .append('g')
                .attr('transform', 'translate(50,30)');

    const x = d3.scaleBand()
          .range([0, 900])
          .domain(this.getChapters())
          .padding(0.8); // ['A','b','c']

    const y = d3.scaleLinear()
          .range([0, height])
          .domain([100, 0])

    const xAxis = d3.axisBottom(x);

    const yAxis = d3.axisLeft(y);

    const tooltip = d3.select('#chart')
                    .append('div')
                    .attr('class', 'toolTip')
                    .style('position', 'absolute')
                    .style('min-width', '80px')
                    .style('height', 'auto')
                    .style('background', 'none repeat scroll 0 0 #fff')
                    .style('border', '1px solid #6F257F');

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

    svg.append('g')
        .call(yAxis);

    for ( const bars in this.data) {
      if (bars) {
        svg.selectAll('bar')
          .data(this.data[bars].values)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', (d) => {
            return x(d.label);
          })
          .attr('width', x.bandwidth())
          .attr('height', (d) => height - y(d.value))
          .attr('y', (d, i) => {
            let barPreviousHeight = 0;
            if ( +bars > 0 ) {
              for (let a = 0; a < +bars; a++) {
                barPreviousHeight += this.data[a].values[i].value;
              }
            }
            return y(d.value + barPreviousHeight);
          })
          .style('fill', this.chartColor[bars])
          .on('mousemove', (d) => {
            tooltip
              .style('left', d3.event.pageX - 350 + 'px')
              .style('top', d3.event.pageY - 70 + 'px')
              .style('display', 'inline-block')
              .html((d.value) + ' ' + d3.event.pageX + '<br> yes')
          })
          .on('mouseout', (d) => tooltip.style('display', 'none'));;
        }
    }

    // svg.selectAll('bar')
    //     .data(this.data[0].values)
    //     .enter()
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (d) => {
    //       console.log(d.label)
    //       return x(d.label);
    //     })
    //     .attr('width', x.bandwidth())
    //     .attr('height', (d) => height - y(d.value))
    //     .attr('y', (d) => y(d.value))
    //     .style('fill', this.chartColor[0])
        // .on('mousemove', (d) => {
        //   // d3.select(this).attr('fill', 'limegreen')
        //   tooltip
        //     .style('left', d3.event.pageX - 350 + 'px')
        //     .style('top', d3.event.pageY - 70 + 'px')
        //     .style('display', 'inline-block')
        //     .html((d.value) + ' ' + d3.event.pageX + '<br> yes')
        // })
        // .on('mouseout', (d) => tooltip.style('display', 'none'));

    // svg.selectAll('bar')
    //     .data(this.data[1].values)
    //     .enter()
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (d) => x(d.label))
    //     .attr('width', x.bandwidth())
    //     .attr('height', (d) => height - y(d.value))
    //     .attr('y', (d, i) => y(d.value + this.data[0].values[i].value))
    //     .style('fill', this.chartColor[1])
    //     .on('mousemove', (d) => {
    //       // d3.select(this).attr('fill', 'limegreen')
    //       tooltip
    //         .style('left', d3.event.pageX - 350 + 'px')
    //         .style('top', d3.event.pageY - 70 + 'px')
    //         .style('display', 'inline-block')
    //         .html((d.value) + ' ' + d3.event.pageX + '<br> yes')
    //     })
    //     .on('mouseout', (d) => tooltip.style('display', 'none'));

    // svg.selectAll('bar')
    //     .data(this.data[2].values)
    //     .enter()
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr('x', (d) => x(d.label))
    //     .attr('width', x.bandwidth())
    //     .attr('height', (d) => height - y(d.value))
    //     .attr('y', (d, i) => y(d.value + this.data[0].values[i].value + this.data[1].values[i].value))
    //     .style('fill', this.chartColor[2])
    //     .on('mousemove', (d) => {
    //       // d3.select(this).attr('fill', 'limegreen')
    //       tooltip
    //         .style('left', d3.event.pageX - 350 + 'px')
    //         .style('top', d3.event.pageY - 70 + 'px')
    //         .style('display', 'inline-block')
    //         .html((d.value) + ' ' + d3.event.pageX + '<br> yes')
    //     })
    //     .on('mouseout', (d) => tooltip.style('display', 'none'))

  }

}
