import React, { useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import PizzaStatus from "./Partials/PizzaStatus";
const Show = ({ pizza }) => {
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         router.reload({ only: ["pizza"] });
    //     }, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);
   
    return (
        <div className="max-w-3xl mx-auto py-12">
            <Head title={"Order Number " + pizza.id} />
            <div className="py-8">
                <img
                    className="mx-auto"
                    src="https://i.ibb.co/LYmDVmL/hiclipart-com-1.png"
                    alt=""
                />
            </div>
            <PizzaStatus currentStatus={pizza.status} />
            <div className="text-center mt-4">
                <p className="text-lg">
                    {pizza.chef} started {pizza.status.toLowerCase()} your order
                    <span className="underline font-semibold ml-1">
                        {pizza.last_updated}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Show;
