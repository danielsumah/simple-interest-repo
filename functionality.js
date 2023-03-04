function checkPrincipal(){
    const principal = document.getElementById('principal').value;
    if (principal == '') {
        return true
    }
    return false
}

function checkRate(){
    const rate = document.getElementById('rate').value;
    if (rate == '') {
        return true
    }
    return false
}

function checkTime(){
    const time = document.getElementById('time').value; 
    if (time == ''){
        return true
    }
    return false
}

function calculateSimpleInterest(){
    if (checkPrincipal()){
        let result = document.getElementById("answer")
        result.innerText = "You must enter a principal"
    }
    else if (checkRate()){
        let result = document.getElementById("answer")
        result.innerText = "You must enter a rate"
    }
    else if (checkTime()){
        let result = document.getElementById("answer")
        result.innerText = "You must enter a time"
    }
    else{
        const principal = parseInt(document.getElementById('principal').value);
        const rate = parseInt(document.getElementById('rate').value);
        const time = parseInt(document.getElementById('time').value);

        var SI = (principal * rate * time) / 100;

        let result = document.getElementById("answer")
        result.innerText = "Your simple interest is " + String(SI);
    }
}
