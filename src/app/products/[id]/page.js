import Container from '@/components/Container';
import Image from 'next/image';
import ProductDetails from '@/components/ProductDetails';
import BackButton from '@/components/BackButton';

async function getProduct(id) {
    const response = await fetch(`http://localhost:3001/products/${id}`);
    const data = await response.json();
    return data;
}

export default async function Page({ params }) {
    const { id } = params;
    const { name, description, price, image, rating, colors, sizes } = await getProduct(id);

    return (
        <Container>
            <div className='flex flex-col-reverse gap-2 h-full justify-between'>
                <BackButton />
                <div className="flex justify-items-center gap-6 w-full">
                    <Image src={image} alt={name} width={300} height={400} />
                    <div className="flex flex-col gap-2 justify-evenly">
                        <p className="text-4xl font-bold">{name}</p>
                        <p className="font-normal text-medium">{description}</p>
                        <p className="font-light text-3xl">R$ {price}</p>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p className="ms-2 text-sm font-bold text-gray-900">{rating}</p>
                        </div>
                        <ProductDetails colors={colors} sizes={sizes} />
                    </div>
                </div>
            </div>
        </Container>
    )
}