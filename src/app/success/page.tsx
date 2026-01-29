import Link from "next/link";

export const metadata = {
  title: "Order Confirmed - Blue Water Electronics",
};

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Thank You for Your Order!
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Your payment was successful. We&apos;ll send you an email confirmation shortly with tracking information.
        </p>

        <div className="bg-slate-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-2">What&apos;s Next?</h2>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>• You&apos;ll receive an order confirmation email</li>
            <li>• We&apos;ll ship your order within 1-2 business days</li>
            <li>• Track your shipment with the provided tracking number</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
