function submittable() {
  var x = document.getElementById("inp").value;
  for (i=1; i<17; i++) {
    document.getElementById(i).innerHTML = i*x;
  }
}

function dis(val)
         {
             document.getElementById("result").value+=val
         }

         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }

         function clr()
         {
             document.getElementById("result").value = ""
         }
