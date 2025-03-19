import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity: number = Object.values(items).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    return totalQuantity;
  }
);

const itemQuantityAvailabilityCheckingSelector = createSelector(
  (itemQuantity) => itemQuantity,
  (_, itemMax) => itemMax,
  (itemQuantity, itemMax) => {
    const currentItemQuantityInCart: any | number = itemQuantity || 0;
    const currentRemainingQuantity: number =
      itemMax - currentItemQuantityInCart;
    const quantityReachedToMax: boolean =
      currentRemainingQuantity <= 0 ? true : false;

    return { currentRemainingQuantity, quantityReachedToMax };
  }
);

export {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
};
