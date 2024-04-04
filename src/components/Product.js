"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Product({ product }) {
    const router = useRouter();
    const viewDetails = (id) => {
        router.push(`/products/${id}`);
    };
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                    src={product.image}
                    alt={product.name}
                    quality={50}
                    width={180}
                    height={220}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    {
                        product.colors.map((color, index) => (
                            <span
                                key={index}
                                className="inline-block h-4 w-4 rounded-full bg-gray-200 mr-1 border-2 border-slate-400"
                                style={{ backgroundColor: color }}
                            />
                        ))
                    }
                    <p className="mt-1 text-sm text-gray-500">{product.colors}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">R$ {product.price}</p>
            </div>
            <div className="inset-0">
                <button
                    type="button"
                    className="mt-6 block w-full bg-gray border border-transparent rounded-md py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    onClick={() => viewDetails(product.id)}
                >
                    View details
                </button>
            </div>
        </div>
    );
}