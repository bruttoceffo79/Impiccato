/*
gsap.to("custom_btn_rst",{
	duration: 2,
	y: 200,
	repeat: -1,
	yoyo: true
})
*/


class HappyMan {
	setCanvas (c){
		this.canvas = c;
		if (this.canvas.getContext("2d")) { // Check HTML5 canvas support
			this.context = this.canvas.getContext("2d"); // get Canvas Context object
			return true; 
		}
	}	
	nome = "Mario";
	vite = 3;
	vocabolario = ['MARITOZZO' ,'MORTACCIO', 'TOMBOLONE','CRETINO','SUBDOLO','MARITTIMO',
	'TORTELLINO','BOLOGNESE','TRIESTINO','CERIGNOLANO','CALIPSO','ODIERNO','MODERNO','COGLIONE',
	'CETRIOLO','MARMOTTA','COSMOPOLITA','ELEMENTARE','SUPERFICIALMENTE','CANESTRELLO'];
	
	constructor(){
		this.corpo = [
			this.createHead.bind(this),//puntatori a funzione
			this.createBody.bind(this),
			this.createArmRight.bind(this),
			this.createArmLeft.bind(this),
			this.createLegRight.bind(this),
			this.createLegLeft.bind(this)];
	}
	
	disegnaFino(pezziDiCorpo){
		this.context.reset();
		for(var i=0;i<pezziDiCorpo;i++ ){
					this.corpo[i]();
				}
	}
	
//testa inizio
	createHead(){
		this.context.beginPath();
		this.context.fillStyle = "bisque"; // #ffe4c4
		this.context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
		// (x,y) center, radius, start angle, end angle, anticlockwise
		this.context.fill();

		this.context.beginPath();
		this.context.strokeStyle = "red"; // color
		this.context.lineWidth = 3;
		this.context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
		this.context.stroke();

		// eyes
		this.context.beginPath();
		this.context.fillStyle = "green"; // color
		this.context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
		this.context.fill();
		this.context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
		this.context.fill();
		//testa fine
	}


	// body
	createBody(){
		this.context.beginPath();
		this.context.moveTo(200, 80);
		this.context.lineTo(200, 180);
		this.context.strokeStyle = "navy";
		this.context.stroke();
	}


	// arms


	//arm left
	createArmLeft(){
		this.context.beginPath();
		this.context.strokeStyle = "#0000ff"; // blue
		this.context.moveTo(200, 80);
		this.context.lineTo(150, 130);
		this.context.stroke();
	}
	//arm right

	createArmRight(){
		this.context.beginPath();
		this.context.strokeStyle = "#0000ff"; // blue
		this.context.moveTo(200, 80);
		this.context.lineTo(250, 130);
		this.context.stroke();
	}

	// legs
	//leg left
	createLegLeft(){
		this.context.beginPath();
		this.context.strokeStyle = "orange";
		this.context.moveTo(200, 180);
		this.context.lineTo(150, 280);
		this.context.stroke();
	}
		//leg right
	createLegRight(){
		this.context.beginPath();
		this.context.strokeStyle = "orange";
		this.context.moveTo(200, 180);
		this.context.lineTo(250, 280);
		this.context.stroke();
	}
	

	
	
};


