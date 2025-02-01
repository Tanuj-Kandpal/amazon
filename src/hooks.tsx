import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type State = {
  items: ProductDetails[];
};

export type Action = {
  type: string;
  payload: number;
};

export type ProductDetails = {
  index: number;
  heading: string;
  price: number;
  image: string;
  rating: string;
  quantity: number;
};

export type ProductList = ProductDetails[];
