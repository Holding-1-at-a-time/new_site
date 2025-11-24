"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { typeThemeProviderProps } from 'next-themes/dist/types'




export function ThemeProvider({ children, ...props }: typeThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}