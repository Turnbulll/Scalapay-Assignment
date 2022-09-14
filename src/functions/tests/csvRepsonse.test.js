const csvResponse = require('../csvResponse');

//to test cvsResponse
test('Output should be in csv format', () => {
  const data = [{
      type: 'type',
      product: 'payment',
      configuration: { minimumAmount: {amount : 1}, maximumAmount:{ amount: 2} } 
  }]
  console.log = jest.fn();
  csvResponse(data);
  expect(console.log.mock.calls[0][0]).toBe('product,type,minAmount,maxAmount')
  expect(console.log.mock.calls[1][0]).toBe('payment,type,1,2');
});