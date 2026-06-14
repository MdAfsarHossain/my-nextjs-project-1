import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/type';

const ProductsPage = async () => {
  const res = await fetch('http://localhost:5000/products', {
    // cache: "force-cache"
    // cache: "no-store"
    next: {
        revalidate: 30
        // tags: ['products']
    }
  });
  const products = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Products
        </h1>
        <p className="text-gray-500 mt-3">
          Discover premium beauty and skincare products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products?.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;