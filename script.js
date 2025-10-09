const array = [
    [
        "ffffjjjjffffjjjj",
        "ffjjffjjfjfjjfjf",
        "f f j j ff ff jj jj",
        "fj jf ff jj",
        "ffff jjjj ff jj fff jjj",
        "fj fj jjf ffj fff jjj",
        "ffj jjf fjfj fffj",
        "jjjf ffjj ff jj ffff",
    ],
    [
        "ddddkkkkddddkkkk",
        "ddkkddkkdkdkdkdk",
        "d d k k dd dd kk kk",
        "dk kd dd kk",
        "dddd kkkk dd kk ddd kkk",
        "dk dk kkd ddk ddd kkk",
        "ddk kkd dkdk dddk",
        "kkkd ddkk dd kk dddd",
    ],
    [
        "ssssllllssssllll",
        "ssllssllslsllsls",
        "s s l l ss ss ll ll",
        "sl ls ss ll",
        "ssss llll ss ll sss lll",
        "sl sl lls ssl sss lll",
        "ssl lls slsl sssl",
        "llls ssll ss ll ssss",
    ],
    [
        "aaaa;;;;aaaa;;;;",
        "aa;;aa;;a;a;;a;",
        "a a ; ; aa aa ;; ;;",
        "a; ;a aa ;;",
        "aaaa ;;;; aa ;; aaa ;;;",
        "a; a; ;;a aa; aaa ;;;",
        "aa; ;;a a;a; aaa;",
        ";;;a aa;; aa ;; aaaa",
    ],
    [
        "qqqqppppqqqqpppp",
        "qqppqqppqpqppqpq",
        "q q p p qq qq pp pp",
        "qp pq qq pp",
        "qqqq pppp qq pp qqq ppp",
        "qp qp ppq qqp qqq ppp",
        "qqp ppq qpqp qqqp",
        "pppq qqpp qq pp qqqq",
    ],
    [
        "wwwwooooooooooww",
        "wwww oooowwowww",
        "w w o o ww ww oo oo",
        "wo ow ww oo",
        "wwww oooo ww oo www ooo",
        "wo wo oow wwo www ooo",
        "wwo oow wowo wwwo",
        "ooow wwwo oo ww wwww",
    ],
    [
        "eeeeuuuuuuuueeee",
        "eeee uuuu ee uu",
        "e e u u ee ee uu uu",
        "eu ue ee uu",
        "eeee uuuu ee uu eee uuu",
        "eu eu uue eeu eee uuu",
        "eeu uue eueu eeeu",
        "uuue euee uu ee eeee",
    ],
    [
        "rrrrttttttttrrrr",
        "rrrr tttt rr tt",
        "r r t t rr rr tt tt",
        "rt tr rr tt",
        "rrrr tttt rr tt rrr ttt",
        "rt rt ttr rrt rrr ttt",
        "rrt ttr rtrt rrrt",
        "tttr rtrr tt rr rrrr",
    ],
    [
        "yyyyhhhhyyyyhhhh",
        "yyhhyyhhhyhyhhyy",
        "y y h h yy yy hh hh",
        "yh hy yy hh",
        "yyyy hhhh yy hh yyy hhh",
        "yh yh hhy yhh yyy hhh",
        "yyh hhy yhyh yyyh",
        "hhhy yhhh hh yy yyyy",
    ],
    [
        "vvvvmmmmvvvvmmmm",
        "vvmmvvmmvmvmvmvm",
        "v v m m vv vv mm mm",
        "vm mv vv mm",
        "vvvv mmmm vv mm vvv mmm",
        "vm vm mmv vmm vvv mmm",
        "vvm mmv vmvm vvvmm",
        "mmmv vmmm mm vv vvvv",
    ],
    [
        "bbbbnnnnbbbnnnn",
        "bbnnbbnnnbnbnnbn",
        "b b n n bb bb nn nn",
        "bn nb bb nn",
        "bbbb nnnn bb nn bbb nnn",
        "bn bn nnb bnn bbb nnn",
        "bbn nnb bnbn bbbn",
        "nnnb bnnn nn bb bbbb",
    ],
    [
        "zzzzxxxxzzzzxxxx",
        "zzxxzzxxxzxzzxzx",
        "z z x x zz zz xx xx",
        "zx xz zz xx",
        "zzzz xxxx zz xx zzz xxx",
        "zx zx xxz zzx zzz xxx",
        "zzx xxz zxzx zzzx",
        "xxxz zxzz xx zz zzzz",
    ],
    [
        "cccccwwwwcccccwwww",
        "ccwwccwwcwcwwcwc",
        "c c w w cc cc ww ww",
        "cw wc cc ww",
        "cccc wwww cc ww ccc www",
        "cw cw wwc cww ccc www",
        "ccw wwc cwcw cccc",
        "wwwc wcww ww cc cccc",
    ],
    [
        "qqaaqqaaqqaqqaqq",
        "aqqqaaqqqqqqaaqa",
        "q a q a qq aa qq aa",
        "qa aq qq aa",
        "qqqq aaaa qq aa qqq aaa",
        "qa qa aaq qaa qqq aaa",
        "qqa aaq qaqa qqqa",
        "aaaq qaqa aa qq qqqq",
    ],
    [
        "wwswwswwwwwwssww",
        "wwww ssss swwwsws",
        "w s w s ww ss ww ss",
        "ws sw ww ss",
        "wwww ssss ww ss www sss",
        "ws ws ssw wss www sss",
        "wws ssw wsws wwww",
        "sssws wsss ss ww wwww",
    ],
    [
        "eerreerreeeeerrr",
        "eeee rrrr rreerre",
        "e r e r ee rr ee rr",
        "er re ee rr",
        "eeee rrrr ee rr eee rrr",
        "er er rre eer eee rrr",
        "eer rre erer eeee",
        "rrre erer rr ee eeee",
    ],
    [
        "ttyyttyytttttyyy",
        "tttt yyyy ttyytyy",
        "t y t y tt yy tt yy",
        "ty yt tt yy",
        "tttt yyyy tt yy ttt yyy",
        "ty ty yyt tyt ttt yyy",
        "tty yyt tyt ttty",
        "yyyt tyty yy tt tttt",
    ],
    [
        "uuiiuuiiuuuuuiii",
        "uuuu iiii uuiuiii",
        "u i u i uu ii uu ii",
        "ui iu uu ii",
        "uuuu iiii uu ii uuu iii",
        "ui ui iiui iiu uuu iii",
        "uui iiui uiui uuuu",
        "iiiui uiui ii uu uuuu",
    ],
    [
        "ooppoolloooooppp",
        "oooo pppp oopoopp",
        "o p o p oo pp oo pp",
        "op po oo pp",
        "oooo pppp oo pp ooo ppp",
        "op op ppo opp ooo ppp",
        "oop ppo opop oooo",
        "pppo opop pp oo oooo",
    ],
    [
        "fast jump just free left keep",
        "good well read type zoom quick",
        "near fire lost hold camp enjoy",
        "write point sharp blink click",
        "grasp press search teach touch",
        "brave eager focus smart world",
        "laugh happy climb bright lucky",
        "master expert student practice",
    ],
    [
        "create vision motion wonder imagine",
        "perfect balance observe deliver learn",
        "support believe achieve challenge think",
        "whisper listen explore improve transform",
        "conquer develop express innovate inspire",
        "succeed encourage connect design build",
        "dream celebrate reflect adventure discover",
        "grow empower explore curiosity accomplish",
    ],
];

