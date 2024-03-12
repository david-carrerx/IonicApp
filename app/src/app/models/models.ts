export interface User {
    uid: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    role: string;
    specialty: string | null;
    license: string | null;
    description: string | null;
}
