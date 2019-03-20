var num= function checknum(){
    
    if ( num>=0 && num<=100 );
    {
    alert (true); 
    }
    else
    {
    alert (false);
    }

    function score(){
    checknum();
    if (checknum = false)
    {
    alert =("Your score is invalid,please enter your score again");
    score= prompt("Enter your score");
    }
    else{
    alert ("your score is + num")
    }
    }
    function grade(){
    score();


    var grade = parseFloat(prompt("enter your score:"))

    if (grade >=80 && grade <100)
    {
    alert ("grade A");
    }
    else if (grade >=60 && grade <80)
    {
    alert ("grade B");
    }
    else if (grade >=40 && grade <60){
    alert ("grade C");
    }
    else if (grade >=20 && grade <40){
    alert ("grade D");
    }
    else if (grade >=0 && grade <20)
    {
    alert ("grade E");
    }
    else
    {
        alert ("error")
    }
    
    


    
    var grades = parseFloat(prompt("Input your marks: "))
    
    if(grades >=0 && grades < 20 ){
        alert("Grade E");
    } else if
        (grades >=20 && grades < 40){
            alert("Grade D");}
        else if 
            (grades >=40 && grades < 60){
                alert("Grade C");}
            else if 
                (grades >=60 && grades < 80){
                    alert("Grade B");}
            else if
                (grades >=80 && grades < 100){
                    alert("Grade A");}
            else 
                {alert("error")
            }

            //..BMI ./
            
            var ht= parseFloat(prompt("input your height"));
            var wt= parseFloat(prompt("input your weight"));
            var convert= function (wt, ht){
                return wt/(ht*ht)
            }
            alert (convert(ht, wt)); 

            //..temperature
            var celcius= parseFloat(prompt("enter temperature in degrees celcius"));
            var farenheight= function(celcius){
                return celcius*1.8+32 ;
            }
            var result= farenheight(celcius)
            alert("the temperature in farenheight is" + result +".");
