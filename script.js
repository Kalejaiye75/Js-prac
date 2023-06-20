var timer = null;
let h = 0;
var m = 0;
var s = 0;

let input_h = document.getElementById("input-h");
input_h.addEventListener("input", function() {
    input_h.value = parseInt(input_h.value || 0);
    if (input_h.value > 24) input_h.value = 24;
    if (input_h.value < 0) input_h.value = 0;
})

let input_m = document.getElementById("input-m");
input_m.addEventListener("input", function() {
    input_m.value = parseInt(input_m.value || 0);
    if (input_m.value > 59) input_m.value = 59;
    if (input_m.value < 0) input_m = 0; 
})

let input_s = document.getElementById("input-s");
input_s.addEventListener("input", function() {
    input_s.value = parseInt(input_s.value || 0);
    if (input_s.value > 59) input_s.value = 59;
    if (input_s.value < 0) input_s.value = 0; 
})

const startCounting = () => {
     h = +document.getElementById("input-h").value || h;
     m = +document.getElementById("input-m").value || m;
     s = +document.getElementById("input-s").value || s;

    if (
        (h == 0 && m == 0 && s == 0) || (h < 0 || m < 0 || s < 0)    
    )
    {
        alert("Incorrect time value entered!");
        return;
    }

     timer = setInterval(counting, 1000)

     h = h.toString()
     m = m.toString()
     s= s.toString()
     if (h.match(/^\d$/)) {
        h = "0" + h
     }

     if (m.match(/^\d$/)) {
        m = "0" + m
     }

     if (s.match(/^\d$/)) {
        s = "0" + s
     }

    document.getElementById("start-btn").disabled = true;
    document.getElementById("pause-btn").disabled = false;
    document.getElementById("stop-btn").disabled = false;
    document.getElementById("input-h").disabled = true;
    document.getElementById("input-m").disabled = true;
    document.getElementById("input-s").disabled = true;
}

const pauseCounting = () => {
    document.getElementById("start-btn").disabled = false;
    document.getElementById("pause-btn").disabled = true;
    document.getElementById("stop-btn").disabled = false;
    document.getElementById("input-h").disabled = false;
    document.getElementById("input-m").disabled = false;
    document.getElementById("input-s").disabled = false;

    clearInterval(timer)
} 

const stopCounting = () => {
    document.getElementById("start-btn").disabled = false;
    document.getElementById("pause-btn").disabled = true;
    document.getElementById("stop-btn").disabled = true;
    document.getElementById("input-h").disabled = false;
    document.getElementById("input-m").disabled = false;
    document.getElementById("input-s").disabled = false;

    clearInterval(timer)

    h = 0;
    m = 0;
    s = 0;

    document.getElementById("currentTime").textContent = "Timer is stopped!"
}

const counting = () => {
    if (s == 0) {
        if (m == 0) {
            --h;
            m = 59;
            s = 59;
        }
        else {
            --m;
            s = 59;
        }
    }
    else  {
        --s;
     }
     document.getElementById("currentTime").innerHTML = 
     "current time: " + h + " h " + m + " m " + s + " s ";
     document.getElementById("input-h").value = h;
     document.getElementById("input-m").value = m;
     document.getElementById("input-s").value = s;

     if (s == 0) {
        if (m == 0) {
            if (h == 0) {
                stopCounting();
                setTimeout(function() {
                    alert("Time is up!")
                }, 0);
                return;
            }
        }
     
        
     }         
     
     
}