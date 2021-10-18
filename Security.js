class Security {

    constructor(){

       /* this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white'); */ 

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

       /* this.access2 = createInput("Code2")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  */

        this.button2 = createButton('Check');
        this.button2.position(150,520);
        this.button2.style('background', 'lightgrey');

       /* this.access3 = createInput("Code3")
        this.access3.position(100,290);
        this.access3.style('background', 'white'); */ 

        //Debug the code to create the third button.
        this.button3 = createButton('Check');
        this.button3.position(250,520);
        this.button3.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
        
            if(system.authenticate(( bu=createSprite(fj.x,fj.y,30,30)) )){
                //this.button1.hide();
               // this.access1.hide();
              // this.button1.scale=0.5
              // bu=createSprite(500,350,30,30)
                  bu.velocityY=-10
                
               // score++;
               
             
               // accessCode1,this.access1.value
            }
        });

       
       /* if(mouseIsPressed){
            bu.velocityY=-5
        }else{
            bu.velocityY=0
        }*/




        this.button2.mousePressed(() => {

            if(system.authenticate((fj))){
              
                   fj.velocityX=-4
                   
                   
                               }
        });

       /* if(mousePressedOver()){
            fj.velocityX=-10
       }else{
            fj.velocityX=0
        }*/

        if(mousePressedOver()){
           fj.velocityX=-10
        }else{
            fj.x-=0
        }

        // On mousePressed, check the input condition. 
        this.button3.mousePressed(() => {
            if(system.authenticate((fj))){
               fj.velocityX=4 
            }
        }); 

    }
}