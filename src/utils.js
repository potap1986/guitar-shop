const formatedNumber = (num) => {
  let number = String(Math.round(num));
  let result = ""
  const gapSize = 3

  while (number.length > 0) 
  {
    result =  number.slice(-gapSize) + " " + result;
    number = number.slice(0, -gapSize)
  }

  return result
}

export {formatedNumber}