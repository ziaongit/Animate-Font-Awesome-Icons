/* ===========================
Chain brocken animation start
=============================*/
function brakeChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function(){
        chain.innerHTML = "&#xf127;";
    },1000);
}

// Run animation
brakeChain(); 

// Animate every 2 second
setInterval(brakeChain, 2000);

/* ===========================
Chain brocken animation end
=============================*/

/* ===========================
Battery charge animation start
=============================*/
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";

    setTimeout(function() {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function() {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function() {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function() {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}

// Run animation
chargeBattery(); 

// Run animation every 5 seconds
setInterval(chargeBattery, 5000);


/* ===========================
Battery charge animation start
=============================*/

/* ===========================
Hour Glass animation start
=============================*/
function hourGlass(){
    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = "&#xf251;"

    setTimeout(function() {
        hourglass.innerHTML = "&#xf252;";
    }, 1000);

    setTimeout(function() {
        hourglass.innerHTML = "&#xf253;";
    }, 2000);
}

// Run hourGlass animation
hourGlass();

// Run animation every 5 seconds
setInterval(hourGlass, 3000);
/* ===========================
Hour Glass animation start
=============================*/