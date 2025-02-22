import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import plus from "../assets/faq/plus.png";
import { FaMinus } from "react-icons/fa";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund. The item must be unused and in its original packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer worldwide shipping. Shipping costs and times vary depending on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with the tracking number and a link to track your package.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Changes to orders can be made within 24 hours of placing the order. Contact our support team for assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" relative  poppins text-white mx-auto  py-16 md:py-32">
      <div className="  relative  text-center flex justify-center  mb-20 ">
        <h1 className="text-2xl font-bold text-center   faq title_font   md:mb-6">
          Frequently Asked Questions
        </h1>
        <div className="radient-effect   -bottom-20  left-0"></div>
      </div>
      <div className="space-y-4 w-[90%] lg:w-[60%] mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className=" border-b  border-[#01B0C7]/10  py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-medium text-lg">{faq.question}</h2>
              {openIndex === index ? (
                <img src={plus} className="w-5" />
              ) : (
                <img src={plus} className="w-5" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-white/80">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="radient-effect  bottom-0"></div>
      </div>
    </div>
  );
};

export default FAQ;