// Audio section
let click = new Audio("./assets/click.mp3");
let wrong = new Audio("./assets/wrong.mp3");
let levelUp = new Audio("./assets/levelUp.mp3");
let sectionPass = new Audio("./assets/sectionPass.mp3");

//Constant element section
const body = document.querySelector("body");
const levelBox = document.querySelector("#level");
const sectionBox = document.querySelector("#section");
const scoreBox = document.querySelector("#score");
const efficiencyBox = document.querySelector("#efficiency");
const completionBox = document.querySelector("#completed");
const buttons = document.querySelectorAll("button");
const leftPara = document.querySelector("#leftPara");
const rightPara = document.querySelector("#rightPara");
const hintBox = document.querySelector("#hintBox");
const sectionInc = document.querySelector("#sectionInc");
const sectionDec = document.querySelector("#sectionDec");
const levelInc = document.querySelector("#levelInc");
const levelDec = document.querySelector("#levelDec");
const keyboard = document.querySelector("#keyboard");
const string = document.querySelector("#string");
const hand = document.querySelector("#hands");
const dance = document.querySelector("#danceContainer > img");

//score variables and setting them
let totalScore = 0;
let score = 0;
let finished = 0;
scoreBox.innerText = score + "/" + totalScore;

//Initializing the level and the sections
let level = 0 , section = 0;
levelBox.innerText = level;
sectionBox.innerText = section;
let strR = array[level][section];
let strL = "";
rightPara.innerText = strR;
leftPara.innerText = strL;
let startTime = 0;
let endTime = 0;

