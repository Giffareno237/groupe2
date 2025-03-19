function moyenne()
{
    if (event) event.preventDefault();
    var a = document.getElementById("f1").value;
    a = parseFloat(a)
    var b = document.getElementById("a1").value;
    b = parseFloat (b)
    var c = document.getElementById("m1").value;
    c = parseFloat(c)
    d = (a+b+c)/3;
    document.getElementById("c1").value = d.toFixed(2);
}