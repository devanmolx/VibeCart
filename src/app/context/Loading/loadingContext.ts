import { createContext } from "react";

interface LoadingType {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void
}

const defaultLoadingValues: LoadingType = {
    isLoading: false,
    setIsLoading: () => { }
}

export const LoadingContext = createContext<LoadingType>(defaultLoadingValues);

