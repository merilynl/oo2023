/* Hulknurk

* Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja. */
/* * Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt (küljepikkuste summa). */
var koordinaadid = /** @class */ (function () {
    function koordinaadid(xKoordinaadid, yKoordinaadid, g) {
        this.xKoordinaadid = xKoordinaadid;
        this.yKoordinaadid = yKoordinaadid;
        this.g = g;
        this.draw();
    }
    koordinaadid.prototype.print = function () {
        for (var i = 0; i < this.xKoordinaadid.length; i++) {
            console.log(this.xKoordinaadid[i] + ", " + this.yKoordinaadid[i]);
        }
    };
    koordinaadid.prototype.add = function (x, y) {
        this.xKoordinaadid.push(x);
        this.yKoordinaadid.push(y);
        console.log("Lisati koordinaadipaar " + x + ", " + y);
    };
    koordinaadid.prototype.getPerimeter = function () {
        var perimeter = 0;
        for (var i = 0; i < ((this.xKoordinaadid.length) - 1); i++) {
            var x1 = this.xKoordinaadid[i];
            var x2 = this.xKoordinaadid[i + 1];
            var y1 = this.yKoordinaadid[i];
            var y2 = this.yKoordinaadid[i + 1];
            var yValue = x2 - x1;
            var xValue = y2 - y1;
            var distance = Math.sqrt(xValue * xValue + yValue * yValue);
            perimeter += distance;
        }
        return perimeter;
    };
    koordinaadid.prototype.draw = function () {
        var x1;
        var x2;
        var y1;
        var y2;
        for (var i = 0; i < ((this.xKoordinaadid.length) - 1); i++) {
            x1 = this.xKoordinaadid[i];
            x2 = this.xKoordinaadid[i + 1];
            y1 = this.yKoordinaadid[i];
            y2 = this.yKoordinaadid[i + 1];
            this.g.beginPath();
            this.g.moveTo(x1 + 150, y1 + 150);
            this.g.lineTo(x2 + 150, y2 + 150);
            this.g.stroke();
        }
        x1 = this.xKoordinaadid[0];
        x2 = this.xKoordinaadid[this.xKoordinaadid.length];
        y1 = this.yKoordinaadid[0];
        y2 = this.yKoordinaadid[this.yKoordinaadid.length];
        this.g.beginPath();
        this.g.moveTo(x1 + 150, y1 + 150);
        this.g.lineTo(x2 + 150, y2 + 150);
        this.g.stroke();
        //this.g.fillText(this.r+" Ω", this.startx+this.width/3, this.y+3);
    };
    return koordinaadid;
}());
/* let k1 = new koordinaadid([4,6,2],[2,6,9],canvas1.getContext("2d"));
let k2 = new koordinaadid([5,6,7],[7,6,5],canvas1.getContext("2d"));
k1.print();
k2.print();
k2.add(7, 2);
k2.print();
console.log(k1.getPerimeter());
console.log(k2.getPerimeter()); */
/* * Kuva tekkiv hulknurk graafiliselt, kirjuta külgede juurde nende pikkused ning hulknurga keskele kogu ümbermõõt. */ 
