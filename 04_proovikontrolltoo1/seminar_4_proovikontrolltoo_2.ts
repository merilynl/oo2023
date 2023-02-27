/* Hulknurk

* Koosta klass, milles on üks massiiv kolmnurga x-koordinaatide hoidmiseks ning teine massiiv y-koordinaatide hoidmiseks. Koosta klassist kaks eksemplari, määra algväärtused ning trüki andmed välja. */

/* * Lisa klassile käsklus punkti koordinaadipaari lisamiseks. Käsklusena väljasta tekkiva hulknurga ümbermõõt (küljepikkuste summa). */

class koordinaadid{
	constructor(protected xKoordinaadid:Array<number>, protected yKoordinaadid:Array<number>, protected g:any){
		this.draw();
	}
	print(){
		for(let i=0; i<this.xKoordinaadid.length; i++){
			console.log(this.xKoordinaadid[i] + ", " + this.yKoordinaadid[i]);
		}
	}
	add(x:number, y:number){
		this.xKoordinaadid.push(x);
		this.yKoordinaadid.push(y);
		console.log("Lisati koordinaadipaar " + x + ", " + y)
	}
	
	
	getPerimeter():number{
		let perimeter:number = 0;
		for(let i=0; i<((this.xKoordinaadid.length)-1); i++){
			let x1:number = this.xKoordinaadid[i];
			let x2:number = this.xKoordinaadid[i+1];
			let y1:number = this.yKoordinaadid[i];
			let y2:number = this.yKoordinaadid[i+1];
			let yValue:number = x2 - x1;
			let xValue:number = y2 - y1;
    
			let distance:number = Math.sqrt(xValue * xValue + yValue * yValue);
			perimeter += distance;
		}
		return perimeter;
	}
	draw(){
		let x1:number;
		let x2:number;
		let y1:number;
		let y2:number;
        for(let i=0; i<((this.xKoordinaadid.length)-1); i++){
			x1 = this.xKoordinaadid[i];
			x2 = this.xKoordinaadid[i+1];
			y1 = this.yKoordinaadid[i];
			y2 = this.yKoordinaadid[i+1];
		
			this.g.beginPath();
			this.g.moveTo(x1+150, y1+150);
			this.g.lineTo(x2+150, y2+150);
			this.g.stroke();
		}
		x1 = this.xKoordinaadid[0];
		x2 = this.xKoordinaadid[this.xKoordinaadid.length];
		y1 = this.yKoordinaadid[0];
		y2 = this.yKoordinaadid[this.yKoordinaadid.length];
		this.g.beginPath();
		this.g.moveTo(x1+150, y1+150);
		this.g.lineTo(x2+150, y2+150);
		this.g.stroke();
			//this.g.fillText(this.r+" Ω", this.startx+this.width/3, this.y+3);
		
	}
}

/* let k1 = new koordinaadid([4,6,2],[2,6,9],canvas1.getContext("2d"));
let k2 = new koordinaadid([5,6,7],[7,6,5],canvas1.getContext("2d"));
k1.print();
k2.print();
k2.add(7, 2);
k2.print();
console.log(k1.getPerimeter());
console.log(k2.getPerimeter()); */


/* * Kuva tekkiv hulknurk graafiliselt, kirjuta külgede juurde nende pikkused ning hulknurga keskele kogu ümbermõõt. */