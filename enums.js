var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 16] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 21] = "Left";
    Direction2[Direction2["Right"] = 22] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
var AppStatus;
(function (AppStatus) {
    AppStatus[AppStatus["ACTIVE"] = 0] = "ACTIVE";
    AppStatus[AppStatus["INACTIVE"] = 1] = "INACTIVE";
    AppStatus[AppStatus["ONHOLD"] = 2] = "ONHOLD";
})(AppStatus || (AppStatus = {}));
function checkStatus(status) {
    console.log("app status :: " + status);
}
checkStatus(AppStatus.ACTIVE);
var StringAppStatus;
(function (StringAppStatus) {
    StringAppStatus["ACTIVE"] = "ACT";
    StringAppStatus["INACTIVE"] = "INACT";
    StringAppStatus["ONHOLD"] = "HLD";
    StringAppStatus["ONSTOP"] = "STOP";
})(StringAppStatus || (StringAppStatus = {}));
function stringCheckStatus(status) {
    console.log(status);
}
stringCheckStatus(StringAppStatus.ONSTOP);
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Thursday"] = 0] = "Thursday";
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = getDate('Date')] = "Saturday";
    Weekend[Weekend["Sunday"] = Weekend.Saturday * 40] = "Sunday";
})(Weekend || (Weekend = {}));
function getDate(day) {
    if (day === 'Date') {
        return 3;
    }
}
console.log(Weekend.Saturday);
console.log(Weekend.Sunday);
/* Declare enum Enum{
    X=1,
    Y,
    Z=2
}
console.log(Enum); */
