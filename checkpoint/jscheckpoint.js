// function tinhGiaithua()
// {
    // var n;
    // var  gt=1;
    // var n = document.getElementById("sogiaithua").value;
    // for(var i = 1; i<=5;i++)
    // {   
    //     gt*=i;
    //     gt=i*(i-1);
    //     // return gt;
        
    //     console.log(gt);
    // }
// }
function getGT(){
    var n=document.getElementById("sogiaithua").value;
    
    var gt=1;
    for(let i=1;i<=n;i++)
    {
        gt*=i;
    }
    if(n<=0)
    {
        document.getElementById("dapanc1").innerHTML="số phải lớn hơn 0";
    }
    else
    {
        document.getElementById("dapanc1").innerHTML=gt;
    }
    
}
function getTamgiacc()
{
    var FF = document.getElementById("tamgiacrong").value;
    for(let i = 1; i<=FF; i++)
    {
        for(var k = FF; k>i; k--)
        {
    //         document.write("&nbsp;&nbsp;");
            document.getElementById("dapanc2").innerHTML=("&nbsp;&nbsp;")+("*");
        }
        for(let j = 1; j<i*2-1;j++)
        {
            if(i==1||i==FF||j==1||j==i*2-1)
            {
    //             document.write("*");
                document.getElementById("dapanc2").innerHTML=("*");
    //         }
    //         else
    //         {
    //             document.write("&nbsp;&nbsp");
                document.getElementById("dapanc2").innerHTML=("&nbsp;&nbsp")+("*");
            }
        }
    }
    // document.write("<br />");
    document.getElementById("dapanc2").innerHTML=("<br />")+("*");
}
// document.getElementById("dapanc2").innerHTML="*";



function getTamgiac(){
    var n = parseInt(document.getElementById("tamgiacrong").value);
    // prompt()
let string = "";
//Loop
for (let i = 1; i <= n; i++) {
  //Ve o trong
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  //Ve sao
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);

}


 

   

