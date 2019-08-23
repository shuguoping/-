var Goods = {
    name: "name:",
    password: "password:",
    type: {
        tone: "typeone",
        ttwo: "typetwo",
        tthree: "typethree"
    },
    Date: Date(),
    static: {
        ture: "1",
        flase: "0",
    },
    iphone: "15009188725",
}
var b = document.getElementById("body");
var form = document.createElement("form");
form.setAttribute("id","form");
var e = document.getElementById("form");
b.appendChild(form);
var p1 = document.createElement("p");
var pn1 = document.createTextNode(Goods.name);
var p2 = document.createElement("p");
var pn2 = document.createTextNode(Goods.password);
var p3 = document.createElement("p");
var pn3 = document.createTextNode("static:");
p1.appendChild(pn1);
p2.appendChild(pn2);
p3.appendChild(pn3);
var e = document.getElementById("form");
p1.setAttribute("id", "p1");
p2.setAttribute("id", "p2");
p3.setAttribute("id", "p3");
var inp1 = document.createElement("input");
inp1.setAttribute("class", "inp1");
inp1.setAttribute("type", "text");
var inp2 = document.createElement("input");
inp2.setAttribute("class", "inp2");
inp2.setAttribute("type", "password");

e.appendChild(p1);
document.getElementById("p1").appendChild(inp1);
e.appendChild(p2);
document.getElementById("p2").appendChild(inp2);
var inp3 = document.createElement("input");
inp3.setAttribute("type", "radio");
inp3.setAttribute("name", "sex");
inp3.setAttribute("value", "male");
var pn3 = document.createTextNode(Goods.static.flase);
inp3.appendChild(pn3);
var inp4 = document.createElement("input");
inp4.setAttribute("type", "radio");
inp4.setAttribute("name", "sex");
inp4.setAttribute("value", "female");
var pn4 = document.createTextNode("female");
inp4.appendChild(pn4);
e.appendChild(p3);
document.getElementById("p3").appendChild(inp3);
document.getElementById("p3").appendChild(inp4);
var p4 = document.createElement("p");
var pn5 = document.createTextNode("date:"+Goods.Date);
p4.appendChild(pn5);
e.appendChild(p4);
var p5 = document.createElement("p");
var pn6 = document.createTextNode("iphone:"+Goods.iphone);
p5.appendChild(pn6);
e.appendChild(p5);

var inp5 = document.createElement("input");
inp5.setAttribute("type","submit");
inp5.setAttribute("value","提交");

var p6 = document.createElement("p");
var pn7 = document.createTextNode(Goods.type.tone);
p6.appendChild(pn7);
p6.setAttribute("id","p6");
var inp6 = document.createElement("input");
inp6.setAttribute("type","checkbox");
inp6.setAttribute("name","vehicle");
inp6.setAttribute("value","car");
p6.appendChild(inp6);
p6.appendChild(document.createElement("br"));
e.appendChild(p6);

var p7 = document.createElement("p");
var pn8 = document.createTextNode(Goods.type.ttwo);
p7.appendChild(pn8);
p7.setAttribute("id","p7");
var inp7 = document.createElement("input");
inp7.setAttribute("type","checkbox");
inp7.setAttribute("name","vehicle");
inp7.setAttribute("value","bike");
p7.appendChild(inp7);
e.appendChild(p7);

var p8 = document.createElement("p");
var pn9 = document.createTextNode(Goods.type.tthree);
p8.appendChild(pn9);
p8.setAttribute("id","p8");
var inp8 = document.createElement("input");
inp8.setAttribute("type","checkbox");
inp8.setAttribute("name","vehicle");
inp8.setAttribute("value","abc");
p8.appendChild(inp8);
e.appendChild(p8);


e.appendChild(inp5);

