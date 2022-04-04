function check_value()
{
    switch(document.test.field.value)
    {
        case "one":
         
            document.getElementById("main").innerHTML = "<img src='boondockSaints.jpg'>";
            break;

        case "two":

            document.getElementById("main").innerHTML = "<img src='Seahawks.jpg'>"; 
            break;

        case "three":

            document.getElementById("main").innerHTML = "<img src='Seahawks.jpg'>"; 
            break;
    }
}