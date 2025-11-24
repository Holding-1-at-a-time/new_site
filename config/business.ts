/// <reference types="node" />

export const BUSINESS_INFO = {
    name: "One Detail At A Time",
    phone: "(726) 207-1007",
    phoneRaw: "7262071007",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "rromerojr1@gmail.com",
    logo: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
    address: {
        street: "11692 Bricken Circle",
        city: "San Antonio",
        state: "TX",
        zip: "78233",
        country: "US"
    }
};