let data = [1,2,3,4,5,6,7];
let options = {width: 200, height: 300};

function drawBarChart(data, options, element) {
  let barWidth = determineBarWidth(options.width, data.length);
  let barHeight = Math.max(...data); 
  let maxValue = defaultMaxValue(data);
  let numOfSteps = 10 //default, to be overriden by User input field
  let scaleStep = maxValue/numOfSteps; //default, to be overriden by User input field
  let 
};


function determineBarWidth(graphWidth, numberOfBars) {
  let totalGapWidth = 20(numberOfBars + 1);
  let barWidth = (graphWidth - totalGapWidth) / numberOfBars;
  return barWidth;
}

function defualtMaxValue(data){
  let chartMax;
  if (Math.max(...data) < 100) {
    chartMax = (Math.ceil(Math.max(...data)/10) * 10);
  } else if (Math.max(...data) < 10000) {
    chartMax = (Math.ceil(Math.max(...data)/1000) * 1000);
  } else if (Math.max(...data) < 100000) {
    chartMax = (Math.ceil(Math.max(...data)/10000) * 10000);
  } else if (Math.max(...data) < 1000000) {
    chartMax = (Math.ceil(Math.max(...data)/100000) * 100000);
  } else if (Math.max(...data) < 10000000) {
    chartMax = (Math.ceil(Math.max(...data)/1000000) * 1000000);
  } else if (Math.max(...data) < 100000000) {
    chartMax = (Math.ceil(Math.max(...data)/10000000) * 10000000);
  } else {
    chartMax = Math.ceil(Math.max(...data) * 1.15);
  };
  return chartMax;
};

console.log(defualtMaxValue([84303,2321,321]));