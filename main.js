const str1 = 'мама мыла раму'
const str2 = 'собака друг человека'
function getStr(firstRow, secondRow) {
  let count1 = 0
  let count2 = 0
  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow.charAt(i) === 'а') {
    ++count1
    }
  }
  for (let i = 0; i < secondRow.length; i++) {
    if (secondRow.charAt(i) === 'а') {
    ++count2
    }
  }
  if (count1 > count2) {
    return firstRow
  }
  return secondRow
}
console.log(getStr(str1, str2))





