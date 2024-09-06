import { Invoice } from "../models/invoice";

<<<<<<< HEAD
export const invoiceData: Invoice = {
=======
export const invoiceData: any = {
>>>>>>> master
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
<<<<<<< HEAD
            price: 500,
            quantity: 1,
            total: function (): number {
                throw new Error("Function not implemented.");
            }
=======
            price: 530,
            quantity: 1
>>>>>>> master
        },
        {
            id: 2,
            product: 'Nvidia RTX 4090',
            price: 1200,
<<<<<<< HEAD
            quantity: 1,
            total: function (): number {
                throw new Error("Function not implemented.");
            }
=======
            quantity: 1
>>>>>>> master
        },
        {
            id: 3,
            product: 'Corsair RAM 5600 32GB',
            price: 160,
<<<<<<< HEAD
            quantity: 2,
            total: function (): number {
                throw new Error("Function not implemented.");
            }
=======
            quantity: 2
>>>>>>> master
        }
    ],
    total: 0
}