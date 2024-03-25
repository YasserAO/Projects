
//External SCript declaration







//Scripts
// Delete Margin When input is presented


// Event Listners
      // and Event listner to change the window widths when the window is resized
      window.addEventListener('resize',updatevariable);

      //Onload Function to update the page widths
      window.onload= updatevariable();
      // window.onload= updateMargin;
      
      
      


// a Function that Shows the inner Width
    function showwidth(){
    console.log(window.innerWidth);
    }







// Funtions
      // Shiftup Function for Upwords Transition
          
          
            
          
          
      //Toggle FUnction
          function fieldToggle(){
            const element = document.getElementById('addtasktemp');
            addbuttonListnerButton();
            if(element){
              deleteTopbar(300);
            }
            else{
              topbarToggle(300);
            }
          }
      //Focused Area text in input field that changes the Icon

      //Top BarToggle

      function topbarToggle(timer){
        const element= document.getElementById('tasklist');

        const creatediv = document.createElement('div');
        creatediv.classList.add('addbutton-bar');
        creatediv.setAttribute('id','addtasktemp');
        const icon = document.createElement('textarea');
        icon.setAttribute('id','taskinputfield');
        icon.setAttribute('placeholder',"What's on your Mind ");
        icon.setAttribute('onfocus','');
        icon.setAttribute('onkeypress','pressed(event)');
        icon.classList.add('input-field');
        const butdiv=document.createElement('div');
        const butimg=document.createElement('img');
        butimg.setAttribute('src','data/img/add.svg');
        butimg.setAttribute('class','buttons');
        butimg.setAttribute('id','toggleAddButton');
        butimg.setAttribute('onclick','addtask()');
        
        
        butdiv.appendChild(butimg);
        butdiv.setAttribute('class','addbutton-toggle');




        creatediv.appendChild(icon);
        creatediv.appendChild(butdiv);
        
        creatediv.style.animation='show 600ms 50ms ease forwards';
        element.appendChild(creatediv);



      }



      // addeventListner function
      function addbuttonListnerButton(){
         const element = document.getElementById("addtasktemp");
         const imag= document.getElementById("addbutton");
         if(!element){
          imag.setAttribute('src',"data/img/down.svg");

         }
         else{
          imag.setAttribute('src',"data/img/add.svg");
         }
        
        }


    //delete The Top Addbutton bar
    function deleteTopbar(timer){
        const element= document.getElementById('addtasktemp');
        if(element){
          element.style.opacity='1';
          
          element.style.animation='hide 500ms 50ms ease forwards';
          
          
               
               setTimeout(function(){
                element.remove();
      
               },timer);}

  
        }
      
    

    //updateVariable FUnction
      //inner function to get a css varial by name (set or get )
        function cssroot(methode,name,value){
          const root= document.documentElement;
          if (methode==1){
              root.style.setProperty(`--${name}`, value);
              // console.log(`%cproperty %c--${name} %cwas change to %c${value}`,'color:white;','color:red;','color:white;','color:blue;');
              
          }
          else if(methode==2){
            return getComputedStyle(root).getPropertyValue(`--${name}`).trim();

          }
          else {
            console.log("Wrong methode");
          }
        }
      function updatevariable(){

    const factor = cssroot(2,'calibre');
    const vw= window.innerWidth;
    const mw= cssroot(2,'wmain');

    if (vw>factor){
      cssroot(1,'wmain',factor+"px");
      // console.log('the view width is higher than the calibre, width is set to calibre');
    }
    else {
      cssroot(1,'wmain',vw*0.8+"px");
      // console.log('view width is less than the calibre , the width is set to viw width');
    }

  

  

        }

      // pressed function for Hit enter
      function pressed(event){
  if(event.key=='Enter'){
    event.preventDefault();   
    addtask();
  }
  
        }

      // Addtask Function
      function addtask(){
        

  //creating divs and inputs
  const content=document.getElementById('taskinputfield');
  if(content){
    if(content.value!=''){
      const parentdiv=document.getElementById('tasklist');
    
    
      const creatediv=document.createElement('div');
        creatediv.classList.add('item-container');
        creatediv.id='con';
      const createtextdiv=document.createElement('div');
        createtextdiv.classList.add('items');
        createtextdiv.id='te';
        createtextdiv.setAttribute('onclick','checkeditem(this)');
      const createinput=document.createElement('input');
        createinput.classList.add('taskcheckmark');
        createinput.type='checkbox';
        createinput.id='';
        createinput.setAttribute('onclick','checkedbox(this)');
    
        createtextdiv.textContent=content.value;
      creatediv.appendChild(createtextdiv);
      creatediv.appendChild(createinput);
    
      parentdiv.appendChild(creatediv);
      updateid('addtask');
      }
      content.value='';
      
      
      
  }
  

  

  

  //assigning inputs into divs

    
  

        }


      // CheckedBox Function for Line-through
        function checkedbox(element){
        updateid('checkedbox');
        let x=element.id.length;
        let id1=element.id[x-1];
        let c=document.getElementById(`text${id1}`);

      if(element.checked==true){
        c.style.animation='linecross 300ms ease forwards';
        setTimeout(function(){c.style.textDecoration='line-through';c.style.color='grey';},300);
        //  c.style.textDecoration="line-through";
        //  c.style.color="grey";
      }
      else{
        c.style.animation='delinecross  300ms ease forwards';
        setTimeout(function(){c.style.textDecoration='none';c.style.color='black';},300);
      }
        }


      // CheckedItemBox to check the box when the whole div is clicked

          function checkeditem(element){
        updateid('checkitem');
        let x=element.id.length;
        let id1=element.id[x-1];
        let c=document.getElementById(`input${id1}`);
        c.checked=!c.checked;
        checkedbox(c);  
          }


      // Deleteitem Function to Delete The checkek (done) tasks 

      function Deleteitem(){
        let b=getchecked();
        b.forEach(b => {
          b.style.animation='hide 300ms ease forwards';
          b.addEventListener('animationend',function(){
            b.remove();
          })
          
          
        });

      }
        
    
      // Update Items ID's Function

        function updateid(name){
  if(name=='clearit'){
  console.clear();
  }
  const itemsdiv=document.querySelectorAll('.item-container');
  const text1=document.querySelectorAll('.items');
  const input1=document.querySelectorAll('.taskcheckmark');
  // console.log(itemsdiv.length);
  if(name!=null){
  console.log(`the update was called by the function ${name}`);
  }
  
  for(let i=0;i<itemsdiv.length;i++){
    // console.log('try'+i);
    const k=i+1;
    itemsdiv[i].id=`container${k}`;
    text1[i].id=`text${k}`;
    input1[i].id=`input${k}`;
    // console.log(`we have container${k} text${k} input${k}` );
    }
  }



    //Get the checked containers id
    function getchecked(){
      const containers=document.querySelectorAll('.item-container');
      const inputs=document.querySelectorAll('.taskcheckmark');
      let out=[];
      let k=0;
      updateid();
        for (let i=0;i<containers.length;i++){
            if(inputs[i].checked==true){
              out[i]=containers[i];

            

            }
          }
          return out;
        }



   
    

