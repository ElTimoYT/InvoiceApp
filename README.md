# InvoiceApp

## About

**InvoiceApp** is a simple invoicing app built with Angular and TypeScript. It lets you create and view invoices, with fixed client and company data that you can set up directly in the code. This setup helps keep important details like client and company names consistent and secure.

---

## Features

- **Client and Company Info**: Fixed details like the client’s name and address and the company’s name and ID are displayed in the invoice header. These details aren’t editable from the app interface—you’ll need to update them directly in the code.
- **Invoice Item List**: Shows a table with the following columns for each product:
  - **ID** for each item.
  - **Product Name**.
  - **Price**.
  - **Quantity**.
  - **Remove Button** to delete items from the list.
- **Add Item Form**: There’s a form at the bottom where you can add new products to the invoice by entering product name, price, and quantity.
- **Automatic Total Calculation**: The app calculates the invoice total automatically and displays it at the bottom right.

---

## Tech Stack

- **Frontend**: Angular, HTML, CSS
- **Programming Language**: TypeScript
- **Styling**: Bootstrap (for layout and buttons)

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/InvoiceApp.git

2. **Install dependencies**
   ```bash
   npm install

3. **Run the app**
   ```bash
   ng serve

---

## Configuring Client and Company Data

If you want to change the default client and company info, go to the config file `src/app/data/invoice.data.ts` and update the values there. This info will show up on every invoice generated in the app.

---

## How to use

1. **View Invoice**: The app shows an invoice view with the client and company info at the top.
2. **Add Products**: Use the form at the bottom to add products to the invoice by entering the product name, price, and quantity. Click `New Item` to add it to the list.
3. **Remove Products**: You can remove products from the list by clicking the `Remove` button next to each item.
4. **Invoice Total**: The app automatically updates the invoice total, shown at the bottom right.

---

## Contact

Got questions or suggestions? Feel free to reach out at timopoepro06@gmail.com.

> [!IMPORTANT]
> This project is licensed under the MIT License. Check out the LICENSE file for details.


