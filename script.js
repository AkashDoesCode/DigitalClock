setInterval(myfunc, 1000);

function myfunc()
{
    var x = new Date();
    var hrs= x.getHours();
    var mints= x.getMinutes();
    var secs=x.getSeconds();

    
    hrs=(hrs>12)?hrs-12:hrs;
    hrs=(hrs<10)?'0'+hrs:hrs;
    mints=(mints<10)?'0'+mints:mints;
    secs=(secs<10)?'0'+secs:secs;

    document.getElementsByClassName("hours")[0].innerHTML= hrs;
    document.getElementsByClassName("minutes")[0].innerHTML= mints;
    document.getElementsByClassName("seconds")[0].innerHTML= secs;

}

