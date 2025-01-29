import { useCallback, useEffect } from "react";
import {
    actGetProductsByItems,
    cartItemChangeQuantity,
    cartItemRemove,
    cartsFullInfoCleanUp,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

const UseCart = () => {
    const dispatch = useAppDispatch();
    const { items, productFullInfo, loading, error } = useAppSelector(
        (state) => state.cart
    );

    useEffect(() => {
        dispatch(actGetProductsByItems());
        return () => {
            dispatch(cartsFullInfoCleanUp());
        };
    }, [dispatch]);

    const products = productFullInfo.map((el) => ({
        ...el,
        quantity: items[el.id],
    }));

    const changeQuantityHandler = useCallback(
        (id: number, quantity: number) => {
            dispatch(cartItemChangeQuantity({ id, quantity }));
        },
        [dispatch]
    );

    const removeItemHandler = useCallback(
        (id: number) => {
            dispatch(cartItemRemove(id));
        },
        [dispatch]
    );

    return { products, changeQuantityHandler, removeItemHandler, loading, error };
}

export default UseCart;
