#!/usr/bin/env node
const arg = process.argv;
const checkStatistics = arg.indexOf('statistics');
const statistics = require('./statistics');
const game = require('./app');

if(checkStatistics!==-1){
    statistics();

}else {
    game();
}