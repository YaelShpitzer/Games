var cnt = 0;
function s() {
    document.getElementById("cnt").innerHTML = cnt;
}
//function reset() {
//    document.getElementById('restart').reset;
//}
var a = 0;
function instraction() {
    if (!a) {
        document.getElementById('instructionss').style.display = "block";
        document.getElementById('instra').style.display = "block";
        a = 1;
    }
    else {
        document.getElementById('instructionss').style.display = "none";
        document.getElementById('instra').style.display = "none";
        a = 0;
    }
}
function help() {
    //document.getElementById("help").addEventListener("click", instrctn);
    //document.getElementById("close").addEventListener("click", instrctn);    
}

/// גרירת תמונות לתוך הלוח
function allowDrop(ev) {
    ev.preventDefault();
}
// כשאנחנו מושכים
function drag(ev) {
    // 
    ev.dataTransfer.setData("Text", ev.target.id);
}
// בעת הנחה
function drop(ev) {
    //- התמונה האובייקט שנמשך
    var IdImg = ev.dataTransfer.getData("Text");
    // אם לא קיימת כבר תמונה 
    if (event.target.nodeName != "IMG") {
        var Img = document.getElementById(IdImg);
        ev.target.appendChild(Img);
    }
    cnt++;
    document.getElementById("cnt").innerHTML = cnt;
    check();

}
//הדתות מתחלפות בינהן
function change(image) {
    var x = image.dataset.top;
    image.dataset.top = image.dataset.left;
    image.dataset.left = image.dataset.bottom;
    image.dataset.bottom = image.dataset.right;
    image.dataset.right = x;
}
//סבוב של התמונות לכל הכיוונים מצורף לסטיילשיט
function rotate(image) {
    let rotateAngle = Number(image.getAttribute("rotangle")) + 90;
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    image.setAttribute("rotangle", "" + rotateAngle);
    change(image);
    check();
    cnt++;
    document.getElementById("cnt").innerHTML = cnt;
}

//בדיקת האם כל הריבועים מלאים בתמונות
function check() {
    var f = 0;
    for (var i = 0; i < 9; i++)
        if (document.getElementsByClassName("divtab")[i].children.length != 0)
            f = 1;
    if (f == 0) {
        checkData();
        if (checkData()) {
            confetti();
            setTimeout(function myfunction() {
                document.getElementById("party-info").style.animationName = "UserModal";
            }, 10);
        }
    }
}
function checkData() {
    var arr = document.getElementsByClassName("square");
    for (var i = 0; i < arr.length; i++) {
        var id = arr[i].id;
        var dd = id.split("");
        var x = dd[0];
        var y = dd[1];
        if (x != 0) {
            var dataTopI = arr[i].children[0].getAttribute("data-top").split(" ");
            var topColorI = dataTopI[1];
            var topShapeI = dataTopI[0];
            var databottomI3 = arr[i - 3].children[0].getAttribute("data-bottom").split(" ");
            var topColorI3 = databottomI3[1];
            var topShapeI3 = databottomI3[0];
            if (!(topColorI == topColorI3 && topShapeI != topShapeI3)) {
                return false;
            }

            if (y != 0) {
                var dataleftI = arr[i].children[0].getAttribute("data-left").split(" ");
                var topColorI = dataleftI[1];
                var topShapeI = dataleftI[0];
                var datarightI3 = arr[i - 1].children[0].getAttribute("data-right").split(" ");
                var topColorI3 = datarightI3[1];
                var topShapeI3 = datarightI3[0];
                if (!(topColorI == topColorI3 && topShapeI != topShapeI3)) {
                    return false;

                }
            }
        }
        else {
            if (y != 0) {
                var dataleftI = arr[i].children[0].getAttribute("data-left").split(" ");
                var topColorI = dataleftI[1];
                var topShapeI = dataleftI[0];
                var datarightI3 = arr[i - 1].children[0].getAttribute("data-right").split(" ");
                var topColorI3 = datarightI3[1];
                var topShapeI3 = datarightI3[0];
                if (!(topColorI == topColorI3 && topShapeI != topShapeI3)) {
                    return false;

                }

            }
        }




    }
    return true;
}
function prints() {
    window.print();
}
function restart() {
    window.location="monkey.html", '_self';
}



