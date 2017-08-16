import { takeEvery, select, call, put } from "redux-saga/effects";

//1. Swap currency
//2. Change base currency
//3. Upon Initial app load

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT
} from "../actions/currencies";

const getLatestRate = currency =>
  fetch(`http://api.fixer.io/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {
  try {
    //console.log("get initial conversion rate", action);
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    console.log(currency);
    //   getLatestRate(currency)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result: result });
    }
  } catch (e) {
    //console.log("Saga Error: ", e);
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
