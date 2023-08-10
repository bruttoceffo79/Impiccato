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
		self.canvas = c;
		if (self.canvas.getContext("2d")) { // Check HTML5 canvas support
			self.context = self.canvas.getContext("2d"); // get Canvas Context object
			return true; 
		}
	}	
	nome = "Mario";
	//testa inizio
	createHead(){
		self.context.beginPath();
		self.context.fillStyle = "bisque"; // #ffe4c4
		self.context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
		// (x,y) center, radius, start angle, end angle, anticlockwise
		self.context.fill();

		self.context.beginPath();
		self.context.strokeStyle = "red"; // color
		self.context.lineWidth = 3;
		self.context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
		self.context.stroke();

		// eyes
		self.context.beginPath();
		self.context.fillStyle = "green"; // color
		self.context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
		self.context.fill();
		self.context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
		self.context.fill();
		//testa fine
	}
	
	createHead(){
		self.context.beginPath();
		self.context.fillStyle = "bisque"; // #ffe4c4
		self.context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
		// (x,y) center, radius, start angle, end angle, anticlockwise
		self.context.fill();

		self.context.beginPath();
		self.context.strokeStyle = "red"; // color
		self.context.lineWidth = 3;
		self.context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
		self.context.stroke();

		// eyes
		self.context.beginPath();
		self.context.fillStyle = "green"; // color
		self.context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
		self.context.fill();
		self.context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
		self.context.fill();
		//testa fine
	}


	// body
	createBody(){
		self.context.beginPath();
		self.context.moveTo(200, 80);
		self.context.lineTo(200, 180);
		self.context.strokeStyle = "navy";
		self.context.stroke();
	}


	// arms


	//arm left
	createArmLeft(){
		self.context.beginPath();
		self.context.strokeStyle = "#0000ff"; // blue
		self.context.moveTo(200, 80);
		self.context.lineTo(150, 130);
		self.context.stroke();
	}
	//arm right

	createArmRight(){
		self.context.beginPath();
		self.context.strokeStyle = "#0000ff"; // blue
		self.context.moveTo(200, 80);
		self.context.lineTo(250, 130);
		self.context.stroke();
	}

	// legs
	//leg left
	createLegLeft(){
		self.context.beginPath();
		self.context.strokeStyle = "orange";
		self.context.moveTo(200, 180);
		self.context.lineTo(150, 280);
		self.context.stroke();
	}
		//leg right
	createLegRight(){
		self.context.beginPath();
		self.context.strokeStyle = "orange";
		self.context.moveTo(200, 180);
		self.context.lineTo(250, 280);
		self.context.stroke();
	}
};