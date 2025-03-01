import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import plus from "../assets/faq/plus.png";
import { FaMinus } from "react-icons/fa";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Decentralization?",
      answer: "Decentralization refers to the process of distributing control and decision-making from a central authority to a network of participants. In blockchain technology, decentralization ensures that no single entity has complete control over the system, making it more secure, transparent, and resistant to fraud. Transactions and data are stored across multiple nodes, preventing tampering and single points of failure. This system enhances trust and efficiency by allowing peer-to-peer interactions without intermediaries. Decentralization is widely used in cryptocurrencies, smart contracts, and various blockchain-based applications to promote financial and data sovereignty."
    },
    {
      question: "What is blockchain?",
      answer: "Blockchain is a decentralized and secure digital ledger that records transactions across multiple computers, ensuring transparency and immutability. Each transaction is stored in a block, linked to the previous one, forming a chain that prevents tampering or alteration. This technology eliminates the need for intermediaries, enabling secure peer-to-peer transactions. Blockchain is widely used in cryptocurrencies, smart contracts, and various decentralized applications."
    },
    {
      question: "What is Victorhub?",
      answer: "Victor hub is a Decenterlised platform Which can fulfill all the necessary you can fulfill all the financial issues of your life and it can help you in your wealth maximization this is a very scure system which can give you a lot of earning in usdt"
    },
    {
      question: "How can I get Victor Access?",
      answer: "All users of our platform access to our platform on all type of decentralized wallets and all type of browsers and you can register by just connecting your wallet"

    },
    {
      question: "How can i earn from this platform ?",
      answer: "You can also make money without doing some work by purchasing the slot inside this platform, while if you invite  all the subordinates or also give information about the system to people, then you can also make a very good earnings."
    },
    {
      question: "Who will get access to the Community Fund? ?",
      answer: "there is no body who have the access on comunity fund because this is a decentralized platform"
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className=" relative  poppins text-white mx-auto  py-16 md:py-32">
      <div className="  relative  text-center flex justify-center  mb-20 ">
        <h1 className="text-2xl font-bold text-center   faq title_font   md:mb-6">
          Frequently Asked Questions
        </h1>
        <div className="radient-effect  hidden md:block  -bottom-20  left-0"></div>
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
                <span className="bg-cyan-500 text-black rounded-full p-1 ">
                  <FaMinus  className="text-xs"/>

                </span>
              ) : (
                <span className="bg-cyan-600  text-black rounded-full p-1">
                  <FaPlus className="text-xs"/>

                </span>

              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-white/80">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="radient-effect  hidden md:block bottom-0"></div>
      </div>
    </section>
  );
};

export default FAQ;
