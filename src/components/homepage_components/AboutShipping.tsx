const AboutShipping = () => {
  return (
    <div className="md:flex max-w-1116 m-auto md:justify-between px-2 py-12">
      <div className="text-start space-y-3 p-12 flex flex-col md:items-start items-center">
        <img
          src="/img/icons/Delivery.png"
          alt="car"
          className="bg-slate-200 p-2 rounded-full"
        />
        <h2>Free Shipping</h2>
        <p>Upgrade your style today and get FREE </p>
        <p> shipping on all orders! Don't miss out.</p>
      </div>
      <div className="text-start space-y-3 p-12 flex flex-col md:items-start items-center">
        <img
          src="/img/icons/Star Badge.png"
          alt="star"
          className="bg-slate-200 p-2 rounded-full"
        />
        <h2>Satisfaction Guarantee</h2>
        <p>Shop confidently with our Satisfaction </p>
        <p> Guarantee: Love it or get a refund.</p>
      </div>
      <div className="text-start space-y-3 p-12 flex flex-col md:items-start items-center">
        <img
          src="/img/icons/Shield Check.png"
          alt="check"
          className="bg-slate-200 p-2 rounded-full"
        />
        <h2>Secure Payment</h2>
        <p>Your security is our priority. Your </p>
        <p> payments are secure with us.</p>
      </div>
    </div>
  );
};

export default AboutShipping;
