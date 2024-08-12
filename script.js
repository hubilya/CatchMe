
            let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
            let stockPriceElement = document.getElementById('data');
            let lastPrice = null;
            var xmlhttp = new XMLHttpRequest();
            ws.onmessage = (event) => {
                let stockObject = JSON.parse(event.data);               
		stockPriceElement.innerText = parseFloat(stockObject.p).toFixed(2);
                lastPrice = price;
            };
    
   
           colors = new Array("yellow","red","orange","green","blue","purple","gray","yellow","aqua","black","pink","white")
            colorIndex = 0
	
            // функция в которой массив цветов перебирается случайным образом
            function changeColor() {
             document.bgColor = colors[colorIndex]
             var j, temp;
                for(var i = colors.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random()*(i + 1));
                    temp = colors[j];
                    colors[j] = colors[i];
                    colors[i] = temp;
                }
                return colors;
		  
            }

            function startColorChange() {
             setInterval("changeColor()",480)
		    
            }
            function load() {
                    alert("Click when YELLOW appears!");
            }
            window.onload = load()
            window.onload = startColorChange


            var button = document.getElementById('CLOCK');

            var score = 0;
            button.addEventListener('click', function() {

                if (document.bgColor == "yellow") {
                document.getElementById("result").innerHTML = ++score;
                    alert("WEELL DOOOOOOOONE!");
                }
                else {
                document.getElementById("result").innerHTML =score=0;
                    alert("You've missed, try again");
                }
            });
    
