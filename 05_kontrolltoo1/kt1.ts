/* 1 kuupsentimeetri vee soojendamiseks ühe kraadi (C) võrra kulub energiat 1 kalor ehk 4,19 džauli. 1 vatt on võimsus 1 džaul sekundis.

* Loo klass veekeedukannu tarbeks. Väärtusteks seesoleva vee milliliitrite arv ning temperatuur. Lisa käsklus, mis teatab, kas vee temperatuur on vähemasti 80 kraadi.
* Veekeedukannu võimsus on 1200W. Klassile lisatakse käsklus, kus määratakse, mitmeks sekundiks küttekeha sisse lülitatakse. Käsklusega saab küsida vee temperatuuri. Arvestatakse, et kogu küttekehani jõudnud energia kulub vee soojendamiseks.
* Kannu saab vett juurde valada. Käsu parameetriteks, et mitu milliliitrit ja mitmekraadist vett. Vee ühtlase temperatuuri küsimise käsklus arvestab ka juurde valatud vett. */

class kettle{
	constructor(protected ml:number, protected temp:number){
	}
	tempControl(){
		if(this.temp >= 80){
			console.log("Vee temperatuur on vähemalt 80 kraadi.");
		} else {
			console.log("Vee temperatuur on alla 80 kraadi.");
		}
	}
	heat(seconds:number){
		//temp + 1200*seconds/4.19/ml
		this.temp += 1200*seconds/4.19/this.ml;
	}
	getTemp(){
		console.log("Vee temperatuur on " + this.temp + " kraadi.");
	}
	addWater(addMl:number, addTemp:number){
		//temp(final) = (ml1_temp1 + ml2_temp2) / (ml1 + ml2)
		this.temp = (addMl*addTemp + this.ml*this.temp) / (addMl + this.ml);
	}
}

let keedukann = new kettle(1000, 32);
keedukann.tempControl();
keedukann.getTemp();
keedukann.heat(12);
keedukann.getTemp();
keedukann.addWater(200, 50);
keedukann.getTemp();
keedukann.heat(22);
keedukann.getTemp();

/*
VALJUND: 
Vee temperatuur on alla 80 kraadi.
Vee temperatuur on 32 kraadi.
Vee temperatuur on 35.436754176610975 kraadi.
Vee temperatuur on 37.86396181384248 kraadi.
Vee temperatuur on 44.16467780429594 kraadi.
*/
