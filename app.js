const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'result.txt')
const readline = require('readline-sync');

const game = () => {
    //чтение или создание файла - зависит от результата
    try{
        fs.readFileSync(file, 'utf-8')
    } catch(err) {
        fs.writeFile(file, 'Результаты игры', err => {
            if(err){
                console.log(err)
            }
        })
    }
//Функция случайного получения числа от макс до мин
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    const result = getRandomInt(1,3).toString();
    let answerUser = '';
    let checkAnswer = false;

    console.log('Монетка подброшена');
    console.log('Что выпало 1 - орел или 2 - решка?');

//Получение ответа от пользователя
    const answer = () => {
        answerUser = readline.question('...    ')
        if(answerUser==='1' || answerUser === '2'){
            checkAnswer=true
        }else {
            console.log('Введите 1 или 2');
        }
    }
//Запись результата
    const writeResult = (result)=>{
        fs.appendFile(file, result.status,(err)=>{
            if(err) throw err;
            console.log(result.msg)
        })
    }

//не пропускать если введено не 1 и не 2
    while(!checkAnswer){
        answer();
    }

    result.toString()===answerUser?
        writeResult({status: '\nПобеда', msg: 'Вы угадали'}):
        writeResult({status: '\nПроигрыш', msg: 'Вы не угадали'});
}

module.exports = game;


