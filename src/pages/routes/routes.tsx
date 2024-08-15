import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../_layout/auth-layout";
import { Login } from "../views/login";
import { Register } from "../views/register";
import { Home } from "../views/home";
import { User } from "../views/user";
import { TypeUser } from "../views/typeuser";
import { VariationDescription } from "../views/variationdescription";
import { VariationValue } from "../views/variationvalue";
import { Address } from "../views/address";
import { Loja } from "../views/loja";
import { Product } from "../views/product";
import { Category } from "../views/category";
import { SubCategory } from "../views/subcategory";
import { SubProduct } from "../views/subproduct";
import { OrderItem } from "../views/orderitem";
import { Order } from "../views/order";
import { Payment } from "../views/payment";
import { Ticket } from "../views/ticket";
import { Coupon } from "../views/coupon";

export const routes = createBrowserRouter([
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/user',
                element: <User />
            },
            {
                path: '/typeuser',
                element: <TypeUser />
            },
            {
                path: '/variationdescription',
                element: <VariationDescription />
            },
            {
                path: '/variationvalue',
                element: <VariationValue />
            },
            {
                path: '/address',
                element: <Address />
            },
            {
                path: '/loja',
                element: <Loja />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/category',
                element: <Category />
            },
            {
                path: '/subcategory',
                element: <SubCategory />
            },
            {
                path: '/subproduct',
                element: <SubProduct />
            },
            {
                path: '/orderitem',
                element: <OrderItem />
            },
            {
                path: '/order',
                element: <Order />
            },
            {
                path: '/payment',
                element: <Payment />
            },
            {
                path: '/ticket',
                element: <Ticket />
            },
            {
                path: '/coupon',
                element: <Coupon />
            },
])