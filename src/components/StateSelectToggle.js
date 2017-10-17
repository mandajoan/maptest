import React from 'react';
import Data from '../data/sampledataPoints.js';
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';
import MapData from '../components/usMap';
import Highcharts from 'highcharts'
import County from '../county/sampleData';
import Button from '../components/Button'


var lines = ReactHighmaps.Highcharts.geojson(MapData, 'mapline')


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateSelect: false,
            countySelect: false,
            zctaSelect: true,
            chartConfig: {
                title: {
                    text: 'ZCTA with Metric Data'
                },

                chart: {
                    height: '600 px',
                    borderWidth: 1,
                    borderColor: 'silver',
                    borderRadius: 3,
                    shadow: true
                },
                mapNavigation: {
                    enabled: true
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    map: {
                        showInLegend: false
                    },
                    mappoint: {
                        showInLegend: false,


                    },
                    mapline: {
                        enabledMouseTracking: false,
                        showInLegend: false

                    }
                },
                series: [{
                    mapData: MapData,
                    name: 'test',
                    data: County,
                    joinBy: ['fips', 'code'],
                    animation: true,
                    tooltip: {
                        pointFormat: '<b>{point.name}</b>'
                    },
                    borderColor: 'black',
                    borderWidth: 0.2,
                    states: {
                        hover: {
                            borderWidth: 0.5
                        },
                        select: {
                            color: 'yellow'
                        }
                    },
                    allowPointSelect: true,
                    cursor: 'pointer'
                },
                {
                    type: 'mapline',
                    name: 'State borders',
                    data: lines,
                    color: 'black',
                    states: {
                        hover: {
                            borderWidth: 0.5
                        }
                    },
                    allowPointSelect: false
                },

                {
                    type: 'mappoint',
                    name: 'zcta',
                    color: Highcharts.getOptions().colors[1],
                    data: Data,
                    boostThreshold: 500,
                    visible: true


                }]
            }
        }


    }



    toggleCountySelect(evt) {
      this.setState(prevState => ({
          chartConfig: {
              ...prevState.chartConfig,
              series: [
                  ...prevState.chartConfig.series.filter((el, index) => index != 2),
                  {
                      ...prevState.chartConfig.series[2],
                      visible: !prevState.chartConfig.series[2].visible
                  }
              ]
          }
      }))
    }


    toggleStateSelect() {
        this.setState({ stateSelect: !this.state.stateSelect })
        console.log(this.state.stateSelect)
    }

    toggleZCTASelect() {
        this.setState({ zctaSelect: !this.state.zctaSelect })
        let chart = this.refs.chart.getChart();

        console.log(this.state.zctaSelect)
    }

    componentDidMount() {
        let chart = this.refs.chart.getChart();


    }
}

    render() {

        return (
            <div id="container">
                <ReactHighmaps config={this.state.chartConfig} ref="chart" />

                <Button text="County Select" onButtonClick={this.toggleCountySelect.bind(this)} />
                <Button text="State Select" onButtonClick={this.toggleStateSelect.bind(this)} />
                <Button text="ZCTA Select" onButtonClick={this.toggleZCTASelect.bind(this)} />
            </div>
        )
    }

}
export default Test;
