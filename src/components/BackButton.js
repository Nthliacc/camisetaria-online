'use client';
const { useRouter } = require("next/navigation")

const Buttonback = () => {
    const router = useRouter()
    return (
        <button
            className="bg-black text-white text-lg py-2 px-4 rounded-md hover:bg-slate-600"
            onClick={() => router.push('/products')}
        >
            Voltar para lista
        </button>
    )
}

export default Buttonback