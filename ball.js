export default class Ball{

	constructor(game){

		this.image = document.getElementById('img_ball');

		this.speed = {
			x: 2,
			y: 2
		};

		this.position = {
			x: 10,
			y: 10
		};

		this.size = 50;

		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;

		this.game = game;
	}

	draw(ctx){

		ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
	}

	update(){

		this.position.x += this.speed.x;
		this.position.y += this.speed.y;


		//check if ball hits the wall on left/right
		if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
			this.speed.x = - this.speed.x;
		}

		//check if ball hits the wall on top/bottom
		if(this.position.y + this.size > this.gameHeight || this.position.y < 0){
			this.speed.y = - this.speed.y;
		}

		//check if ball hits the paddle
		let bottomOfBall = this.position.y + this.size;
		let topOfPaddle = this.game.paddle.position.y;
		let leftSideOfPaddle = this.game.paddle.position.x;
		let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

		if(bottomOfBall >= topOfPaddle && this.position.x >= leftSideOfPaddle && this.position.x <= rightSideOfPaddle){
			this.speed.y = -this.speed.y;
      		this.position.y = this.game.paddle.position.y - this.size;
		}
	}
}