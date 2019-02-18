import React, { Component } from 'react';


class Good extends Component {
    

 
     componentDidMount(){
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        console.log(ctx);
        what(ctx);
     }
      render(){
          return (
              <div>  <canvas ref="canvas" width={640} height={400} />
              </div>
          )
      }

    }
     function what(ctx){
        ctx.fillStyle = 'white';
        ctx.font = '18px serif';
        
        var ghost = {
          x: 25,
          y: 25,
          moveUp:    function() { this.y -= 25 },
          moveDown:  function() { this.y += 25 },
          moveLeft:  function() { this.x -= 25 },
          moveRight: function() { this.x += 25 },
        }
        
        function draw(ghost) {
          var img = new Image();
          img.onload = function() { 
             ctx.drawImage(img, ghost.x, ghost.y, 50, 50); 
          }
          //img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
          img.src = "https://pkimgcdn.peekyou.com/b4a60c60e4bc2b28be3ad0dd618215d5.jpeg";
        }
        
        
        document.onkeydown = function(e) {
          switch (e.keyCode) {
            case 38: ghost.moveUp();    console.log('up',    ghost); break;
            case 40: ghost.moveDown();  console.log('down',  ghost); break;
            case 37: ghost.moveLeft();  console.log('left',  ghost); break;
            case 39: ghost.moveRight(); console.log('right', ghost); break;
          }
          updateCanvas();
        }
        
        function updateCanvas() {
          ctx.clearRect(0,0,1500,1700);
          //ctx.fillText("Ghost_x: " + ghost.x, 580,40);
          //ctx.fillText("Ghost_y: " + ghost.y, 580,60);
    
          draw(ghost)
        }
        
        updateCanvas()

     }

    export default Good;