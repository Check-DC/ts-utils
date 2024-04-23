const toFixed = (num: number, precision: number) =>
  (+`${Math.round(+`${num}e${precision}`)}e${-precision}`).toFixed(precision)

const parseNumber = (num: string | number) => ({
  float: Math.abs(Number.parseFloat(num.toString())),
  int: Math.abs(Number.parseInt(num.toString())),
  sign: Math.sign(Number(num.toString())) < 0 ? '-' : '',
})

const parseFormat = (string = '0') => {
  const regex = /([+-])?([0-9,]+)?([.0-9]+)?([a\s]+)?/
  const matches = string ? string.match(regex) : ['', '', '', '', '']
  const float = matches ? matches[3] : null
  const floatMatch = float ? float.match(/0/g) : null
  const decimals = floatMatch ? floatMatch.length : 0

  return {
    sign: matches ? matches[1] : '',
    base: matches ? matches[2] : '',
    decimals,
    unit: matches ? matches[4] : '',
  }
}

const addUnit = (num: number, config: Record<string, any>) => {
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ]

  let i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value)
      break
  }

  const numToFixed = (num / si[i].value).toFixed(config.decimals).replace(rx, '$1')

  return numToFixed + config.unit.replace('a', si[i].symbol)
}

const addSeparators = (num: string, base: string, thousandsSeparator: string, decimalSeparator: string) => {
  const regex = /(\d+)(\d{3})/
  const string = num.toString()
  const x = string.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? decimalSeparator + x[1] : ''

  switch (base) {
    case '':
      x1 = ''
      break
    case '0,0':
      while (regex.test(x1))
        x1 = x1.replace(regex, `$1${thousandsSeparator}$2`)

      break
  }

  return x1 + x2
}

/**
 * 123456 => '123,456'
 *
 * @params {string, number} options
 * @params {string} format
 * @params {object} options
 *
 */

export const formatNumber = (value: string | number, format: string = '0', options: Record<string, any> = {}) => {
  if (!value)
    return value

  const config = parseFormat(format)
  const number = parseNumber(value)
  const thousandsSeparator = options.thousandsSeparator ? options.thousandsSeparator : ','
  const decimalSeparator = options.decimalSeparator ? options.decimalSeparator : '.'

  config.sign = config.sign || number.sign

  if (config.unit) {
    const numberWithUnit = addUnit(number.float, config)
    return config.sign + numberWithUnit
  }

  const rounded = toFixed(number.float, config.decimals)

  const output = addSeparators(rounded, config.base, thousandsSeparator, decimalSeparator)

  return config.sign + output
}

/**
 * @returns {number} Returns zero or provided min instead of NAN or just return number
 */
export const ensureNumber = (value: any, min: number | null = null): number => {
  value = Number.isNaN(value) ? 0 : value
  if (min)
    value = Math.max(min, value)

  return value
}

/**
 * @param {string} value
 * @returns {any} Returns a default value set for when a value is zero or NAN.
 */
export const numberEmptyState = (value: string | number, format: any = '---'): any => value === '0' || value === 'NaN' ? format : value
