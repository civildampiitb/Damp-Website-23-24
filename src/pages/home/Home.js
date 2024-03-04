import React, { useState } from "react";
import style from "./home.module.css";
import BrowseCourse from "./BrowseCourse";
import Explore from "./ExploreHome";
import Youtube from "./Youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import faqsDataHome from "../../data/Faaqsdata";
import styles_faqs from "../faaqs/faaqs.module.css";

const HOME = () => {
  const displayedfaqs = faqsDataHome.slice(0, 5);

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? null : id));
  };

  return (
    <>
      <div className={style.home_main}>
        <div className={style.main_text}>
          <p>Civil Damp Blog</p>
        </div>
        <div className={style.background_image}>
          <div>
            <p>WELCOME TO</p>
          </div>
          <div>
            <p>D-AMP CIVIL DEPARTMENT</p>
          </div>
        </div>
        <div>
          <BrowseCourse />
        </div>
        <div>
          <Explore />
        </div>
        <div>
        <div className={styles_faqs.faqs_home_main}>
          <div className={styles_faqs.faqs_main_text}>
            <p>Frequently Asked Questions</p>
          </div>
          <ul className={styles_faqs.faqs_list}>
            {displayedfaqs.map((faq) => (
              <div>
                <div className={styles_faqs.faqs_underline}></div>
                <li
                  key={faq.id}
                  className={`faqItem ${activeFaq === faq.id ? "active" : ""}`}
                >
                  <p
                    onClick={() => toggleFaq(faq.id)}
                    className={styles_faqs.faqs_question_text}
                  >
                    {faq.question}
                    <FontAwesomeIcon
                      icon={activeFaq === faq.id ? faChevronUp : faChevronDown}
                    />
                  </p>
                  {activeFaq === faq.id && (
                    <p className={styles_faqs.faqs_answer}>{faq.answer}</p>
                  )}
                </li>
              </div>
            ))}
          </ul>
          <div className={styles_faqs.faqs_underline}></div>
          <a className={style.faqs_more} href="/faaqs">More...</a>
        </div>
      </div>
        <div>
          <Youtube />
        </div>
      </div>
    </>
  );
};

export default HOME;
