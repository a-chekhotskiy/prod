import React from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>{}</Routes>
        </Suspense>
    );
};
