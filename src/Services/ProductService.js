export const fetchProduct = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    if (result) {
      return result.products ?? [];
    }
  } catch (error) {
    throw new Error(error);
  }
};
