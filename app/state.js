const state = {
  currencies: {
    baseCurrency: <String />,
    quoteCurrency: <String />,
    amount: <Number />,
    conversion: {
        [CURRENCY_STRING] : {
            isFetching: <Boolean/>,
            date: <Date/>,
            rates: { //from API
                [CURRENCY_STRING]: <Number/>
            }
        }
    }
  },
  themes: {
    primaryColor: <String />
  }
};
