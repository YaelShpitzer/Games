var pictures = ['../pictere/riddle/1.png', '../pictere/riddle/1-s.png'
    , '../pictere/riddle/2.jpg', '../pictere/riddle/2-s.jpg '
    , '../pictere/riddle/3.jpg', '../pictere/riddle/3.jpg'
    , '../pictere/riddle/4.png', '../pictere/riddle/4-s.png'
    ,'../pictere/riddle/5.jpg','../pictere/riddle/5-s.jpg'
    , '../pictere/riddle/6.png', '../pictere/riddle/6-s.png'
    , '../pictere/riddle/7.jpg', '../pictere/riddle/7-s.jpg'
    , '../pictere/riddle/8.jpg', '../pictere/riddle/8-s.jpg'
    , '../pictere/riddle/9.jpg', '../pictere/riddle/9-s.jpg'
   
    

];
var questions = ["על איזה מספר עומדת המכונית?", " המכונית עומדת על מספר 87,<br /> יש להסתכל על התמונה בצורה הפוכה <br />ואז ניתן לראות כי זו סדרת מספרים עוקבים<br /> החל מ-86 ועד 91."
    , "האם אתם יודעים איזה מספר <br />אמור להופיע במקום סימן השאלה?", "המספרים מסמלים את כמות נקודות<br /> החיבור של הקווים בכל צורה.<br /> על כן, התשובה היא 4."
    , " מה האות שאמורה להופיע <br />מתחת למטוס?", "האות מ' מסמל מים, האות כ'  מסמלת כביש,<br /> על כן, המטוס טס באוויר, ולכן מתחתיו<br /> אמורה להופיע האות א'."
    , "לאיזה כיוון נוסע האוטובוס?", "האוטובוס נוסע שמאלה, הואיל ובתמונה<br /> נראה צד האוטובוס ללא הדלתות,<br />  פרושו שחזית האוטובוס היא בצד שמאל<br /> והאוטובוס נוסע שמאלה."
    , "כיצד ערימת הצבעים שבצד התמונה<br /> תיראה אם תסתכלו עליה מלמעלה?", " נסתכל על הפירמידה מלמעלה,<br /> הצבעים יופיעו במעגלים מבפנים לבחוץ .<br />לכן התשובה  היא 4."
    , "מה הצורה הבאה בסדרה?", "כל צורה בסדרה מורכבת ממספר שאליו צמוד <br /> אותו המספר בצורה  הפוכה.<br />  הסדרה מתחילה במספר 1 <br /> והצורה האחרונה מורכבת מהמספר 6 <br />  והיפוכו בכתב מראה בצמוד אליו."
    , "איך אפשר להפוך את המשוואה הבאה<br /> לנכונה מבלי לשנות דבר?", "צריך פשוט להפוך את הלוח"
    , "מהו המספר הבא בסידרה החשבונית?", "התשובה היא 23.<br /> החוקיות של הסדרה היא כזו:<br /> עליכם לחבר את המספר הראשון <br />והשני ולהוסיף לתוצאה אחד,<br /> וכך להמשיך גם עם המספרים האחרים."
    , "פתרו את המשוואה החסרה","",];
var y = 0, numanswer = 0;
function start() {
    document.getElementById("picture").innerHTML = "<img class='pic' src='" + pictures[y] + "'>";
    document.getElementById('question').innerHTML = questions[y];
    document.getElementById('rightarrow').addEventListener("click", function () {
        func(1)
    });
    document.getElementById('leftarrow').addEventListener("click", function () {
        func(0)
    });
    document.getElementById('bulb').addEventListener("click", answers);
    document.getElementById('bulb').addEventListener("mouseover", function () {
        document.getElementById("bulb").src = "../pictere/riddle/light-bulb-icon.png"
    });
    document.getElementById('bulb').addEventListener("mouseout", function () {
        document.getElementById("bulb").src = "../pictere/riddle/bulb-icon55.png"
    });
}

function func(x) {
    if (x) {
        y += 2;
        if (y == 18)
            y = 0;
        document.getElementById('picture').innerHTML = "<img class='pic' src='" + pictures[y] + "'>";
        document.getElementById('question').innerHTML = questions[y];
        document.getElementById('answer').innerHTML = ""
    }
    else {
        y -= 2;
        if (y == -2)
            y =16;
        document.getElementById('picture').innerHTML = "<img class='pic' src='" + pictures[y] + "'>";
        document.getElementById('question').innerHTML = questions[y];
        document.getElementById('answer').innerHTML = ""
    }
}

function answers() {
    numanswer = y + 1;
    document.getElementById("picture").innerHTML = "<img class='pic' src='" + pictures[numanswer] + "'>";
    if (questions[numanswer] != "") {
        document.getElementById("answer").innerHTML = "<img class ='apostrophes' src='../pictere/riddle/quote-mark-128.png'><br/>";
        document.getElementById('answer').innerHTML += questions[numanswer]+"<br/>";
        document.getElementById("answer").innerHTML += "<img id='apostrophe' class ='apostrophes' src='../pictere/riddle/quote-mark-128.png'>";
    }
    else
        document.getElementById("answer").innerHTML = "";
}
var a = 0;
function startt() {
    
    if (!a) {
        document.getElementById('startt').style.display = "block";
        
        a = 1;
    }
    else {
        document.getElementById('startt').style.display = "none";
        document.getElementById('picture').style.display = "block";
        document.getElementById('question').style.display = "block";
        a = 0;
    }
}
