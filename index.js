var flag=0;
function showMenu(){
if (flag === 0){
    document.getElementById("navigation-men").style.display="block";
    flag=1;
}
else {
    document.getElementById("navigation-men").style.display="none";
    flag=0;

}

}