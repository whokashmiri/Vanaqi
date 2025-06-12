import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is interior design, and why is it important?",
      answer:
        "Interior design is the art of enhancing the aesthetics and functionality of a space. A well-designed interior improves comfort, maximizes space efficiency, and reflects personal style, making any environment more inviting.",
    },
    {
      question: "How do I choose the right interior design style for my home?",
      answer: "Choosing a design style depends on your preferences, lifestyle, and home architecture. Explore styles like modern, minimalist, or traditional, and pick what resonates with your taste and needs. ",
    },
   
      {
        question: "How can I make a small space look bigger?",
        answer: "To make a small space look bigger, use light colors, mirrors, multi-functional furniture, and vertical storage. Declutter regularly and maximize natural light to create an open, airy feel.",
      },
      {
        question: " How do I select the right color palette for my home?",
        answer: "Selecting a color palette requires considering lighting, mood, and space size. Neutral tones create calmness, bold colors add energy, and complementary shades ensure balance and harmony in your home.",
      },
  ];

  return (
    <section className="bg-[#f7f3ec] min-h-screen px-4 py-12 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="w-7 h-7 bg-black"></div>
          <span className="uppercase text-sm tracking-widest">Faq</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f1ece4] p-6 rounded-xl transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="flex justify-between items-center w-full text-left font-semibold text-lg"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
