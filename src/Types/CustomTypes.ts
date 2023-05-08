export interface ProductCardPropsType {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface ProtectedRoutePropsType {
    athenticated: boolean;
    children: React.ReactNode;
    redirectTo: string;
}

export type UpdateFieldType = {
    name: string;
    value: string | number;
}

export type FormStateType = {
    id: string;
    name: string;
    price: number;
    description: string;
}

export type ProductEditPropsType = {
    isEdit: boolean;
}

export type sortProductFromParamsArgumentsType 
= (data: any[] | null , params: any) => void;