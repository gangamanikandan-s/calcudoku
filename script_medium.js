// synopsis

// 14-75 game logic
// 82-217 html page code(global part);
// 221-250 given numbers push in array(bigArr);
// 252-479 check row and column;
// 485-494 if user given number remove then remove that number in array(bigArr) 
// 495-500 restart game;
// 502-548 hint;
// 550-566 winning;
// 568-671 alert!;

// game logic and backend works
var answerList = [];
var startTime;
var endTime;
var hint_number=3;
var hintPress=0;
function numberGenerate() {



    answerList = [];

    for (var i = 0; i < 4; i++) {
        var row = []

        while (row.length < 4) {
            random = Math.floor(Math.random() * 4) + 1;
            if (row.indexOf(random) === -1) {
                row.push(random)

            }
        }
        answerList.push(row);
    }
    var col1 = [];
    var col2 = [];
    var col3 = [];
    var col4 = [];
    for (var i = 0; i < answerList.length; i++) {


        for (var j = 0; j < answerList[i].length; j++) {
            if (j == 0) {
                col1.push(answerList[i][j])
            } else if (j == 1) {
                col2.push(answerList[i][j])
            } else if (j == 2) {
                col3.push(answerList[i][j])

            } else if (j == 3) {
                col4.push(answerList[i][j])

            }
        }
    }
   

    var cola = new Set(col1);
    var colb = new Set(col2);
    var colc = new Set(col3);
    var cold = new Set(col4);


    if (cola.size == 4 && colb.size == 4 && colc.size == 4 && cold.size == 4) {

    } else {
        numberGenerate()
    }
    startTime=new Date().getTime();
    countDown();


}
document.addEventListener("onload", numberGenerate());

 function __init__(){
    bigArr=[[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
 }
// game html part

// global start
var parent;
parent = document.getElementById("home1");
parent.setAttribute("id", "container");


// 
var child = document.createElement("div");
child.setAttribute("id", "table");
parent.appendChild(child);
for (var i = 1; i <= 4; i++) {

    for (var j = 1; j <= 4; j++) {
        var tableData = document.createElement("input");
        child.appendChild(tableData);
        tableData.setAttribute("class", "rowcol");
        tableData.setAttribute("id", "row" + i + "col" + j)
        tableData.setAttribute("type", "number");
        tableData.setAttribute("min", "1");
        tableData.setAttribute("max", "4");
        tableData.setAttribute("value", " ");
        tableData.setAttribute("data-id",i+""+j);
        tableData.setAttribute("oninput", "func(this)");
     
        tableData.setAttribute("onkeyup", "remove(this)");

    }
}

var link_zoho=document.createElement("a");
parent.appendChild(link_zoho);
var zoho_pic=document.createElement("img");
link_zoho.appendChild(zoho_pic);
var zoho_text=document.createElement("p");
var check_button=document.createElement("button");
parent.appendChild(check_button);


check_button.setAttribute("id","check_button");
check_button.setAttribute("onclick","do_you_want_check()");
check_button.innerText="check";

parent.appendChild(zoho_text);
zoho_text.setAttribute("id","zoho_text");
zoho_text.innerText="Your Life's Work, Powered By Our Life's Work"

zoho_pic.setAttribute("src","zoho1.png");
zoho_pic.setAttribute("id","zoho_img");

link_zoho.setAttribute("href","https://www.zoho.com/");
link_zoho.setAttribute("target","_blank")

var restart=document.createElement("button");
parent.appendChild(restart);
restart.setAttribute("id","restart");
restart.setAttribute("onclick","do_you_want_to_restart()");
var hint_button=document.createElement("div");
parent.appendChild(hint_button);
hint_button.setAttribute("id","hint_button");
hint_button.setAttribute("onclick","do_you_want_to_hint()");
var hint_point=document.createElement("span");
hint_button.appendChild(hint_point);
hint_point.innerText=hint_number;
hint_point.setAttribute("id","hint_point")
var hint_img=document.createElement("img");
hint_button.appendChild(hint_img);
hint_img.setAttribute("src","hint_button.png");
hint_img.setAttribute("id","hint_png");
var home_button=document.createElement("a");
home_button.setAttribute("href","index_menu.html");
home_button.setAttribute("id","home_button");
home_button.innerHTML="<i id=\"home_button_img\" class=\"fa-solid fa-house\"></i>";
document.getElementById("top-container").appendChild(home_button);





restart.innerText="restart";


for (var i=1;i<11;++i){
    var replace = document.createElement("div");
    child.appendChild(replace);
    replace.setAttribute("id", "replace"+i);
}

for (var i = 1; i < 8; i++) {
    var p = document.createElement("p");
    child.appendChild(p);
    p.setAttribute("id", "cage" + i + "");

}
var countDown1 = document.createElement("div");
parent.appendChild(countDown1);
countDown1.setAttribute("id", "countDown")



// 


var cage1 = answerList[0][0] + answerList[1][0];
document.getElementById("cage1").innerHTML = cage1.toString() + "+";
var cage2 = answerList[0][1] * answerList[0][2];
document.getElementById("cage2").innerHTML = cage2.toString() + "×";
var cage3 = answerList[0][3]+answerList[1][3];
document.getElementById("cage3").innerHTML = cage3.toString()+"+";
var cage4 = answerList[1][1]+answerList[2][0]+answerList[2][1];
document.getElementById("cage4").innerHTML = cage4.toString()+"+";
var cage5 = answerList[1][2] * answerList[2][2]*answerList[2][3];
document.getElementById("cage5").innerHTML = cage5.toString() + "×";
var cage6 = answerList[3][0]+answerList[3][1];
document.getElementById("cage6").innerHTML = cage6.toString()+"+";
var cage7 = answerList[3][2]+answerList[3][3];
document.getElementById("cage7").innerHTML = cage7.toString()+"+";




// 

var bigArr=[[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];


// global end
// given numbers push in array 
function func(element){
    let data=element.getAttribute("data-id");
    var row=Math.floor(data/10);
    var col=data%10;

    for(var i=0;i<4;i++){
        for (var j=0;j<4;j++){
            if(i==row-1&&j==col-1){
                
            if (element.value == 1 || element.value == 2 || element.value == 3 || element.value == 4) {
                if(element.value!=""){
                    bigArr[i][j]=Number(element.value)
                    
                    
                    
                }
               
            }
            else{
                element.value=""
            }
                
            }
        }
    }
    // checkRowCol();

}
// check row and col

function checkRowCol(){
var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var col1 = [];
var col2 = [];
var col3 = [];
var col4 = [];
    for (var i=0;i<4;i++){
        for (var j=0;j<4;j++){
            if (i==0){
                if (bigArr[i][j]!=0){
                    row1.push(bigArr[i][j]);
                }
                
            }
            else if (i==1){
                if (bigArr[i][j]!=0){
                    row2.push(bigArr[i][j]);
                }
                
            }else if (i==2){
                if (bigArr[i][j]!=0){
                    row3.push(bigArr[i][j]);
                }
                
            }else if (i==3){
                if (bigArr[i][j]!=0){
                    row4.push(bigArr[i][j]);
                }
                
            }if (j==0){
                if (bigArr[i][j]!=0){
                    col1.push(bigArr[i][j]);
                }
                
            }
            else if (j==1){
                if (bigArr[i][j]!=0){
                    col2.push(bigArr[i][j]);
                }
                
            }else if (j==2){
                if (bigArr[i][j]!=0){
                    col3.push(bigArr[i][j]);
                }
                
            }else if (j==3){
                if (bigArr[i][j]!=0){
                    col4.push(bigArr[i][j]);
                }
                
            }
            
        }
    }
    rowa=new Set(row1);
    rowb=new Set(row2);
    rowc=new Set(row3);
    rowd=new Set(row4);
    cola=new Set(col1);
    colb=new Set(col2);
    colc=new Set(col3);
    cold=new Set(col4);
    if (rowa.size==4&&rowb.size==4&&rowc.size==4&&rowd.size==4&&cola.size==4&&colb.size==4&&colc.size==4&&cold.size==4){
        console.log("hii")
        console.log(Number(document.getElementById("row1col1").value) + Number(document.getElementById("row2col1").value)==cage1)
        console.log(Number(document.getElementById("row1col2").value) *Number(document.getElementById("row1col3").value) == cage2 )
        console.log(Number(document.getElementById("row1col4").value)+Number(document.getElementById("row2col4").value) == cage3)
        console.log(Number(document.getElementById("row2col2").value) + Number(document.getElementById("row3col1").value)+Number(document.getElementById("row3col2").value) == cage4 )
        console.log(Number(document.getElementById("row2col3").value)*Number(document.getElementById("row3col3").value)*Number(document.getElementById("row3col4").value)==cage5);
        console.log(Number(document.getElementById("row4col1").value) + Number(document.getElementById("row4col2").value) == cage6);
        console.log(Number(document.getElementById("row4col3").value)+Number(document.getElementById("row4col4").value)==cage7);
        if (Number(document.getElementById("row1col1").value) + Number(document.getElementById("row2col1").value) == cage1 && Number(document.getElementById("row1col2").value) *Number(document.getElementById("row1col3").value) == cage2 && Number(document.getElementById("row1col4").value)+Number(document.getElementById("row2col4").value) == cage3 && Number(document.getElementById("row2col2").value) + Number(document.getElementById("row3col1").value)+Number(document.getElementById("row3col2").value) == cage4 && Number(document.getElementById("row2col3").value)*Number(document.getElementById("row3col3").value)*Number(document.getElementById("row3col4").value) == cage5 && Number(document.getElementById("row4col1").value) + Number(document.getElementById("row4col2").value) == cage6&& Number(document.getElementById("row4col3").value)+Number(document.getElementById("row4col4").value)==cage7) {
           console.log("win");
            winning()
            endTime= new Date().getTime();
            var win=document.createElement("div");
        parent.appendChild(win);
        win.setAttribute("id","win");
        var winning_text=document.createElement("div");
        parent.appendChild(winning_text);
        winning_text.setAttribute("id","winningText");
        winning_text.innerText="Congratulations you won!!";
        var time=document.createElement("div");
        parent.appendChild(time);
        time.setAttribute("id","time");
        var star=document.createElement("div");
        parent.appendChild(star);
        star.setAttribute("id","star");
        var win_gift=document.createElement("img");
        win_gift.setAttribute("id","win_gift");
        win_gift.setAttribute("src","winning.png");
        parent.appendChild(win_gift)
        var xmark=document.createElement("i");
        xmark.setAttribute("class","fa-solid fa-xmark");
        xmark.setAttribute("id","xmark");
        xmark.setAttribute("onclick","xmark()");
        parent.appendChild(xmark);


        

        endTime= new Date().getTime();
            var sec=Math.floor((endTime-startTime)/1000);
            var minute=Math.floor(sec/60);
            second=sec%60
            var second_recorrect;
            var minute_recorrect;
            
            if(minute>9){
                minute_recorrect=minute;
            }
            else{
                minute_recorrect="0"+minute;
            }
            if(second>9){
                second_recorrect=second;
            }
            else{
                second_recorrect="0"+second;
            }
            time.innerText="Completed-in:  "+minute_recorrect+":"+second_recorrect+"Sec";
            if (minute<2){
                star.innerText="Star: ";
                var star_1=document.createElement("img");
                star_1.setAttribute("id","star1");
                star_1.setAttribute("src","star.png");
                var star_2=document.createElement("img");
                star_2.setAttribute("id","star2");
                star_2.setAttribute("src","star.png");
                var star_3=document.createElement("img");
                star_3.setAttribute("id","star3");
                star_3.setAttribute("src","star.png");
                var star_4=document.createElement("img");
                star_4.setAttribute("id","star4");
                star_4.setAttribute("src","star.png");
                var star_5=document.createElement("img");
                star_5.setAttribute("id","star5");
                star_5.setAttribute("src","star.png");
                parent.appendChild(star_1);
                parent.appendChild(star_2);
                parent.appendChild(star_3);
                parent.appendChild(star_4);
                parent.appendChild(star_5);



            }
            else if(minute>2&&minute<4){
                star.innerText="star: ";
                var star_1=document.createElement("img");
                star_1.setAttribute("id","star1");
                star_1.setAttribute("src","star.png");
                var star_2=document.createElement("img");
                star_2.setAttribute("id","star2");
                star_2.setAttribute("src","star.png");
                var star_3=document.createElement("img");
                star_3.setAttribute("id","star3");
                star_3.setAttribute("src","star.png");
                parent.appendChild(star_2);
                parent.appendChild(star_3);

            }
            else {
                star.innerHTML="star: "
                var star_1=document.createElement("img");
                star_1.setAttribute("id","star1");
                star_1.setAttribute("src","star.png");
                parent.appendChild(star_1);

            }
            
            

            
    
        }
        else{
        var invalid=document.createElement("div");
            parent.appendChild(invalid);
            invalid.setAttribute("id","invalid");
            var invalid_triangle=document.createElement("div");
            parent.appendChild(invalid_triangle);
            invalid_triangle.setAttribute("id","triangle");
            invalid.innerText="given numbers are wrong..."; 
            var xmark=document.createElement("i");
            xmark.setAttribute("class","fa-solid fa-xmark");
            xmark.setAttribute("id","checkElement");
            xmark.setAttribute("onclick","removeCheckElement()");  
            parent.appendChild(xmark);  
            
            }
        }
        else{

        
        var numbers_there=0;
        for(var i=0;i<4;i++){
            for(var j=0;j<4;j++){
                if (bigArr[i][j]!=0){
                    numbers_there++;
                }
            }
        }
        if(numbers_there>0){
            var invalid=document.createElement("div");
            parent.appendChild(invalid);
            invalid.setAttribute("id","invalid");
            var invalid_triangle=document.createElement("div");
            parent.appendChild(invalid_triangle);
            invalid_triangle.setAttribute("id","triangle");
            invalid.innerText="given numbers are wrong...";   
            var xmark=document.createElement("i");
            xmark.setAttribute("class","fa-solid fa-xmark");
            xmark.setAttribute("id","checkElement");
            xmark.setAttribute("onclick","removeCheckElement()");  
            parent.appendChild(xmark); 
        }
        else{
            var invalid=document.createElement("div");
            parent.appendChild(invalid);
            invalid.setAttribute("id","invalid");
            var invalid_triangle=document.createElement("div");
            parent.appendChild(invalid_triangle);
            invalid_triangle.setAttribute("id","triangle");
            invalid.innerText="Please enter a number..";
            var xmark=document.createElement("i");
            xmark.setAttribute("class","fa-solid fa-xmark");
            xmark.setAttribute("id","checkElement");
            xmark.setAttribute("onclick","removeCheckElement()");  
            parent.appendChild(xmark);
        }
    }
        
}
   
    
    

// if user given number is remove then remove that number in array
function remove(element) {
    if (event.key=="Backspace"){
        let data=element.getAttribute("data-id");
        var row=Math.floor(data/10);
        var col=data%10;
        bigArr[row-1][col-1]=0;
        element.style.color="green"
    }
    
}
// restart
function restart_button(){

    window.location.reload();

}
// hint
var rowCol=[1+""+4,2+""+2,3+""+1,4+""+3];
function hint(){
    if(hint_number>0){
     var random_row=(Math.floor(Math.random()*4))+1;
     var random_col=(Math.floor(Math.random()*4))+1;
     
    
   

    // var random_row=0;
    // var random_col=2
  
   
    if(!(rowCol.includes(random_row+""+random_col))){
        document.getElementById("row"+random_row+"col"+random_col).value=answerList[random_row-1][random_col-1];
        document.getElementById("row"+random_row+"col"+random_col).setAttribute("disabled","disabled");
        func(document.getElementById("row"+random_row+"col"+random_col))
        rowCol.push(random_row+""+random_col);

        hint_number--;
         hint_point.innerText=hint_number;
         hintPress+=10000;

    }
    else{
        hint()
    }
    var grayTop=["21","24","32","33"];
    for (var i=0;i<grayTop.length;i++){
        if(grayTop[i]==random_row+""+random_col){
            document.getElementById("row"+random_row+"col"+random_col).style.borderTop="6px solid #ddd";
            break;
        }
    }
    var grayLeft=["13","32","34","42","44"]
    for (var j=0;j<grayLeft.length;j++){
        if(grayLeft[j]==random_row+""+random_col){
            document.getElementById("row"+random_row+"col"+random_col).style.borderLeft="6px solid #ddd";
            break;
        }
    }
   
   
    
   
}
}
// winning
function winning() {
   
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            var disable = document.getElementById("row" + i + "col" + j);
            disable.setAttribute("disabled", "disabled");

        }
        

    }
    document.getElementById("row2col1").style.borderTop = "6px solid #ddd";
    document.getElementById("row2col4").style.borderTop = "6px solid #ddd";
    document.getElementById("row3col2").style.borderTop = "6px solid #ddd";
    document.getElementById("row3col3").style.borderTop = "6px solid #ddd";
    document.getElementById("row1col3").style.borderLeft = "6px solid #ddd";
    document.getElementById("row3col2").style.borderLeft = "6px solid #ddd";
    document.getElementById("row3col4").style.borderLeft = "6px solid #ddd";
    document.getElementById("row4col2").style.borderLeft = "6px solid #ddd";
    document.getElementById("row4col4").style.borderLeft = "6px solid #ddd";
}
function xmark(){
    window.location.reload();
}
// alert
function do_you_want_to_hint(){
    document.getElementById("check_button").setAttribute("disabled","disabled");
    document.getElementById("restart").setAttribute("disabled","disabled");
    document.getElementById("hint_button").setAttribute("onclick","");
    var confirm=document.createElement("div");
    confirm.setAttribute("id","confirm");
    parent.appendChild(confirm);
    var text=document.createElement("p");
    text.innerText="Confirm";
    text.setAttribute("id","text");
    parent.appendChild(text);
    var question=document.createElement("img");
    question.setAttribute("src","question.png");
    question.setAttribute("id","question");
    parent.appendChild(question);
    var ask=document.createElement("p");
    ask.setAttribute("id","ask");
    ask.innerText="Please confirm before proceed Do you want to Hint?";
    parent.appendChild(ask);
    var no=document.createElement("button");
    no.setAttribute("onclick","removeElement()");
    no.setAttribute("id","no");
    no.innerText="No";
    parent.appendChild(no);
    var yes=document.createElement("button");
    yes.setAttribute("id","yes");
    yes.setAttribute("onclick","hint(),removeElement()");
    parent.appendChild(yes);
    console.log("kii")
    yes.innerText="Yes";
}
function removeElement(){
    document.getElementById("confirm").remove();
    document.getElementById("text").remove();
    document.getElementById("ask").remove();
    document.getElementById("no").remove();
    document.getElementById("question").remove();
    document.getElementById("yes").remove();
    // document.getElementById("check_button").removeAttribute("disabled");
    document.getElementById("restart").removeAttribute("disabled");
    document.getElementById("hint_button").setAttribute("onclick","do_you_want_to_hint()");


}
function do_you_want_to_restart(){
    document.getElementById("check_button").setAttribute("disabled","disabled");
    document.getElementById("restart").setAttribute("disabled","disabled");
    document.getElementById("hint_button").setAttribute("onclick","");
    var confirm=document.createElement("div");
    confirm.setAttribute("id","confirm");
    parent.appendChild(confirm);
    var text=document.createElement("p");
    text.innerText="Confirm";
    text.setAttribute("id","text");
    parent.appendChild(text);
    var question=document.createElement("img");
    question.setAttribute("src","question.png");
    question.setAttribute("id","question");
    parent.appendChild(question);
    var ask=document.createElement("p");
    ask.setAttribute("id","ask");
    ask.innerText="Please confirm before proceed Do you want to Restart?";
    parent.appendChild(ask);
    var no=document.createElement("button");
    no.setAttribute("onclick","removeElement()");
    no.setAttribute("id","no");
    no.innerText="No";
    parent.appendChild(no);
    var yes=document.createElement("button");
    yes.setAttribute("id","yes");
    yes.setAttribute("onclick","restart_button(),removeElement()");
    parent.appendChild(yes)
    yes.innerText="Yes";

}
function do_you_want_check(){
    document.getElementById("restart").setAttribute("disabled","disabled");
    document.getElementById("hint_button").setAttribute("onclick","");
    document.getElementById("check_button").setAttribute("disabled","disabled");
    var confirm=document.createElement("div");
    confirm.setAttribute("id","confirm");
    parent.appendChild(confirm);
    var text=document.createElement("p");
    text.innerText="Confirm";
    text.setAttribute("id","text");
    parent.appendChild(text);
    var question=document.createElement("img");
    question.setAttribute("src","question.png");
    question.setAttribute("id","question");
    parent.appendChild(question);
    var ask=document.createElement("p");
    ask.setAttribute("id","ask");
    ask.innerText="Please confirm before proceed Do you want to Check?";
    parent.appendChild(ask);
    var no=document.createElement("button");
    no.setAttribute("onclick","removeElement()");
    no.setAttribute("id","no");
    no.innerText="No";
    parent.appendChild(no);
    var yes=document.createElement("button");
    yes.setAttribute("id","yes");
    yes.setAttribute("onclick","checkRowCol(),removeElement()");
    parent.appendChild(yes)
    yes.innerText="Yes";

}
function removeCheckElement(){
    document.getElementById("invalid").remove();
    document.getElementById("triangle").remove();
    document.getElementById("checkElement").remove();
    
}

function countDown(){
    var counting = new Date().getTime();

    var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = (hintPress+now)-counting ;
  console.log(hintPress)
    


  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
  document.getElementById("countDown").innerHTML = "Counting:"+((minutes>9)? minutes:"0"+minutes) +":"+ ((seconds>9)?seconds:"0"+seconds);

  
}, 1000);
}