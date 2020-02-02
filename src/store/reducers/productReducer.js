const initState = {
  products: [
    { id: "1", name: "Plumpy Nut", price: 25.89856},
    { id: "2", name: "Measles Vaccine", price: 90.51},
    { id: "3", name: "Therapeutic Milk", price: 56.14},
    { id: "4", name: "Pencils", price: 13.58745},
    { id: "5", name: "School Bags", price: 19.45},
    { id: "6", name: "Vinly Remover", price: 15.15}

  ]
}

const productReducer = (state = initState, action) => {
  return state
}

export default productReducer
