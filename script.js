let shortExpr = function(expr) {
    if(typeof expr !== 'string') alert('Неверный тип данных');
    else {
        expr = expr.trim();
        if(expr.length>30) {
            expr = expr.substring(0, 30) + "..."
        }
        return expr;
    }
}
/*
console.log(shortExpr(1234));
console.log(shortExpr('Здравствуйте, Виталий!'));
console.log(shortExpr('   Здравствуйте, Виталий! Как ваши дела?   '));
*/