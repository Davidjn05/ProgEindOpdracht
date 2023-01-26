
  class App
  {
      runApplication()
      {
        let randomgetal = Math.random();
          console.log("Hello world!");
          let canvas = document.getElementById("canvasId")
          console.log(canvas)
          let g = canvas.getContext("2d");
      
          var ctx = canvas.getContext("2d");
          g.fillStyle = "#DCBBD5" 
          g.fillRect(0,0,1200,1200)
  
          g.font = "30px Arial";
          g.fillText("vrolijk kerst feest", 40, 50);
         
          this.tekenHuis(g,0,400 )
          this.tekenHuis(g, 0,0)
          
          this.tekenHuis(g, 600,200)
          this.boom(g,0,200)
          this.boom(g,0,250)
         this.trunk(g,0,300)
          this.boom(g,600,400)
          this.boom(g,600,450)

          this.boom(g,800,1)
          this.boom(g,800,-30)
          this.trunk(g,600,500)
          this.trunk(g,800,60)
          g.fillStyle = "#964B00"
         
          g.fillStyle = "lightgreen";
          g.fillStyle = ""
        g.font = "30px cursive";
        g.fillText("FIJN KERSTFEEST ", 800, 300);
        g.fillStyle = "yellow"
        
         
      }

     trunk(g,x,y){
        g.fillStyle="brown";

        g.fillRect(100+x,50+y,50,50)


       

     }
      boom(g,x,y){
  
          g.fillStyle = "green";
      
          g.beginPath();
      
          g.moveTo(30 + x, 120 + y);
      
          g.lineTo(130 + x, 20 + y);
      
          g.lineTo(230 + x, 120 + y);
      
          g.fill();
  
        }
      tekenHuis(g, x, y){
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(150+x,50+y);
        g.lineTo(100+x,150+y);
        g.lineTo(300+x,200+y);
        g.lineTo(350+x,100+y);
        g.closePath();
        g.stroke();
        g.fill()
  
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(350+x,100+y);
        g.lineTo(400+x,150+y);
        g.lineTo(400+x,250+y);
        g.lineTo(300+x,300+y);
        g.lineTo(100+x,250+y);
        g.lineTo(100+x,150+y);
        g.lineTo(300+x,200+y);
        g.closePath();
        g.stroke();
        g.fill()
  
        g.beginPath()
        g.moveTo(400+x,150+y);
        g.lineTo(300+x,200+y);
        g.lineTo(300+x,300+y);
        g.lineTo(400+x,250+y);
        g.closePath();
        g.stroke();
  
        g.beginPath()
        g.moveTo(125+x,175+y);
        g.lineTo(275+x,212+y);
        g.lineTo(275+x,262+y);
        g.lineTo(125+x,225+y);
        g.closePath();
        g.stroke();
  
        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(125+x,175+y);
        g.lineTo(275+x,212+y);
        g.lineTo(275+x,262+y);
        g.lineTo(125+x,225+y);
        g.closePath();
        g.stroke();
        g.fill()


  
        g.beginPath()
        g.moveTo(200+x,193+y);
        g.lineTo(200+x,243+y);
        g.closePath();
        g.stroke();
  
        g.beginPath()
        g.moveTo(125+x,200+y);
        g.lineTo(275+x,237+y);
        g.closePath();
        g.stroke();
  
        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(325+x,217+y);
        g.lineTo(380+x,190+y);
        g.lineTo(380+x,260+y);
        g.lineTo(325+x,287+y)
        ;
        g.closePath();
        g.stroke();
        g.fill()
        
    
      }
    }
  let app = new App();
  
  app.runApplication();