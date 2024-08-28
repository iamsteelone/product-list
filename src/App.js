import React from 'react';

const PRODUCE = [
  {category: "Fruits", price: "£1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "£1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "£2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "£2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "£4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "£1", stocked: true, name: "Peas"}
];

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function ProductTable() {
  return (
    <>
      <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
}

function ProductCategory() {}

function ProductDetails() {}

export default function ProductSearch() {
  return (
    <>
      <SearchBar />
      <ProductTable>

      </ProductTable>
    </>
  );
}