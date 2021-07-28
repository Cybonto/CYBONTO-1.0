Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['Behavior','Arousal','Goals','Perception','Self-efficacy','circumstances','Evaluating','Behavior control-ability','Knowledge','Intentional modality',],
datasets : [
{
label: 'Agent (CybontoAnalysis)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.688327,0.648609,0.61744,0.609411,0.573639,0.564487,0.561866,0.530395,0.483213,]
},
]
}
var context = document.getElementById('All Measures by Category-CybontoAnalysis--Agent-overall-top-ranked-barchart').getContext("2d");
var chart = new Chart(context, {
		type: 'bar',
		data: data,
		options: {
			autowidth:false,
			scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

