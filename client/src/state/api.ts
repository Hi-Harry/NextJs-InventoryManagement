import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
}

export interface SalesSummary {
    salesSummaryID: string;
    totalValue: number;
    changePercentage?: number;
    date: string;
}

export interface PurchaseSummary {
    purchaseSummaryID: string;
    totalPurchased: number;
    changePercentage?: number;
    date: string;
}

export interface ExpenseSummary {
    expenseSummaryID: string;
    totalExpenses: number;
    date: string;
}

export interface ExpenseByCategorySummary {
    expenseByCategorySummaryID: string;
    category: string;
    amount: string;
    date: string;
}

export interface DashboardMetrics {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes:["DashboardMetrics"],
    endpoints: (build) => ({
        getDashboardMetrics: build.query<DashboardMetrics, void>({
            query: () => "/dashboard",
            providesTags: ["DashboardMetrics"],
        })
    }),
});

console.log(api.endpoints.getDashboardMetrics);

export const { useGetDashboardMetricsQuery } = api;