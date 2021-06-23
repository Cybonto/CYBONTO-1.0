Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['impact','opportunity_for_criminal_acts','vulnerabilities','trap',],
datasets : [
{
label: 'Situational (union_semantic_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.512337,0.301145,0.256169,]
},
]
}
var context = document.getElementById('All Measures by Category-union_semantic_network--Situational-overall-top-ranked-barchart').getContext("2d");
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

