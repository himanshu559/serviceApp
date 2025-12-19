import api from "./axios";

// all listings
export const getAllListings = () =>
  api.get("/listings/customer/all");

// search
export const searchListings = (keyword) =>
  api.get(`/listings/customer/search?keyword=${keyword}`);

// filter by category
export const filterByCategory = (category) =>
  api.get(`/listings/customer/category/${category}`);
