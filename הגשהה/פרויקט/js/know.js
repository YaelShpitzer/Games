var arrInformation = ['אימון המוח חשוב לא פחות מפעילות גופנית ותזונה מאוזנת. מספר הקשרים בין הנוירונים שבמוח יכול לעלות בעקבות אימון כזה ולהביא לחשיבה מהירה יותר, לריכוז וזיכרון משופרים, לשיפור ביכולת לפתור בעיות ולהעלאת היכולות התפיסתיות',
    'מסקנות מומחי חקר המוח הן: ניתן לאמן את המוח בכל גיל, ככל שמאמנים אותו יותר כך גדלה יכולתו לזכור ואין גבול לכמות האינפורמציה הניתנת לזכירה.', 'מספר הנוירונים במוח נשמר אולם מספר הקשרים בין הנוירונים יכול להשתנות ולעלות בעקבות אימון המוח. עלייה במספר הקשרים מביאה לעליה ביכולת התפיסה, הביטוי, שיפור הזיכרון והריכוז. לעומת זאת, היעדר תרגול מוחי עלול לגרום לניוון יכולות המוח.',
    'שתיית שוקו חם (עד שתי כוסות ביום) משפרת את זרימת הדם למוח. הפלבנואידים שבקקאו משמשים כנוגדי חמצון המונעים היווצרות של קרישי דם ובעלי יכולות אנטי דלקתיות.',
    ' המוח מורכב מתאי עצב ("החומר האפור") המכונים נוירונים. כול נוירון מתקשר עם נוירונים אחרים באמצעות סיבי עצב. אצל אדם בוגר, כול נוירון יכול להיות מקושר לעוד כמה אלפי נוירונים אחרים.',
    'מוחו של האדם מורכב מ-100 מיליארד תאי עצב וכבר מגיל צעיר הוא מאבד עשרות אלפי תאי עצב מדי יום. כל תא עצב מחובר לעשרות תאי עצב אחרים.']
function start() {
    document.getElementById("know_text").innerHTML = "<lable id='toknow'>הידעת?!<br/></lable>";
    document.getElementById('know_text').innerHTML += arrInformation[0];

    var divArr = document.getElementsByTagName('img');
    for (var i = 0; i < divArr.length; i++) {
        divArr[i].addEventListener('mouseover', function () {
            show(event);
        })
    }
}
function show(e) {
    var num = e.target.dataset.numType;
    var c = e.target.id;
    document.getElementById("know_text").innerHTML = "<lable id='toknow'>הידעת?!<br/></lable>";
    document.getElementById('know_text').innerHTML += arrInformation[num];
    document.getElementById(c).classList.add("rotate");
}
function rot() {
    var divArr = document.getElementsByTagName('img');
    for (var i = 0; i < divArr.length; i++) {
        divArr[i].addEventListener('mouseover', function () {
            s(event);
        })
    }
}
var b = "img3" ;
function s(e) {
    var c = e.target.id;
    document.getElementById(b).classList.remove("rotate");
    document.getElementById(c).classList.add("rotate"); 
    b = c;
}