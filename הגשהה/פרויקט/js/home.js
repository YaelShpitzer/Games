function user(loding) {
    document.getElementById(loding).style.display = "block";
    document.getElementById("all").style.display = "block";
    document.getElementById('wrapper').style.opacity = 0.4;

}
function addUser() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var myUser = new User(userName, password);
    flag = 0;
    if (localStorage.length != 0) {
        if (document.getElementById('password').value) {
            for (var i = 1; i < localStorage.length && !flag; i++) {
                var obj = JSON.parse(localStorage.getItem(i));
                if (obj.name == document.getElementById('userName').value && obj.pass == document.getElementById('password').value) {
                    document.getElementById('label1').innerHTML = "ברוך שובך";
                    document.getElementById('label2').innerHTML = userName;
                    flag = 1;
                }
            }
            if (!flag) {
                var myUser = JSON.stringify(myUser)
                localStorage.setItem(localStorage.length, myUser);
                document.getElementById('label1').innerHTML = "ברוך הבא";
                document.getElementById('label2').innerHTML = userName;
            }
        }
    }
    else {
        var myUser2 = JSON.stringify(myUser)
        localStorage.setItem(localStorage.length, myUser);
        document.getElementById('label1').innerHTML = " ברוך הבא";
        document.getElementById('label2').innerHTML = userName;
    }
    document.getElementById('userName').value = "";
    document.getElementById('password').value = "";
    document.getElementById('wrapper').style.opacity = 1;
    document.getElementById("loding").style.display = "none";
    document.getElementById("all").style.display = "none";
}
function User(name, pass) {
    this.name = name;
    this.pass = pass;
}

