import { notFound } from "next/navigation";
import { getProduct, formatPrice, products } from "@/data/products";
import ProductImage from "@/components/ProductImage";
import CheckoutButton from "@/components/CheckoutButton";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} - Blue Water Electronics`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl p-12 flex items-center justify-center border border-slate-200">
          <ProductImage category={product.category} className="w-48 h-48 text-slate-700" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">
            {product.name}
          </h1>
          <p className="text-lg text-slate-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-4xl font-bold text-slate-900">
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Free shipping on orders over $500
            </p>
          </div>

          <div className="mt-8">
            <CheckoutButton productId={product.id} />
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">Why Buy From Us?</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                2-Year Manufacturer Warranty
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                30-Day Money Back Guarantee
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Expert Technical Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
