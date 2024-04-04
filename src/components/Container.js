export default function Container({ children }) {
    return (
        <div className="h-[800px] sm:h-full overflow-x-auto scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-gray-300 scrollbar-track-rounded-full bg-white rounded-md px-4 py-8 sm:p-6 lg:p-8">
            {children}
        </div>
    );
}
