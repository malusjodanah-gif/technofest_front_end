import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { PublicLayout } from "../../components/layout";

const faqs = [
  {
    question: "What is Technofest?",
    answer:
      "Technofest is a digital platform designed to showcase student innovation and help connect students with organizations, mentors, and communities.",
  },
  {
    question: "Who can submit a project?",
    answer:
      "Students can create an account and submit their innovation projects through the student area.",
  },
  {
    question: "Can organizations discover student projects?",
    answer:
      "Yes. Organizations can explore projects, review project information, save projects, and express interest.",
  },
  {
    question: "What project stages can students select?",
    answer:
      "Projects can be classified as Idea, Prototype, Tested, or Completed.",
  },
  {
    question: "Can I save a project?",
    answer:
      "Yes. Visitors can use the Save Project action in this frontend prototype. Saved projects are stored locally in the browser.",
  },
  {
    question: "How does project approval work?",
    answer:
      "Submitted projects are intended to go through an administrator review process before being publicly approved.",
  },
  {
    question: "Can students control their contact information?",
    answer:
      "Yes. The platform is designed so students can control which contact information is publicly visible.",
  },
  {
    question: "How do I contact the Technofest team?",
    answer:
      "Use the Contact page to send an enquiry through the frontend prototype.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">
          {faq.question}
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pb-5 pr-8 text-sm leading-7 text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] =
    useState(null);

  return (
    <PublicLayout>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="text-center">
          <p className="text-sm font-semibold text-maroon-700">
            Help Centre
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
            Find answers to common questions about Technofest.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white px-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(
                  openIndex === index
                    ? null
                    : index
                )
              }
            />
          ))}
        </div>

      </div>
    </PublicLayout>
  );
}