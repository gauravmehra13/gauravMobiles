import React from "react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  return (
    <section className=" py-3 py-md-5">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="https://img.freepik.com/free-vector/open-source-concept-illustration_114360-3868.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701561600&semt=ais"
              alt="How can we help you?"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">How can we help you?</h2>
                <p className="lead fs-5 text-secondary mb-5">
                  We hope you have found an answer to your question. If you need
                  any help, please search your query on our Support Center or
                  contact us via email.
                </p>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      How can I track my order?
                    </Accordion.Header>
                    <Accordion.Body>
                      Once your order is processed and shipped, you will receive
                      a tracking number via email or text message. You can use
                      this tracking number on our website to monitor the status
                      and location of your package in real-time.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What payment methods do you accept?
                    </Accordion.Header>
                    <Accordion.Body>
                      We accept various payment methods including credit/debit
                      cards (Visa, Mastercard, American Express), PayPal, and
                      sometimes alternative methods like Apple Pay or Google
                      Pay. You can choose your preferred payment option during
                      checkout.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What is your return policy?
                    </Accordion.Header>
                    <Accordion.Body>
                      Our return policy allows you to return eligible items
                      within a specified timeframe for a refund or exchange.
                      Please refer to our Returns & Exchanges page for detailed
                      information on eligibility criteria, return instructions,
                      and any applicable restocking fees.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Are my personal and payment details secure?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we prioritize the security of your personal and
                      payment information. Our website uses industry-standard
                      encryption technology (SSL) to protect your data during
                      transmission. We also adhere to strict privacy policies
                      and do not store sensitive payment information on our
                      servers.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      How long will it take to receive my order?
                    </Accordion.Header>
                    <Accordion.Body>
                      Delivery times vary depending on your location, shipping
                      method selected, and product availability. Typically,
                      orders are processed within 1-2 business days, and
                      standard shipping within the continental US takes an
                      additional 3-5 business days. You can choose expedited
                      shipping options for faster delivery.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Do you offer international shipping?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we offer international shipping to select countries.
                      Shipping rates and delivery times vary depending on the
                      destination. During checkout, you can enter your address
                      to see if international shipping is available for your
                      location and to view shipping options and costs.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
