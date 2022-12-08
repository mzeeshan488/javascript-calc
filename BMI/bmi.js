let button = document.getElementById('btn');
button.addEventListener('click', () =>{
   const height= parseInt (document.getElementById('height',value));
   const weight= parseInt (document.getElementById('weight',value));
   const result= document.getElementById('output');
   let height_status = false, weight_status=false;

   if(height === '' || is NaN (height)|| (height <=0)){
    document.getElementById('height_error').innerHTML='Please provide a valid height'
   }
});