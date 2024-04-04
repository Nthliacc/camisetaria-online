import { useState } from 'react';

export default function Filters({ onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);

    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSizeFilter(event.target.value);
    };

    const handleColorChange = (event) => {
        setColorFilter(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter({
            name: searchTerm,
            priceFilter: { min: minPrice, max: maxPrice },
            sizeFilter: sizeFilter === '' ? null : sizeFilter,
            colorFilter : colorFilter === '' ? null : colorFilter,
            sortBy : sortBy === '' ? null : sortBy,
        });
    };

    return (
        <div className="flex flex-col space-y-4 bg-slate-100 p-6 rounded-md">
            <div className="flex justify-between items-center">
                <button onClick={toggleFilter} className="focus:outline-none">
                    {filterOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
                <span className="text-2xl font-bold">Filters</span>
            </div>
            {filterOpen && <form onSubmit={handleSubmit} className={`flex flex-col gap-2 indent-1`}>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="borde-none rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <div className='flex w-5/5 justify-between'>
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-2/5 border-none rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="2/5 border-none rounded-md py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
                    />
                </div>

                <select
                    value={sizeFilter}
                    onChange={handleSizeChange}
                    className={`border-none rounded-md py-2 pl-4 focus:outline-none focus:ring-2 focus:ring-gray-500 ${sizeFilter == '' ? 'text-slate-400' : 'text-black'}`}
                >
                    <option value="">Filter by size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <select
                    value={colorFilter}
                    onChange={handleColorChange}
                    className={`border-none rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500  ${colorFilter == '' ? 'text-slate-400' : 'text-black'}`}
                >
                    <option value="">Filter by color</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
                <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className={`border-none rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 ${sortBy == '' ? 'text-slate-400' : 'text-black'}`}
                >
                    <option value="">Sort by ...</option>
                    <option value="price">Sort by Price</option>
                    <option value="name">Sorte by Name</option>
                </select>
                <button type="button" className="text-sm bg-slate-400 text-white font-extralight rounded-md py-2 px-4 focus:outline-none"
                    onClick={() => {
                        setSearchTerm('');
                        setSizeFilter('');
                        setColorFilter('');
                        setSortBy('');
                        setMinPrice('');
                        setMaxPrice('');
                        onFilter('');
                    }}
                >Clear Filters</button>
                <button type="submit" className="bg-black text-white rounded-md py-2 px-4 transition duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    Apply Filters
                </button>
            </form>}
        </div>
    );
}
