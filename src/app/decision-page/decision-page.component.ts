import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';

import { Router } from '@angular/router';
import { ReportDataService } from '../report-data.service';
import { ConditionalExpr } from '@angular/compiler';
let  Highcharts = require('highcharts');  
import 'Highcharts/highcharts-more';
require('highcharts/highcharts-more.js')(Highcharts);

// Load module after Highcharts is loaded

require('highcharts/modules/exporting')(Highcharts);

@Component({
    selector: 'app-decision-page',
    templateUrl: './decision-page.component.html',
    styleUrls: ['./decision-page.component.css'],
    providers: [DatePipe]
})
export class DecisionPageComponent implements OnInit {


    domain:any;
    totalPhysicalMemory:any;
    diskTotalSize:any;
    logicalProcessor:any;
    operatingSystem:any;
    systemInfo:any;
    curDate:any;
    // myDate:any;
    Highcharts = require('highcharts');  
      // Load module after Highcharts is loaded
       
    
    constructor(public http: HttpClient,
        public routes: Router,
        public  datePipe: DatePipe,
        public reportDataService : ReportDataService,
        
       ) { 
        
        }
        onclick(){
            this.routes.navigate(['pricing'])
        }

    ngOnInit(): void {
        let today = new Date();
              let dd = String(today.getDate()).padStart(2, '0');
              let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              let yyyy = today.getFullYear();

              this.curDate =  dd+"-" + mm +"-"+  yyyy;
        
        this.graphData();
    
        this.extractData();
        require('highcharts/modules/exporting')(Highcharts);

        const data = Highcharts.chart('element1', {
            chart: {
                type: 'bar'
            },
            title: {
                text: '<strong>Readiness status</strong>'
            },
            // subtitle: {
            //     text: 'sample' 

            // },
            xAxis: {
                categories: [ 'Containerization','App Service', 'Virtual Machines'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 10,
                title: {
                    text: 'percentage',
                    align: 'high'
                },
                // labels: {
                //     overflow: 'justify'
                // }
            },
            tooltip: {
                valueSuffix: ' percent'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            // legend: {
            //     layout: 'vertical',
            //     align: 'right',
            //     verticalAlign: 'top',
            //     x: -40,
            //     y: 80,
            //     floating: true,
            //     borderWidth: 1,
            //     backgroundColor:
            //          "#ff0000",
            //     shadow: true
            // },
            credits: {
                enabled: false
            },
            series: [{
                showInLegend: false,
                name: '',
                type: 'bar',
                data: [631, 727, 3202],
            },
                // {
                //     name: 'Year 2000',
                //     type: 'bar',
                //     data: [814, 841, 3714]
                // }, {
                //     name: 'Year 2010',
                //     type: 'bar',
                //     data: [1044, 944, 4170]
                // }, {
                //     name: 'Year 2018',
                //     type: 'bar',
                //     data: [1276, 1007, 4561]
                // }
            ]
        });

        const barcharts = Highcharts.chart('element2', {
            chart: {
                type: 'bar'
            },
            title: {
                text: '<strong>Migration Effort Comparision</strong>'
            },
            // subtitle: {
            //     text: 'sample' 

            // },
            xAxis: {
                categories: [ 'Cloud Central SmartOps', 'Other Tools','Lift & Shift Method'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Days',
                    align: 'high'
                },
                // labels: {
                //     overflow: 'justify'
                // }
            },
            tooltip: {
                valueSuffix: ' Days'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },

            credits: {
                enabled: false
            },
            series: [{
                showInLegend: false,
                // name: 'Ready',
                type: 'bar',
                data: [1, 5, 7],
            },

            ]
        });
       
        let info = Highcharts.chart({
          chart: {
            renderTo: 'element3',
            type: 'line'
           
        },

        title: {
          text: 'Cloud Cost Forecasting Graph'
        },
      
        subtitle: {
          text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
        },
        credits:{
          enabled: false
        },
      
        yAxis: {
          title: {
            text: 'Number of Dollars Per Month'
          }
        },
      
        xAxis: {
          accessibility: {
            rangeDescription: 'Range: 2022 to 2023'
          }
        },
      
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
      
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2022
          }
        },
      
        series: [{
          name: 'Containerization',
          data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610]
        }, {
          name: 'WebApp',
          data: [24916, 37941, 29742, 29851, 32490, 30282,
            38121, 36885, 33726, 34243, 31050]
        }, {
          name: 'Virtual Machine SKU',
          data: [11744, 30000, 16005, 19771, 20185, 24377,
            32147, 30912, 29243, 29213, 25663]
        }, {
          name: 'Operations & Maintenance',
          data: [null, null, null, null, null, null, null,
            null, 11164, 11218, 10077]
        }, {
          name: 'Other',
          data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
            17300, 13053, 11906, 10073]
        }],
      
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      
      });
      
      // Create the chart
      // Highcharts.chart('container', { /*Highcharts options*/ });
      const bubbleinfo = Highcharts.chart({
        
        chart: {
          renderTo: 'element4',
          type: 'bubble',
          plotBorderWidth: 1,
          zoomType: 'xy',
        },
       
      
        legend: {
          enabled: false
        },
      
        title: {
          text: 'Application Complexity'
        },
      
        credits:{
          enabled:false
        },
       
      
        accessibility: {
          point: {
            valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
          }
        },
      
        xAxis: {
          categories: ["Simple", "Medium", "Complex"],
          gridLineWidth: 1,
          title: {
            text: 'Complexity'
          },
          // labels: {
          //   format: '{value} gr'
          // },
          plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 65,
            label: {
              rotation: 0,
              y: 15,
              style: {
                fontStyle: 'italic'
              },
              // text: 'Safe fat intake 65g/day'
            },
            zIndex: 3
          }],
          accessibility: {
            rangeDescription: 'Range: 60 to 100 grams.'
          }
        },
      
        yAxis: {
          startOnTick: false,
          endOnTick: false,
          title: {
            text: 'Complexity'
          },
          labels: {
            format: '{value} gr'
          },
          maxPadding: 0.2,
          plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 50,
            label: {
              align: 'right',
              style: {
                fontStyle: 'italic'
              },
              text: 'Safe sugar intake 50g/day',
              x: -10
            },
            zIndex: 3
          }],
          accessibility: {
            rangeDescription: 'Range: 0 to 160 grams.'
          }
        },
      
        tooltip: {
          useHTML: true,
          headerFormat: '<table>',
          pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
            '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
            '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
          footerFormat: '</table>',
          followPointer: true
        },
      
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        },
      
        series: [{
          data: [
            // { x: 95, y: "Simple", z: 13.8, name: 'BE', country: 'Belgium' },
            // { x: 85, y: "Simple", z: 13.8, name: 'BE', country: 'Belgium' },
            // { x: 55, y: "Simple", z: 13.8, name: 'BE', country: 'Belgium' },
            { x: 55, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
            
          ]
        }]
      
      });
      const splitBubble = Highcharts.chart('element5', {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: 'Cloud Platforms'
        },
        credits:{
          enabled:false
        },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
          packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 250
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          }
        },
        series: [{
          name: 'Azure',
          data: [{
            name: 'IAAS',
            value: 767.1
          }, {
            name: 'PAAS',
            value: 20.7
          },
          {
            name: "SAAS",
            value: 97.2
          },
          ]
        }, {
          name: 'Ali Baba',
          data: [{
            name: "IAAS",
            value: 8.2
          },
          {
            name: "SAAS",
            value: 9.2
          },
          {
            name: "PAAS",
            value: 13.1
          },
          ]
        }, {
          name: 'SalesForce',
          data: [{
            name: "IAAS",
            value: 409.4
          },
          {
            name: "PAAS",
            value: 34.1
          },
          {
            name: "SAAS",
            value: 7.1
          }]
        }, {
          name: 'VmWare',
          data: [{
            name: "IAAS",
            value: 7.6
          },
          {
            name: "PAAS",
            value: 8.4
          },
          {
            name: "SAAS",
            value: 8.3
          },
          ]
        }, {
          name: 'GCP',
          data: [{
            name: "IAAS",
            value: 7.2
          },
          {
            name: "SAAS",
            value: 8.1
          },
          {
            name: "PAAS",
            value: 17.8
          }]
        }, {
          name: 'AWS',
          data: [{
            name: "IAAS",
            value: 6.5
          },
          {
            name: "PAAS",
            value: 6.5
          },
          {
            name: "SAAS",
            value: 7.4
          },
          ]
        }]
      });
    }
    extractData() {
        this.reportDataService.getDecisionTreeData().
        subscribe((data: any) => { 
            this.domain = data.Domain;
            this.totalPhysicalMemory = data.TotalPhysicalMemory;
            this.logicalProcessor = data.logicalProcessor;
            this.operatingSystem = data.os;
            this.systemInfo = data.systemInfo;


            console.log("domain", this.domain)
            
            
            
            
            console.log("data from azure ", data) })
    }
    graphData(){
     
      
    }
    }
