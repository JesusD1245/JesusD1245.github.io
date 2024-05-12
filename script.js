document.addEventListener('DOMContentLoaded', function () {
    const twoYearData = {
        labels: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
        data: [684918,  658488,  553342,  213693 , 112570] 
    };

    const fourYearData = {
        labels: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
        data: [642873, 567339, 443397, 153443, 91063] 
    };

    //Data used from: https://nycfuture.org //

    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, { //created a pie chart constant//
        type: 'pie',
        data: {
            labels: twoYearData.labels,
            datasets: [{
                label: '2-Year Degree Graduates',
                data: twoYearData.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Jesus De Leon'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, { //created a bar chart constant//
        type: 'bar',
        data: {
            labels: fourYearData.labels,
            datasets: [{
                label: '4-Year Degree Graduates',
                data: fourYearData.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Jesus De Leon'
            },
            responsive: true,
            maintainAspectRatio: false,

           

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});