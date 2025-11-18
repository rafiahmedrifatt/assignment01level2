type formatValueType = string | number | boolean;

function formatValue(params: formatValueType): formatValueType {
  if (typeof params === "string") {
    return params.toUpperCase();
  } else if (typeof params === "number") {
    return params * 10;
  } else if (typeof params === "boolean") {
    return !params;
  }
  return params;
}

type getLengthType = string | Array<any>;

function getLength(params: getLengthType): number {
  if (typeof params === "string") {
    return params.length;
  } else if (Array.isArray(params)) {
    return params.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const filterByRating = (
  products: { title: string; rating: number }[]
): object[] => {
  const filteredProducts = products.filter((product) => product.rating >= 4.0);
  return filteredProducts;
};

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
): object[] => {
  const activeUsers = users.filter((user) => user.isActive);
  return activeUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  return `Title: ${book?.title}, Author: ${book?.author}, Published: ${
    book?.publishedYear
  }, Available: ${book?.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = (array1: number[], array2: number[]): number[] => {
  const newArray: number[] = [];
  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    if (value !== undefined) {
      if (!newArray.includes(value)) {
        newArray.push(value);
      }
    }
  }
  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    if (value !== undefined) {
      if (!newArray.includes(value)) {
        newArray.push(value);
      }
    }
  }

  return newArray;
};

const calculateTotalPrice = (
  product: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number => {
  let totalPrice = 0;
  product.map((item) => {
    const discount = item.discount ? item.discount : 0;
    const priceAfterDiscount = item.price - (item.price * discount) / 100;
    totalPrice += priceAfterDiscount * item.quantity;
  });
  return totalPrice;
};
