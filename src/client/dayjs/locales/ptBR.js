export default {
  name: 'ptBR',
  weekdays: 'Domingo_Segunda_Terca_Quarta_Quinta_Sexta_Sabado'.split('_'),
  months: 'Janeiro_Fevereiro_Marco_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),  
  ordinal: (number) => {
    const b = number % 10,
      output = (~~(number % 100 / 10) === 1) ? 'th' :
        (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    return number + output;
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  },
  weekdaysMin: 'Do_Se_Te_Qa_Qi_Se_Sa'.split('_')
}
