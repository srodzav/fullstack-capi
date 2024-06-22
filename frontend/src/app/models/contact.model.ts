export interface Contact {
    id?: number;
    name: string;
    phones: { phone: string }[];
    emails: { email: string }[];
    addresses: { address: string }[];
}  