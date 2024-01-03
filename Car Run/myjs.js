m = 0;
var y;
function start(){
    y = setInterval(run, 30);
    
    function run(){
        if(m == 1280){
            clearInterval(x);
            m=0;
        }
        else{
            m += 5;
            var x = document.getElementById("img");
            x.style.marginLeft = m + 'px';
        }
    }
}

function stop(){
    clearInterval(y);
}