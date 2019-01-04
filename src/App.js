import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import theme from 'fusioncharts/themes/fusioncharts.theme.fint';

charts(fusioncharts);
theme(fusioncharts);

//Build Data

function fetchFromGitHub(query) {
  const promises = [];
  let i = 1;
  for (; i <= 12; i++) {
    const promise = fetch('https://api.github.com/graphql', {
      method: 'POST',
      async: false,
      headers: {
        Authorization: 'bearer 9ed5231bb5d8cc4a80985354402c0198d4abaa35',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
        {
          search(type: USER, query: "created:<2017-${
            i < 10 ? '0' + i : i + ''
          }-01 ${query}") {
            userCount
          }
        }
      `
      })
    }).then(r => r.json());
    promises.push(promise);
  }

  return Promise.all(promises);
}

//Creating the chart's data source based on Fusion Charts

function createCharts(data, chartAttr, chartType) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const chartData = data.map((item, monthNum) => {
    console.log(data);
    return {
      label: months[monthNum],
      value: item.data.search.userCount
    };
  });
  const dataSource = {
    chart: chartAttr,
    data: chartData
  };
  let chartConfig = {
    type: chartType,
    width: 800,
    height: 400,
    dataFormat: 'json',
    dataSource
  };

  return chartConfig;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hang Tight We Are Fetching'
    };
  }

  componentDidMount() {
    fetchFromGitHub('')
      .then(results => {
        let chartConfigs = createCharts(
          results,
          {
            caption: 'Github Users - 2018',
            captionfontsize: '20',
            theme: 'fint',
            logoURL:
              'https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png',
            logoAlpha: '80',
            logoScale: '8',
            canvastopmargin: '75',

            logoPosition: 'TR',
            logoleftmargin: '-20',
            logotopmargin: '10',

            yaxisminvalue: '12000000'
          },
          'column2d'
        );
        ReactDOM.unmountComponentAtNode(
          document.getElementById('chart-viewer')
        );
        ReactDOM.render(
          <ReactFC {...chartConfigs} />,
          document.getElementById('chart-viewer')
        );
      })
      .catch(err => {
        console.log(err);
        this.setState({
          message: String(err)
        });
      });
  }

  setLang(event) {
    console.log('setLang Event ==> ' + event.target.value);
    let lang = event.target.value;
    if (lang === 'java') {
      fetchFromGitHub('language:java')
        .then(data => {
          let chartConfig = createCharts(
            data,
            {
              caption: 'Java Users - 2018',
              captionfontsize: '20',
              theme: 'fint',
              logoURL:
                'https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png',
              logoAlpha: '80',
              logoScale: '8',
              canvastopmargin: '75',
              logoPosition: 'TR',
              logoleftmargin: '-20',
              logotopmargin: '10',
              yaxisminvalue: '10000000'
            },
            'column2d'
          );
          ReactDOM.unmountComponentAtNode(
            document.getElementById('chart-viewer')
          );
          ReactDOM.render(
            <ReactFC {...chartConfig} />,
            document.getElementById('chart-viewer')
          );
        })
        .catch(err => {
          this.setState({
            message: String(err)
          });
        });
    } else if (lang === 'C') {
      fetchFromGitHub('language:C')
        .then(data => {
          console.log(data);
          let chartConfig = createCharts(
            data,
            {
              caption: 'C Users - 2018',
              captionfontsize: '20',
              theme: 'fint',
              logoURL:
                'https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png',
              logoAlpha: '80',
              logoScale: '8',
              canvastopmargin: '75',
              logoPosition: 'TR',
              logoleftmargin: '-20',
              logotopmargin: '10',
              yaxisminvalue: '245000',
              plotfillalpha: '90'
            },
            'column2d'
          );
          ReactDOM.unmountComponentAtNode(
            document.getElementById('chart-viewer')
          );
          ReactDOM.render(
            <ReactFC {...chartConfig} />,
            document.getElementById('chart-viewer')
          );
        })
        .catch(err => {
          this.setState({
            message: String(err)
          });
        });
    } else if (lang === 'cplus') {
      fetchFromGitHub('language:C++')
        .then(data => {
          let chartConfig = createCharts(
            data,
            {
              caption: 'C++ Users - 2018',
              captionfontsize: '20',
              theme: 'fint',
              logoURL:
                'https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png',
              logoAlpha: '80',
              logoScale: '8',
              canvastopmargin: '75',
              logoPosition: 'TR',
              logoleftmargin: '-20',
              logotopmargin: '10',
              yaxisminvalue: '350000'
            },
            'column2d'
          );
          ReactDOM.unmountComponentAtNode(
            document.getElementById('chart-viewer')
          );
          ReactDOM.render(
            <ReactFC {...chartConfig} />,
            document.getElementById('chart-viewer')
          );
        })
        .catch(err => {
          this.setState({
            message: String(err)
          });
        });
    } else if (lang === 'javascript') {
      fetchFromGitHub('language:Javascript')
        .then(data => {
          let chartConfig = createCharts(
            data,
            {
              caption: 'JavaScript Users - 2018',
              captionfontsize: '20',
              theme: 'fint',
              logoURL:
                'https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png',
              logoAlpha: '80',
              logoScale: '8',
              canvastopmargin: '75',
              logoPosition: 'TR',
              logoleftmargin: '-20',
              logotopmargin: '10',
              yaxisminvalue: '1200000'
            },
            'column2d'
          );
          ReactDOM.unmountComponentAtNode(
            document.getElementById('chart-viewer')
          );
          ReactDOM.render(
            <ReactFC {...chartConfig} />,
            document.getElementById('chart-viewer')
          );
        })
        .catch(err => {
          this.setState({
            message: String(err)
          });
        });
    } else {
      fetchFromGitHub('')
        .then(data => {
          let chartConfig = createCharts(
            data,
            {
              caption: 'GitHub Users - 2018',
              captionfontsize: '20',
              theme: 'fint',
              logoURL:
                'https://19386-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/10/github-logo-1.png',
              logoAlpha: '80',
              logoScale: '8',
              canvastopmargin: '75',
              logoPosition: 'TR',
              logoleftmargin: '-20',
              logotopmargin: '10',
              yaxisminvalue: '1200000'
            },
            'column2d'
          );
          ReactDOM.unmountComponentAtNode(
            document.getElementById('chart-viewer')
          );
          ReactDOM.render(
            <ReactFC {...chartConfig} />,
            document.getElementById('chart-viewer')
          );
        })
        .catch(err => {
          this.setState({
            message: String(err)
          });
        });
    }
  }

  render() {
    return (
      <div>
        <div id="chart-viewer">{this.state.message}</div>

        <div id="radio" onChange={this.setLang.bind(this)}>
          <label id="container">
            {' '}
            Java
            <input type="radio" value="java" name="lang" />
            <span id="checkmark" />
          </label>

          <label id="container">
            C
            <input type="radio" value="C" name="lang" />
            <span id="checkmark" />
          </label>

          <label id="container">
            C++
            <input type="radio" value="cplus" name="lang" />
            <span id="checkmark" />
          </label>

          <label id="container">
            JavaScript
            <input type="radio" value="javascript" name="lang" />
            <span id="checkmark" />
          </label>

          <label id="container">
            All
            <input type="radio" value="all" name="lang" defaultChecked="true" />
            <span id="checkmark" />
          </label>
        </div>
      </div>
    );
  }
}

export default App;
