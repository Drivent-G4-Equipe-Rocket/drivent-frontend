const paymentValidations = {
  number: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) < 16 || parseInt(value?.length, 10) > 22,
      message: 'Digite um número de cartão válido!',
    },
  },
};
