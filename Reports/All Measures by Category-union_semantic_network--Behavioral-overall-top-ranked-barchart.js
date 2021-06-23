Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['personality','belief','perception','combining','perceived_vulnerability','protection_effect','extrinsic_rewards','intrinsic_rewards','physical_quality','intelligence',],
datasets : [
{
label: 'Behavioral (union_semantic_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.472018,0.456094,0.44115,0.409171,0.395755,0.330019,0.308292,0.293999,0.253628,]
},
]
}
var context = document.getElementById('All Measures by Category-union_semantic_network--Behavioral-overall-top-ranked-barchart').getContext("2d");
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

