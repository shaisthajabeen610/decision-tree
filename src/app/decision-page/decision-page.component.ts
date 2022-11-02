import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-decision-page',
    templateUrl: './decision-page.component.html',
    styleUrls: ['./decision-page.component.css']
})
export class DecisionPageComponent implements OnInit {
    
    constructor(public http: HttpClient,
        public routes: Router,
       ) { 
           
        }
        onclick(){
            this.routes.navigate(['pricing'])
        }

    ngOnInit(): void {
        
        
    
        this.extractData();

        const data = Highcharts.chart('container1', {
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
                        enabled: false
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
                name: 'Ready',
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

        const barcharts = Highcharts.chart('container2', {
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
                        enabled: false
                    }
                }
            },

            credits: {
                enabled: false
            },
            series: [{
                name: 'Ready',
                type: 'bar',
                data: [1, 5, 7],
            },

            ]
        });

    }
    extractData() {
        this.http.get('https://azsk2.blob.core.windows.net/azsk/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-07-05T23:05:18Z&st=2022-11-01T15:05:18Z&spr=https,http&sig=tHvgJMBEuvRnplizTGovO1Cx5dkHbl7ogpC0EAm8Xvw%3D/test.csv', { responseType: 'text' })
            .subscribe((data: any) => { console.log("data from azure ", data) })
    }
}