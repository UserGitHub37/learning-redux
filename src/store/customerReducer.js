const defaultState = {
  customers: [],
}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASTOMER':
      return {...state, customers: [...state.customers, action.payload]};
    case 'REMOVE_CASTOMER':
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};

      default:
        return state;
  }
}
