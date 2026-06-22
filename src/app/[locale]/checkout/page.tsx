import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

const Page = () => {
  return (
    <section className="container">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold">
          Checkout
        </h1>

        <p className="text-muted-foreground mt-2">
          Complete your order details
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>

        <div>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

export default Page;