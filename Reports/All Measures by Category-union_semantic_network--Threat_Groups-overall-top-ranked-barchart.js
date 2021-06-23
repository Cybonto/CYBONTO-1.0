Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['comment_crew','careto','energetic_bear','ghostnet','ice_fog','red_october','sofacy','ixeshe','apt_29','mirage',],
datasets : [
{
label: 'Threat Groups (union_semantic_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.701327,0.701327,0.701327,0.701327,0.701327,0.666133,0.553644,0.452197,0.336453,]
},
]
}
var context = document.getElementById('All Measures by Category-union_semantic_network--Threat_Groups-overall-top-ranked-barchart').getContext("2d");
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

