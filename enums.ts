enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
console.log(Direction);
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction1);
enum Direction2 {
    Up = 16,
    Down = 2,
    Left = 21,
    Right,
}
console.log(Direction2);
enum AppStatus {
    ACTIVE,
    INACTIVE,
    ONHOLD
}
function checkStatus(status: AppStatus): void {
    console.log("app status :: "+status);
}
checkStatus(AppStatus.ACTIVE);

enum StringAppStatus {
    ACTIVE = 'ACT',
    INACTIVE = 'INACT',
    ONHOLD = 'HLD',
    ONSTOP = 'STOP'
}
function stringCheckStatus(status: StringAppStatus): void {

    console.log(status);
}
stringCheckStatus(StringAppStatus.ONSTOP);

enum Weekend {
  Thursday = 0,
  Friday = 1,
  Saturday = getDate('Date'),
  Sunday = Saturday * 40
}

function getDate(day : string): number {
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
