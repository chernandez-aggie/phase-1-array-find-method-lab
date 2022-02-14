// code your solution here
function superbowlWin(teamHistory){
    for(const item of teamHistory){
        if(item.result === 'W'){
            return item.year;
        }
     }
}