// settings buttons
levelInc.addEventListener("click", function () {
    if (level < 20) {
        ++level;
        levelBox.innerText = level;
        setString();
    }
});
levelDec.addEventListener("click", function () {
    if (level > 0) {
        --level;
        levelBox.innerText = level;
        setString();
    }
});
sectionInc.addEventListener("click", function () {
    if (section < 7) {
        ++section;
        sectionBox.innerText = section;
        setString();
    }
});
sectionDec.addEventListener("click", function () {
    if (section > 0) {
        --section;
        sectionBox.innerText = section;
        setString();
    }
});

function setString() {
    strL = "";
    strR = array[level][section];
    rightPara.innerText = strR;
    leftPara.innerText = strL;
    buttons.forEach((button) => {
        button.classList.remove("correctBtn");
    });
}

function initializeSection() {
    section = 0;
    sectionBox.innerText = section;
    sectionPass.play();
}

function increaseLevel() {
    ++level;
    levelBox.innerText = level;
    levelUp.play();
}

function updateEfficiency() {
    efficiencyBox.innerText = Math.round((score / totalScore) * 100);
    totalScore = score = 0;
}

function setStartTime() {
    startTime = performance.now(); // Start time
    console.log(startTime);
}

function setEndTime(letters) {
    endTime = performance.now(); // End time
    console.log(endTime);
    let words = letters / 5 ;
    let miliSeconds = endTime - startTime ;
    let timeInMinutes = miliSeconds / 60000 ;
    let wpm = words / timeInMinutes ;
    wpm = Math.round(wpm);
    speed.innerText = wpm;
}

//keypress handle
document.addEventListener("keydown", function (event) {
    if(strL.length === 0) {
        setStartTime();
    }
    hintBox.style.visibility = "hidden";
    hand.style.visibility = 'hidden';
    let key = event.key;
    if (strR.length === 1) {
        if (section === 7) {
            initializeSection();
            setEndTime(strL.length);
            updateEfficiency();
            if (level === 20) {
                alert("You have completed all the levels , Congractulation !");
                body.classList.add("celebrate");
                levelUp.play();
                keyboard.style.display = 'none';
                string.style.display = 'none';  
                dance.style.visibility = 'visible';
            } else if (level < 20) {
                increaseLevel();
                body.classList.add("celebrate");
                setTimeout(function () {
                    body.classList.remove("celebrate");
                }, 2500);
            }
        } else if (section <= 7) {
            setEndTime(strL.length);
            section++;
            finished++;
            sectionBox.innerText = section;
            sectionPass.currentTime = 0;
            sectionPass.play();
            updateEfficiency();
            completionBox.innerText = finished;
        }
        setString();
    } else if (key == strR[0] && strR.length > 0) {
        click.currentTime = 0;
        click.play();
        totalScore++;
        score++;
        scoreBox.innerText = score + "/" + totalScore;
        strL = strL + strR[0];
        strR = strR.slice(1);
        leftPara.innerText = strL;
        rightPara.innerText = strR;
        for (let j = 0; j < buttons.length; j++) {
            buttons.forEach((button) => {
                button.classList.remove("correctBtn");
                if (button.value === event.key) {
                    button.classList.add("correctBtn");
                }
            });
        }
    } else {
        wrong.currentTime = 0;
        wrong.play();
        totalScore++;
        score--;
        scoreBox.innerText = score + "/" + totalScore;
        buttons.forEach((button) => {
            if (button.value === event.key || button.value === event.key) {
                button.classList.add("wrongBtn");
                setTimeout(function () {
                    button.classList.remove("wrongBtn");
                }, 200);
            }
        });
    }
});

document.getElementById("start").addEventListener("click",function(){
    document.querySelector("#gettingStarted").style.display = 'none';
    document.querySelector("#string").style.display = 'flex';
    hintBox.style.display = 'flex';
})