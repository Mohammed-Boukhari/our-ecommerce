import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import {
    actGetProductsByCatPrefix,
    cleanUpProductsRecords,
} from "@store/products/productsSlice";

const useProducts = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const paramsPrefix = params.prefix
    const { loading, error, records } = useAppSelector((state) => state.products);
    const cartItems = useAppSelector((state) => state.cart.items);
    const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);

    const productsFullInfo = records.map((el) => ({
        ...el,
        quantity: cartItems[el.id],
        isLiked: wishlistItemsId.includes(el.id),
    }));

    useEffect(() => {
        dispatch(actGetProductsByCatPrefix(params.prefix as string));
        return () => {
            dispatch(cleanUpProductsRecords());
        };
    }, [dispatch, params]);

    return { loading, error, productsFullInfo, params, paramsPrefix };
};

export default useProducts;
