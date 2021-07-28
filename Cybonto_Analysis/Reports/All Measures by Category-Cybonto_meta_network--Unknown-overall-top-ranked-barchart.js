Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['personality','perceived_vulnerability','perception','combining','protection_effect','focus','intrinsic_rewards','gain','loss','extrinsic_rewards',],
datasets : [
{
label: 'Unknown (Cybonto_meta_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.621246,0.524226,0.408169,0.400377,0.376041,0.371231,0.341167,0.32782,0.319358,]
},
]
}
var context = document.getElementById('All Measures by Category-Cybonto_meta_network--Unknown-overall-top-ranked-barchart').getContext("2d");
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

