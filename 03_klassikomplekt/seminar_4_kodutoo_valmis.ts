class Isikukood{
	constructor(public kood:string){}
	synniaasta():string{
		let algus="20";
		if(this.kood[0]<"5"){
			algus="19";
		}
		return algus+this.kood.substring(1, 3);
	}	
	sugu(){
		return(parseInt(this.kood[0]) % 2 == 0) ? "N" : "M";
	}	
	kuu(){
		return(this.kood.substring(3, 5));
	}	
	kuupäev(){
		return(this.kood.substring(5, 7));
	}	
	kuu_nimi(kuu_nr:string):string{
		let kuude_nimed: string[] = ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember",];
		let kuu_nr_int = parseInt(kuu_nr);
		return(kuude_nimed[kuu_nr_int-1]);
	}	
}

class IsikukoodHoidla{
    isikukoodid:Isikukood[] = [];
    push(i:Isikukood){
        this.isikukoodid.push(i);
    }

    getMarchGenders(){
		//let marchCodes:string[] = [];
		let marchGenders:string[] = [];
        if(this.isikukoodid.length==0){
            throw new Error("Isikukoodid is empty");
        }else{
            for(let i = 0; i < this.isikukoodid.length; i++){
				if(this.isikukoodid[i].kuu() == "03"){
					//marchCodes.push(this.isikukoodid[i].kood);
					marchGenders.push(this.isikukoodid[i].sugu());
					
				}
                //console.log(this.isikukoodid[i].kuu());
                //return this.isikukoodid[i].kuu();
            }
			//return marchCodes;
			return marchGenders;
			
			
        }
	}
}

let hoidla1=new IsikukoodHoidla();
hoidla1.push(new Isikukood("50403250278"));
hoidla1.push(new Isikukood("60003280278"));
hoidla1.push(new Isikukood("49805250278"));
hoidla1.push(new Isikukood("70406250278"));
hoidla1.push(new Isikukood("60208250278"));
hoidla1.push(new Isikukood("50303250278"));

console.log(hoidla1.getMarchGenders());
let marchGen = hoidla1.getMarchGenders();
let N:number = 0;
let M:number = 0;
for(let i = 0; i < marchGen.length; i++){
	if(marchGen[i] == "N"){
		N += 1
	}else if(marchGen[i] == "M"){
		M += 1
	}
}
console.log("Märtsikuus sündinud mehi on " + M + " ja naisi on " + N)
