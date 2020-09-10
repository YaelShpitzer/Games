var stack1 = [], stack2 = [10], stack3 = [10], flag = 1;
var firstdisk, lastdisk;
var firstdisk1, firstdisk2, numlevel=3;
function func1() /*פונקציה פותחת משחק חדש שברירת המחדל שלה היא ברמה קלה*/{  
    for (var i = 3; i > 0; i--) {
        stack1.push(i);
        document.getElementById('tower-1').innerHTML += ' <li id="disk' + i + '" class="disk"></li>';
    }
    document.getElementById('tower-1').addEventListener("click", function () { movefrom(event) });
    document.getElementById('tower-2').addEventListener("click", function () { movefrom(event) });
    document.getElementById('tower-3').addEventListener("click", function () { movefrom(event) });
}
function level(num)/*פונקציה פותחת משחק חדש לפי רמת הקושי שבחר המשתמש*/
{
    numlevel = num;
    document.getElementById('tower-1').innerHTML = "";
    document.getElementById('tower-2').innerHTML = "";
    document.getElementById('tower-3').innerHTML = "";
    stack1 = [];
    stack2 = [10];
    stack3 = [10];
    for (var i = num; i > 0; i--) {
        stack1.push(i);
        document.getElementById('tower-1').innerHTML += ' <li id="disk' + i + '" class="disk"></li>';
    }
}
function movefrom(ev)
{   
    if (flag == 1)//לחיצה ראשונה של הסרת הדיסק
    {
        numstack1 = ev.currentTarget.id[6];
        flag = 0;        
        ul = ev.currentTarget; 
        if (window["stack" + numstack1].length == 1) {
            firstdisk1 = window["stack" + numstack1].pop();
            ul.removeChild(document.getElementById('disk' + firstdisk1))
            window["stack" + numstack1].push(10);
        }
        else {
            firstdisk1 = window["stack" + numstack1].pop();
            ul.removeChild(document.getElementById('disk' + firstdisk1));            
        }
        
    }
    //לחיצה שניה של הנחת הדיסק
    else
    {        
        numstack2 = ev.currentTarget.id[6];
        firstdisk2 = window["stack" + numstack2].pop();
        if (firstdisk2 == 10) {
            document.getElementById('tower-' + numstack2).innerHTML = ' <li id="disk' + firstdisk1 + '" class="disk"></li>';
            window[("stack" + numstack2)].push(firstdisk1);

        }
        else {
            if (firstdisk2 > firstdisk1) {
                ev.currentTarget.innerHTML += ' <li id="disk' + firstdisk1 + '" class="disk"></li>';
                window[("stack" + numstack2)].push(firstdisk2)
                window[("stack" + numstack2)].push(firstdisk1)
                if (stack3.length == numlevel)
                    document.getElementById("win").style.display = "block";
            }
            else {
                document.getElementById('tower-' + numstack1).innerHTML += ' <li id="disk' + firstdisk1 + '" class="disk"></li>';
                window[("stack" + numstack1)].push(firstdisk1);
                window[("stack" + numstack2)].push(firstdisk2)
            }           
        }
        flag = 1;      
    } 
    
}
function stop() {
    document.getElementById("win").style.display = "none";
}
var cnt = 0;
function instraction() {
    if (!cnt) {
        document.getElementById('instra').style.display = "block";
        document.getElementById('ins').style.display = "block";
        cnt = 1;
    }
    else
    {
        document.getElementById('instra').style.display = "none";
        document.getElementById('ins').style.display = "none";
        cnt = 0;
    }
}

