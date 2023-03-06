/* Keelpill

Lahtise pillikeele helikõrgusele vastab MIDI-number. Iga krihvi võrra keele lühemaks/kõrgemaks vajutamine suurendab numbrit ühe võrra. Näiteks kui lahtise keele kõrgus on 64 (E), siis kolmandale krihvile vajutamine annab välja kõrguse 67 (G)

* Loo klass Pillikeel, mille eksemplari loomisel antakse väärtusena lahtiselt kõlava noodi MIDI-number. Koosta käsklus, millele antakse ette vajutatava krihvi number, väljundis tagastatakse kõlava noodi number.
* Koosta klass mandoliini tarbeks. Keeled G (55), D (62), A (69), E (76). Loo meetod, mille abil saab ette anda, millise keele mitmendale krihvile vajutatakse, tagastatakse kõlav heli.
* Pill võib olla kuni kuue keelega, iga keele jaoks sees eraldi Pillikeele eksemplar. Pillile saab ette anda krihvide vajutused nii ühekaupa kui massiivina korraga - tagastatakse vastavate krihvide alt kõlavad helid */

class pillikeel{
	constructor(protected noot:number){
	}
	getValjund(krihv:number){
		return(this.noot + krihv);
	}
	
}

class mandoliin{
	constructor(){}
	protected G = new pillikeel(55);
	protected D = new pillikeel(62);
	protected A = new pillikeel(69);
	protected E = new pillikeel(76);
	
	vajutaUksik(vajutaKeel:string,vajutaKrihv:number):number{
		if(vajutaKeel == "G"){
			return(this.G.getValjund(vajutaKrihv));
		}else if(vajutaKeel == "D"){
			return(this.D.getValjund(vajutaKrihv));
		}else if(vajutaKeel == "A"){
			return(this.A.getValjund(vajutaKrihv));
		}else if(vajutaKeel == "E"){
			return(this.E.getValjund(vajutaKrihv));
		}
		return -1;
	} 
	vajutaMassiiv(vajutaKeeled:Array<string>,vajutaKrihvid:Array<number>):Array<any>{
		let vastus:any[] = [];
		
		for(let x = 0; x < (vajutaKeeled.length); x++){
			if(vajutaKeeled[x] == "G"){
				vastus.push(this.G.getValjund(vajutaKrihvid[x]));
			}else if(vajutaKeeled[x] == "D"){
				vastus.push(this.D.getValjund(vajutaKrihvid[x]));
			}else if(vajutaKeeled[x] == "A"){
				vastus.push(this.A.getValjund(vajutaKrihvid[x]));
			}else if(vajutaKeeled[x] == "E"){
				vastus.push(this.E.getValjund(vajutaKrihvid[x]));
			}else{
				vastus.push("Puudub selline keel");
			}
		}
		return(vastus);
	} 
}

let m1 = new mandoliin();
console.log(m1.vajutaUksik("G", 4));
console.log(m1.vajutaMassiiv(["G", "A", "G", "G", "E", "Y"],[1, 5, 2, 6, 0, 1]));

/*
VALJUND:
59
[ 56, 74, 57, 61, 76, 'Puudub selline keel' ]
*/