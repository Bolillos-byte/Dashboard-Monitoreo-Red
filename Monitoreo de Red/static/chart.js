const ctx = document.getElementById('cpuChart').getContext('2d');
const cpuChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'CPU %',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: { scales: { x: { display: true }, y: { beginAtZero: true, max: 100 } } }
});

function actualizar() {
  fetch('/api/metricas').then(r => r.json()).then(data => {
    const now = new Date().toLocaleTimeString();
    cpuChart.data.labels.push(now);
    cpuChart.data.datasets[0].data.push(data.cpu);
    if (cpuChart.data.labels.length > 20) {
      cpuChart.data.labels.shift();
      cpuChart.data.datasets[0].data.shift();
    }
    cpuChart.update();
  });
}

setInterval(actualizar, 2000);
actualizar();