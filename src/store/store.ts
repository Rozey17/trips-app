import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import wishListReducer from "./features/wishListSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
