import { IProduct } from '@/type';
import Image from 'next/image';

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.product_name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-1">
          {product.brand}
        </p>

        <h2 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-14">
          {product.product_name}
        </h2>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-pink-600">
            ${product.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;