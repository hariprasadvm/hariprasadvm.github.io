var names=new Array();
names[0]="Hari";
names[1]="Prasad";
names[2]="John";
names[3]="joseph";
names[4]="kiran";
names[5]="felicia";
names[6]="lemar";
names[7]="paulson";
names[8]="lara";
names[9]="jensen";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}