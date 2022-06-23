// hình vuông
function square(){
    document.getElementById("square-err").innerHTML = "";
    document.getElementById("square-perimeter").innerHTML = "";
    document.getElementById("square-area").innerHTML = "";
    let square_edge = document.forms["square-form"]["square-edge"].value;
    if( square_edge ==""){
        document.getElementById("square-err").innerHTML = "Vui lòng nhập cạnh";
    }
    else if(isNaN(square_edge)){
        document.getElementById("square-err").innerHTML = "Cạnh không hợp lệ, vui lòng nhập lại";
    }
    else if(parseFloat(square_edge)<=0){
        document.getElementById("square-err").innerHTML = "Cạnh không hợp lệ, vui lòng nhập lại";
    }
    else{
        let square_perimeter = parseFloat(square_edge) * 4;
        let square_area = parseFloat(square_edge) * parseFloat(square_edge);
        document.getElementById("square-perimeter").innerHTML = "chu vi hình vuông là: " + square_perimeter;
        document.getElementById("square-area").innerHTML = "diện tích hình vuông là: " + square_area;
    }
}

//hinh tron
function circle(){
    document.getElementById("circle-err").innerHTML = "";
    document.getElementById("circle-perimeter").innerHTML = "";
    document.getElementById("circle-area").innerHTML = "";
    let radius = document.forms["circle-form"]["circle-radius"].value;
    let circle_radius =parseFloat(radius);
    if(radius == ""){
        document.getElementById("circle-err").innerHTML = "Vui lòng nhập bán kính";
        document.getElementById("circle-radius").style.border = "1px solid red";
    }
    else if(isNaN(radius)){
        document.getElementById("circle-err").innerHTML = "Bán kính không hợp lệ, vui lòng nhập lại";
    }
    else if(circle_radius<=0){
        document.getElementById("circle-err").innerHTML = "Bán kính không hợp lệ, vui lòng nhập lại";
    }
    else{
        let circle_perimeter = 2 * circle_radius * 3.14; //magic number
        let circle_area = circle_radius * circle_radius * 3.14;
        document.getElementById("circle-perimeter").innerHTML = "chu vi hình tròn là: " + circle_perimeter;
        document.getElementById("circle-area").innerHTML = "diện tích hình tròn là: " + circle_area;
    }
}

//hình tam giác
function triangle(){
    // document.getElementById("square-err").innerHTML = "";
    document.getElementById("triangle-perimeter").innerHTML = "";
    document.getElementById("triangle-area").innerHTML = "";
    let a = document.forms["triangle-form"]["edge-a"].value;
    let b = document.forms["triangle-form"]["edge-b"].value;
    let c = document.forms["triangle-form"]["edge-c"].value;
    if(a == "" || b == "" || c==""){
        alert("Vui lòng nhập cạnh");
    }
    else if(parseFloat(a)<=0 || parseFloat(b)<=0 || parseFloat(c)<=0){
        alert("Cạnh không hợp lệ, vui lòng nhập lại");
    }
    else if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Cạnh không hợp lệ, vui lòng nhập lại");
    }
    else if((a+b)<c||(a+c)<b||(b+c)<a){
        alert("Không phải hình tam giác, vui lòng nhập lại");
    }
    else{
        let P = (a + b + c) / 2;
        let triangle_perimeter = a + b + c;
        let triangle_area = Math.sqrt(P * (P - a) * (P - b) * (P - c))
        document.getElementById("triangle-perimeter").innerHTML = "Chu vi hình tam giác là: " + triangle_perimeter;
        document.getElementById("triangle-area").innerHTML = "Diện tích tam giác là: " + triangle_area;
    }
}

//hình thang
function trapezoid(){
    document.getElementById("trapezoid-perimeter").innerHTML = "";
    document.getElementById("trapezoid-area").innerHTML = "";
    let a =document.forms["trapezoid-form"]["edge-a"].value;
    let b =document.forms["trapezoid-form"]["edge-b"].value;
    let c =document.forms["trapezoid-form"]["edge-c"].value;
    let d =document.forms["trapezoid-form"]["edge-d"].value;
    let h =document.forms["trapezoid-form"]["edge-h"].value;
    if(a == "" || b == "" || c=="" || d == "" || h==""){
        alert("Vui lòng nhập cạnh");
    }
    else if(parseFloat(a)<=0 || parseFloat(b)<=0 || parseFloat(c)<=0 || parseFloat(d)<=0 || parseFloat(h)<=0){
        alert("Cạnh không hợp lệ, vui lòng nhập lại");
    }
    else if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(h)){
        alert("Cạnh không hợp lệ, vui lòng nhập lại");
    }
    else {
        let trapezoid_perimeter = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) ;
        let trapezoid_area = (parseFloat(a) + parseFloat(b)) * parseFloat(h) / 2;
        document.getElementById("trapezoid-perimeter").innerHTML = "chu vi hình thang là: " + trapezoid_perimeter;
        document.getElementById("trapezoid-area").innerHTML = "diện tích hình thang là: " + trapezoid_area;
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }