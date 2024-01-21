export const calculateTotal = (quantity: number, pricePerItem: number) => {
  if (quantity && pricePerItem) {
    // Ensure that quantity and pricePerItem are valid numbers
    if (typeof quantity !== 'number' || typeof pricePerItem !== 'number') {
      throw new Error('Quantity and pricePerItem must be numbers');
    }

    // Calculate the total cost
    const total = quantity * pricePerItem;
    return total;
  }
};

export const isObjectEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};
