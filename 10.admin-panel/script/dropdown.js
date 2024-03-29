let drop_downs = document.querySelectorAll("li.dropdown");
for (element of drop_downs) {
    element.children[0].addEventListener("click", function(){
        for (elem of drop_downs) {
            if (this.parentNode != elem && elem.classList.contains("active")) {
                elem.classList.remove("active");
            }
        }

        this.parentNode.classList.toggle("active");
    });
}

    window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Simple Line Chart"
            },
            axisY: {
                includeZero: false
            },
            data: [{
                type: "line",
                dataPoints: [{
                        y: 450
                    },
                    {
                        y: 414
                    },
                    {
                        y: 520,
                        indexLabel: "highest",
                        markerColor: "red",
                        markerType: "triangle"
                    },
                    {
                        y: 460
                    },
                    {
                        y: 450
                    },
                    {
                        y: 500
                    },
                    {
                        y: 480
                    },
                    {
                        y: 480
                    },
                    {
                        y: 410,
                        indexLabel: "lowest",
                        markerColor: "DarkSlateGrey",
                        markerType: "cross"
                    },
                    {
                        y: 500
                    },
                    {
                        y: 480
                    },
                    {
                        y: 510
                    }
                ]
            }]
        });
        chart.render();
    }
