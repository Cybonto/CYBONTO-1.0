Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['gain','loss','policy','source','resource',],
datasets : [
{
label: 'Assets (union_semantic_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.374973,0.357767,0.269928,0.222773,]
},
]
}
var context = document.getElementById('All Measures by Category-union_semantic_network--Assets-overall-top-ranked-barchart').getContext("2d");
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

