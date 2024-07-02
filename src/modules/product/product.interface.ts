type variants = {
  type: string;
  value: string;
};

export type inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: variants[];
  inventory: inventory;
};
