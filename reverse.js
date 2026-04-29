function palindrome(){
    var x = document.getElementById("HELLO").value
    console.log(x)
    var input= x.replace(/^A-Z0-9/ig,"").toLowerCase()

    var reverseinput= input.split("").reverse().join("")

    if (input === reverseinput){
        document.getElementById("hi").innerHTML="<div>"+ x +" is a palindrome </div>"
    }
    else{
        document.getElementById("hi").innerHTML = "<div>" + x + " is NOT a palindrome </div>"
    }
}

palindrome("uhrhru")