setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hr = 30*h + m/2;
    mr = 6*m;
    sr = 6*s;
    console.log(h);
    hour.style.transform = `rotate(${hr}deg)`;
    mins.style.transform = `rotate(${mr}deg)`;
    sec.style.transform = `rotate(${sr}deg)`;
    
}, 1000);
