export interface MenuItem {
  title: string;
  description?: string;
  category: string;
  threeJsFile: string;
  price: string;
  selected?: boolean;
}

export type Category = "coffee" | "specialty" | "boba" | "hot bites" | "sandwiches" | "seasonal";
