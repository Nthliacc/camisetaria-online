'use client';
import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Filters from '@/components/Filters';
import Product from '@/components/Product';

async function fetchProducts() {
  const response = await fetch(`http://localhost:3001/products`, {
    cache: 'no-cache',
  });
  const data = await response.json();
  return data;
}

export default function List() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchProductsData() {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
    }

    fetchProductsData();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

  const filterProducts = () => {
    if (!searchTerm) {
      setFilteredProducts(products);
      return;
    }

    const { priceFilter, sizeFilter, colorFilter, sortBy, name } = searchTerm;

    // Filtrar por nome
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );

    // Filtrar por preço
    if (priceFilter.min && priceFilter.max) {
      filtered = filtered.filter((product) => {
        return product.price >= priceFilter.min && product.price <= priceFilter.max;
      });
    }

    // Filtrar por tamanho
    if (sizeFilter) {
      filtered = filtered.filter((product) => product.sizes.includes(sizeFilter));
    }

    // Filtrar por cor
    if (colorFilter) {
      filtered = filtered.filter((product) => product.colors.includes(colorFilter));
    }

    // Ordenar
    if (sortBy === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  };


  const handleFilter = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='flex gap-4 my-6 flex-col lg:flex-row'>
      <Filters onFilter={handleFilter} />
      <Container>
        {filteredProducts.length > 0 ?
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 
                sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          :
          <div className='flex flex-col items-center min-w-80 h-max justify-center' >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 mx-auto text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="text-xl font-bold text-center">No products found</p>
          </div>
        }
      </Container>
    </div>
  );
}
