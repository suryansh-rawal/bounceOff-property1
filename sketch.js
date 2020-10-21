var mrect,frect
 function setup()
  { createCanvas(600,600)
     mrect=createSprite(100,100,80,30)
      frect=createSprite(500,100,30,80)
       mrect.shapeColor="green"
        frect.shapeColor="green"
         mrect.debug=true 
         frect.debug=true 
         mrect.velocityX=5
          frect.velocityX=-5 
        }
         function draw()
         { 
           background("yellow")
            console.log(mrect.x-frect.x)
             if(mrect.x-frect.x < frect.width/2+mrect.width/2 && frect.x-mrect.x < frect.width/2+mrect.width/2 )
              { mrect.velocityX=mrect.velocityX*(-1)
                 frect.velocityX=frect.velocityX*(-1) }
               if(mrect.y-frect.y < frect.height/2+mrect.height/2
                 && frect.y-mrect.y < frect.height/2+mrect.height/2 )
                  { mrect.velocityY=mrect.velocityY*(-1)
                     frect.velocityY=frect.velocityY*(-1)
                     } drawSprites()
                     }