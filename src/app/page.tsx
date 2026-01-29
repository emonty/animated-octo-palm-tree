import Link from "next/link";
import { products, formatPrice } from "@/data/products";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Marine Electronics
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Professional-grade navigation, communication, and safety equipment for your vessel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-slate-200"
          >
            <div className="aspect-square bg-slate-100 p-8 flex items-center justify-center">
              <ProductImage category={product.category} className="w-32 h-32 text-slate-700 group-hover:text-cyan-600 transition-colors" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">
                {product.category}
              </span>
              <h2 className="text-xl font-semibold text-slate-900 mt-1 group-hover:text-cyan-600 transition-colors">
                {product.name}
              </h2>
              <p className="text-slate-600 mt-2 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="text-2xl font-bold text-slate-900 mt-4">
                {formatPrice(product.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
