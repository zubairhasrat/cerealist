import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1e9e4]">
      <Masthead />
      <NavBar />

      <main className="flex-1 w-full max-w-[600px] mx-auto px-6 py-12">
        <div className="border-2 border-[#1e1e1e] p-8">
          <div className="border-b-2 border-[#1e1e1e] pb-4 mb-6 text-center">
            <h1 className="font-[family-name:var(--font-crimson)] font-bold text-[40px] text-[#1e1e1e]">
              Checkout
            </h1>
          </div>

          <div className="space-y-4 mb-8">
            {["Full Name", "Email", "Shipping Address", "City", "ZIP Code"].map(
              (field) => (
                <div key={field}>
                  <label className="font-[family-name:var(--font-crimson)] font-semibold text-[16px] text-[#1e1e1e] block mb-1">
                    {field}
                  </label>
                  <input
                    type="text"
                    placeholder={field}
                    className="w-full border border-[#1e1e1e] bg-[#f1e9e4] px-3 py-2 font-[family-name:var(--font-crimson)] text-[18px] text-[#1e1e1e] focus:outline-none focus:ring-1 focus:ring-[#2f5082]"
                  />
                </div>
              )
            )}
          </div>

          <div className="border-t border-[#1e1e1e] pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-[family-name:var(--font-crimson)] text-[20px] text-[#2a2929]">
                Monthly Edition × 1
              </span>
              <span className="font-[family-name:var(--font-crimson)] font-semibold text-[22px] text-[#1e1e1e]">
                $19.99
              </span>
            </div>
          </div>

          <CTAButton href="/" variant="primary">
            Place Order
          </CTAButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
