export interface OrderImpl{
    customerId : string,
    deliveryDate: string,
    totalPrice: number
}

export interface OrderLineItemImpl{
    customerId : string,
    orderId: string,
    prodId: string
}