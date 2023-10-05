/**
 * Converter uma data em uma string de tempo relativo, como
 * "um minuto atrás", "em 2 horas", "ontem", "3 meses atrás", etc.
 * usando Intl.RelativeTimeFormat
 */
export function getRelativeTimeString(
    date: Date | number,
    lang = navigator.language,
  ): string {
    // Permitir que datas ou horas sejam passadas
    const timeMs = typeof date === 'number' ? date : date.getTime()
  
    // Obtém a quantidade de segundos entre a data especificada e agora
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)
  
  
// Array representando um minuto, hora, dia, semana, mês, etc em segundos
    const cutoffs = [
      60,
      3600,
      86400,
      86400 * 7,
      86400 * 30,
      86400 * 365,
      Infinity,
    ]
  
    
// Array equivalente ao acima, mas na representação de string das unidades
    const units: Intl.RelativeTimeFormatUnit[] = [
      'second',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'year',
    ]
  
  
// Pegue a unidade de corte ideal
    const unitIndex = cutoffs.findIndex(
      (cutoff) => cutoff > Math.abs(deltaSeconds),
    )
  
    // Obtém o divisor para dividir dos segundos. Por exemplo. se nossa unidade for "dia" nosso divisor
    // é um dia em segundos, então podemos dividir nossos segundos por isso para obter o número de dias
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1
  
    
// Intl.RelativeTimeFormat faz sua mágica
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
  }