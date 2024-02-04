import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import UpdatePizzaOrderForm from "./Partials/UpdatePizzaOrderForm";
const Edit = ({ auth, pizza }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Order Id {pizza.id}
                </h2>
            }
        >
            <Head title={"Order a " + pizza.id} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <div className="p-6 text-gray-900">
                            <UpdatePizzaOrderForm
                                pizza={pizza}
                                className="max-w-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
