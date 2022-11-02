import { Options } from "highcharts";

export const barcharts: Options = {
    chart:{
        type:'bar'
    },
    credits:{
        enabled:false
    },
    title:{
        text:'Bar'
    },
    yAxis:{
        visible:false
    },
    legend:{
        enabled:false
    },
    xAxis:{
        lineColor: '#fff',
        categories:[
            'Azure App Service',
            'Azure Containerize',
            'Virtual Machine',

        ]
    },
    plotOptions:{
        series:{
            borderRadius : 5
        }as any
    },
    series:[
        {
            type: 'bar',
            color: '#506ef',
            data: [
                {}
            ]
        }
    ] 

    
    

}