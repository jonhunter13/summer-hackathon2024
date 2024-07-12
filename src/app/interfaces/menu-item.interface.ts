export interface MenuItem {
  title: string;
  description?: string;
  category: Category;
  threeJsFile: string;
  price: string;
}

export type Category = "coffee" | "specialty" | "boba" | "hot bites" | "sandwiches" | "seasonal";
