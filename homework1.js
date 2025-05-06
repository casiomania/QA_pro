console.log('number' + 3 + 3)
// 3 перетворюється на рядок, дві послідовні конкатенації
// відповідь - number33

console.log(null + 3)
// null перетворюється на 0, 0 + 3
// відповідь - 3

console.log(5 && "qwerty")
// 5 true, && повертає перший false, або останній true
// відповідь - qwerty

console.log(+'40' + +'2' + "hillel")
// +'40' дає 40, +'2' дає 2, 40 + 2 = 42, далі конкатенація з рядком
// відповідь - 42hillel

console.log('10' - 5 === 6)
// '10' - 5 = 5, 5 строго не дорівнює 6
// відповідь - false

console.log(true + false)
// true це 1, false це 0, 1 + 0
// відповідь - 1

console.log('4px' - 3)
// '4px' не число, операція з NaN дає NaN
// відповідь - NaN

console.log('4' - 3)
// '4' перетворюється у 4, 4 - 3
// відповідь - 1

console.log('6' + 3 ** 0)
// 3 ** 0 = 1, конкатенація '6' і '1'
// відповідь - 61

console.log(12 / '6')
// '6' перетворюється на 6, 12 / 6
// відповідь - 2

console.log('10' + (5 === 6))
// 5 === 6 дає false, далі конкатенація з рядком
// відповідь - 10false

console.log(null == '')
// null дорівнює лише undefined, порожній рядок не підходить
// відповідь - false

console.log(3 ** (9 / 3))
// 9 / 3 = 3, 3 ** 3 = 27
// відповідь - 27

console.log(!!'false' == !!'true')
// обидва непорожні рядки true, true == true
// відповідь - true

console.log(0 || '0' && 1)
// '0' truthy, '0' && 1 = 1, 0 || 1 = 1
// відповідь - 1

console.log((+null == false) < 1)
// +null = 0, 0 == false дає true -> 1, 1 < 1
// відповідь - false

console.log(false && true || true)
// false && true -> false, false || true -> true
// відповідь - true

console.log(false && (false || true))
// false || true -> true, false && true -> false
// відповідь - false

console.log((+null == false) < 1 ** 5)
// 1 ** 5 = 1, +null = 0, 0 == false дає true -> 1, 1 < 1
// відповідь - false
