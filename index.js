// code your solution here
function superbowlWin(record) {
    const recordElement = record.find(isW);
    if (typeof recordElement  !== 'undefined')
       return recordElement.year;
    else
        return recordElement;
}

function isW(element) {
    return (element.result === "W");
}