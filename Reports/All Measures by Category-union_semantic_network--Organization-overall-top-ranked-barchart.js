Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['role','organization','planning','goal','task','ownership','division','exposure','thinking','authority',],
datasets : [
{
label: 'Organization (union_semantic_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.70492,0.560562,0.302892,0.258841,0.194717,0.172071,0.145575,0.145575,0.12536,]
},
]
}
var context = document.getElementById('All Measures by Category-union_semantic_network--Organization-overall-top-ranked-barchart').getContext("2d");
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

