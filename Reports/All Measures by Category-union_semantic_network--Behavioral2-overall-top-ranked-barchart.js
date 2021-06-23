Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['judging',],
datasets : [
{
label: 'Behavioral2 (union_semantic_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,]
},
]
}
var context = document.getElementById('All Measures by Category-union_semantic_network--Behavioral2-overall-top-ranked-barchart').getContext("2d");
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

