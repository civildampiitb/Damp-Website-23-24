import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import faqsData from "../../data/Faaqsdata";
import style from "./faaqs.module.css";

const Faaqs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? null : id));
  };

  return (
    <div className={style.faqs_main}>
      <div className={style.faqs_main_text}>
        <p>Frequently Asked Questions</p>
      </div>
      <ul className={style.faqs_list}>
        {faqsData.map((faq) => (
          <div>
          <div className={style.faqs_underline}></div>
            <li
              key={faq.id}
              className={`faqItem ${activeFaq === faq.id ? "active" : ""}`}
            >
              <p onClick={() => toggleFaq(faq.id)} className={style.faqs_question_text}>
                {faq.question}
                <FontAwesomeIcon
                  icon={activeFaq === faq.id ? faChevronUp : faChevronDown}
                />
              </p>
              {activeFaq === faq.id && <p className={style.faqs_answer}>{faq.answer}</p>}
            </li>
            </div>
        ))}
      </ul>
      <div className={style.faqs_underline}></div>
    </div>
  );
};

export default Faaqs;
