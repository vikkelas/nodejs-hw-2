const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'result.txt')

//чтение файла
const statistics = () => {
    let readeFile;
    try{
        readeFile = fs.readFileSync(file, 'utf-8')
    } catch(err) {
        if (err){
            console.log('Игр еще не было')
        }
    }

    const getCountWinAndLoss = (arr) => {
        let win = 0;
        let loss = 0;
        arr.forEach(item=>{
            if(item==='Победа')win++
            if(item==='Проигрыш')loss++
        })
        return{
            win,loss
        }
    }

    const getWinPercentage = (count, win) => {
        const winPercentage = win*100/count;
        const lossPercentage = 100 - winPercentage;
        return {
            winPercentage, lossPercentage
        }
    }

    const arrayResult = readeFile.split('\n')
    const countGame = arrayResult.length-1;
    const countWinAndLoss = getCountWinAndLoss(arrayResult);
    const getPercentage = getWinPercentage(arrayResult.length-1, countWinAndLoss.win)
    console.log(`Всего игр сыграно: ${countGame}\nИз них:\nПобед: ${countWinAndLoss.win};\nПроигрышей: ${countWinAndLoss.loss};\nВ процентах:\nПобед: ${getPercentage.winPercentage}%;\nПроигрышей: ${getPercentage.lossPercentage}%;`);
}

module.exports = statistics;