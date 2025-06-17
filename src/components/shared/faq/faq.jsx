import PropTypes from 'prop-types';
import React from 'react';

const FAQ = ({ question, answer }) => (
  <details className="w-full mb-4 [&_svg]:open:rotate-0 transition-all duration-200">
    <summary className="cursor-pointer w-full list-none">
      <h3 className="inline-flex items-baseline gap-2 mb-1">
        <svg
          className="inline -rotate-90 transform transition-all duration-200"
          fill="none"
          height="20"
          width="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        {question}
      </h3>
    </summary>

    <div className="text-start">{answer}</div>
  </details>
);

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
};

export default FAQ;
