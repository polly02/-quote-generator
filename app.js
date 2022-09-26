const arr = ['If you fall asleep now, you will dream. If you study now, you will live your dream.',
    'When you think it’s too late, the truth is, it’s still early.',
    'The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever.',
    'Studying is not about time. It’s about effort.',
    'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?',
    'Success only comes with self-management and determination.',
    'If you don’t walk today, you’ll have to run tomorrow.',
    'The level of education is in direct correlation with your salary.',
    'When today is over, it will never come back.',
    'Even now, your enemies are eagerly flipping through books.']

const nameObj = {
    1: "Nastya",
    2: "Polina",
    3: "Vlad",
    4: "Yaroslaw",
    5: "Sergio"
}

const valP = document.querySelector(".wrapper p");
const valH2 = document.querySelector(".wrapper h2");
const colors = ["white", "red"]
let flag = true

function showName(nameObj, valH2){
    valH2.innerHTML = nameObj[Math.floor(Math.random() * Object.entries(nameObj).length)];
}

setInterval(showName, 6000, nameObj, valH2)

function showItem(arr, valP) {
    valP.innerHTML = arr[Math.floor(Math.random() * arr.length)]
    if (flag) {
        flag = false
        valP.style = `color: ${colors[1]}`
    } else {
        flag = true
        valP.style = `color: ${colors[0]}`
    }
}


setInterval(showItem, 3000, arr, valP)

