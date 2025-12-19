import api from "./axios";

// ---------- CUSTOMER ----------

// all available listings
export const getAllListings = () =>
  api.get("/listings/customer/all");

// search by keyword
export const searchListings = (keyword) =>
  api.get(`/listings/customer/search?keyword=${keyword}`);

// filter by category
export const filterByCategory = (category) =>
  api.get(`/listings/customer/category/${category}`);

// filter by location
export const filterByLocation = (location) =>
  api.get(`/listings/customer/location?location=${location}`);

// advanced search
export const advancedSearch = (data) =>
  api.post("/listings/customer/advanced-search", data);

// dropdown data
export const getCategories = () =>
  api.get("/listings/customer/categories");

export const getLocations = () =>
  api.get("/listings/customer/locations");

// ---------- PROVIDER ----------

export const getProviderListings = (providerId) =>
  api.get(`/listings/provider/${providerId}`);

export const createListing = (providerId, data) =>
  api.post(`/listings/provider/${providerId}`, data);

export const updateListing = (listingId, data) =>
  api.put(`/listings/provider/${listingId}`, data);

export const deleteListing = (listingId) =>
  api.delete(`/listings/provider/${listingId}`);

export const toggleAvailability = (listingId, isAvailable) =>
  api.patch(`/listings/provider/${listingId}/availability`, {
    isAvailable,
  });
