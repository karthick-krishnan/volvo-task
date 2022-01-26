export const prodId = "607ac5b8-7a16-11ec-90d6-0242ac120003"
export const createdProdId = "a44b434e-7a16-11ec-90d6-0242ac120003";

export const mockProduct = {
  prodId,
  name: "MacBook Pro",
  qty: 5,
  price: 1999.0,
};

export const mockProductOperations = {
  addProduct: jest.fn((product) => Promise.resolve({...product, prodId: createdProdId})),
  getAllProducts: jest.fn((x) => Promise.resolve([mockProduct])),
  getProductById: jest.fn((x) => (Promise.resolve({ ...mockProduct, prodId: x }))),
};
