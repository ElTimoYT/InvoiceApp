import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Timotei',
        lastname: 'Poenaru',
        address: {
            country: 'Spain',
            city: 'Ocaña',
            street: 'Calle del Estudiante',
            number: 12
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 12351245
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel i9',
            price: 530,
            quantity: 1
        },
        {
            id: 2,
            product: 'Nvidia RTX 4090',
            price: 1200,
            quantity: 1
        },
        {
            id: 3,
            product: 'Corsair RAM 5600 32GB',
            price: 160,
            quantity: 2
        }
    ],
    total: 0
}