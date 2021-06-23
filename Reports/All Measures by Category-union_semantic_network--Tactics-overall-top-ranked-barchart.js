Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['techniques','spear_phishing','tactics','code_injection','defacement','interception','phishing','exfiltration','flooding','reverse_engineering',],
datasets : [
{
label: 'Tactics (union_semantic_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.48449,0.152584,0.145666,0.145666,0.145666,0.134771,0.120869,0.0676608,0.0537765,]
},
]
}
var context = document.getElementById('All Measures by Category-union_semantic_network--Tactics-overall-top-ranked-barchart').getContext("2d");
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

