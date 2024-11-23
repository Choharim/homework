export const convertHEXToRGB = (hex: string) => {
  let hexCode = hex
  if (hexCode.startsWith('#')) {
    hexCode = hexCode.split('').slice(1).join('')
  }

  const rgbHex = hexCode.match(/.{1,2}/g)

  if (hexCode.length !== 6 || !rgbHex) {
    console.error('HEX 형식이 아닙니다.')
    return
  }

  const rgb = Array.from({ length: 3 }, (_, i) => parseInt(rgbHex[i], 16)).join(
    ','
  )

  return rgb
}

export const toPascalCase = (value: string) => {
  const valueList = value.split(/[-_\s]+/) // 구분자: 하이픈, 언더스코어, 공백

  let result = ''

  valueList.forEach((v) => {
    result += v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
  })

  return result
}
