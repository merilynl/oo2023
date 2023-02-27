/* Libisev keskmine

* Koosta funktsioon kolme arvu aritmeetilise keskmise leidmiseks. Katseta. */
function aritmKeskmine(arv1:number, arv2:number, arv3:number):string{
	return((arv1+arv2+arv3)/3).toFixed(2);
}
var test:string = (aritmKeskmine(5, 7, 10));
console.log(test);

/* Koosta funktsioon massiivi libiseva keskmise leidmiseks. Väljundiks on massiiv, mis on sisendist kahe elemendi võrra lühem ning mille iga elemendi väärtuseks on sisendmassiivi vastava elemendi ning selle järgmise ja ülejärgmise elemendi keskmine.*/


function libisevKeskmine(massiiv:Array<number>):Array<number>{
	let libKeskMassiiv:number[] = [];
	for(let i = 0; i < (massiiv.length-2); i++){
		let elemendiKeskmine:number = parseFloat(((massiiv[i]+massiiv[i+1]+massiiv[i+2])/3).toFixed(2));
		libKeskMassiiv.push(elemendiKeskmine);
	}
	return libKeskMassiiv;
}

console.log(libisevKeskmine([4,6,32,7,3,7]));

/* Koosta klass, mille eksemplarile saab vastava käsuga lisada arve. Teise käsuga saab küsida nende arvude libiseva keskmise massiivi vastavalt eelmise punkti juhendile. Koosta kood nõnda, et uue arvu lisamisel eksemplarile tehtaks uusi arvutusi võimalikult vähe (st. ei arvutataks kogu tulemust massiivi algusest uuesti) */

class libisevKeskmineKlass{
	//constructor(protected massiiv:Array<number>){}
	protected arvud:number[] = [];
	protected vaheMassiiv:Array<number> = this.arvud;
	protected arvutaLibisevKeskmine:number[] = [];

	lisaNumber(x:number){
		this.arvud.push(x);
		return this.arvud;
	}
	
	leiaLibisevKeskmine(){
		if(this.vaheMassiiv == this.arvud){
			if(this.arvud.length < 3){
				throw new Error("Array has under 3 numbers");
			}else{
				this.vaheMassiiv = this.arvud;
				this.arvutaLibisevKeskmine = libisevKeskmine(this.arvud);
				return this.arvutaLibisevKeskmine;
			}
		}else{
			let vaheTegur1:number[] = [];
			vaheTegur1.push(this.arvud[this.arvud.length])
			vaheTegur1.push(this.arvud[this.arvud.length-1])
			vaheTegur1.push(this.arvud[this.arvud.length-2])
			let vaheTegur2:Array<number> = libisevKeskmine(vaheTegur1); 
			this.arvutaLibisevKeskmine.push(vaheTegur2[0]);
			return this.arvutaLibisevKeskmine;
		}
	}
}

let libKeskEksemplar = new libisevKeskmineKlass();
libKeskEksemplar.lisaNumber(5);
libKeskEksemplar.lisaNumber(17);
libKeskEksemplar.lisaNumber(8);
libKeskEksemplar.lisaNumber(3);
libKeskEksemplar.lisaNumber(20);
libKeskEksemplar.lisaNumber(1);
console.log(libKeskEksemplar.leiaLibisevKeskmine());
libKeskEksemplar.lisaNumber(15);
console.log(libKeskEksemplar.leiaLibisevKeskmine());
