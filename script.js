let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button=>
{
  button.addEventListener('click' ,(e)=>
  {
   if(string === "1+" && e.target.innerHTML === '=')
    {
      string = "Never Settle";
      input.value = string;
      input.style.color = "blue";
      input.style.backgroundColor = "red";
      input.style.fontFamily = "arial";
      input.style.fontSize = "2rem";
      input.style.fontWeight = "500";
      setTimeout(()=>
      {
      input.style.backgroundColor = "white";},5000);
    }
    else if(e.target.innerHTML == "=")
    {
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML == "AC")
    {
      string = "";
      input.value = string;
    }
    else if(e.target.innerHTML == "DEL")
    {
      string = string.substring(0,string.length-1);
      input.value = string;
    }
    else 
    {
      string += e.target.innerHTML;
      input.value = string;
    }
  })
})

