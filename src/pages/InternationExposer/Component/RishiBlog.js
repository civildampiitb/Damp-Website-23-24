import React from "react";
import Rishi from "../../../assets/rishi.png";
import RishiBeyond from "../../../assets/rishi_beyond.png";
import style from "../internation.module.css";

const RishiBlog = () => {
  return (
    <div className={style.rishiblog_main}>
      <h1>Bridging the Gap Between Civil Engineering and AI</h1>
      <div className={style.rishiblog_img}>
        <img src={Rishi} alt="rishiphoto" />
      </div>
      <p>
        I'm Rishi Tunuguntla, a final-year Civil Engineering undergrad. Last
        summer, I interned at the Hong Kong University of Science and
        Technology. In this article, I'll briefly share my journey to securing
        this opportunity and my enriching two-month experience there.
      </p>

      <h2>Starting the Journey</h2>
      <p>
        In my third year, I was in the dark about my career direction. I was
        also dipping my toes into a minor in C-MInDS. But something clicked for
        me halfway through. That is how much the local construction industries
        lagged in integrating cutting-edge tech into their daily operations.
        This gap intrigued me, pushing me towards a research internship.
        Conversations with my Civil Engineering professors further fueled this
        desire.
      </p>
      <h2>The Hunt for Opportunities</h2>
      <p>
        As the 5th semester ended, I dove into the application process. It was
        late November, just after my exams. Here's a piece of advice: start as
        early as possible. As most of the deadlines for the programs were
        completed, I focused on two main programs and reached out to professors
        directly.
      </p>

      <p>
        The key to finding a suitable supervisor is identifying your interests.
        Mine were structural engineering and AI. Once I pinpointed the
        professors in these niches, I sent them concise, impactful emails.
      </p>

      <p>
        The process varies from one university to another. Some might require
        interviews, others could ask for assignments or research proposals.
      </p>
      <h3>Here are a few tips:</h3>

      <ul>
        <li>
          <strong>Research:</strong> Use platforms like Google Scholar to find
          relevant labs and supervisors.
        </li>
        <li>
          <strong>Interview Preparation:</strong> Familiarize yourself with the
          professor’s work and express clearly why it resonates. And any of your
          prior experience in the same field.
        </li>
        <li>
          <strong>Openness:</strong> Be ready to explore various fields. It’s a
          learning journey, after all.
        </li>
        <li>
          <strong>Seeking Help:</strong> Don’t hesitate to ask for advice from
          doctoral or master's students in related fields.
        </li>
      </ul>

      <p>
        <strong>Pro Tip:</strong> A well-crafted email can go a long way. I
        spent 6-7 hours per professor, ensuring I understood their work. This
        effort paid off with an 80% response rate. Although I started late, I
        still managed to get responses from several potential supervisors.
      </p>
      <p>
        Despite a late start, I secured offers from universities like ULisboa,
        Duke, Insa Lyon, and HKUST. I chose HKUST due to its alignment with my
        interests and funding situation.
      </p>
      <h2>The Hong Kong Experience</h2>
      <p>
        My research journey at HKUST was a deep dive into the innovative world
        of Civil Engineering and AI, specifically focusing on crack segmentation
        in self-healing concrete and the predictive analysis of SHCC
        (Strain-Hardening Cementitious Composites) samples. This niche area
        offered a unique challenge at the crossroads of traditional civil
        engineering and cutting-edge artificial intelligence.
      </p>
      <h2>The Research Focus</h2>
      <p>
        The core of my work involved understanding and predicting the behavior
        of self-healing concrete. This futuristic material can repair its own
        cracks, a significant advancement in construction technology. My role
        was developing and refining algorithms to accurately segment
        images/videos of the samples in real-time and analyze the mechanical
        properties in concrete samples. The goal was to predict the material's
        mechanical properties, which are crucial for ensuring safety and
        durability in construction.
      </p>
      <h2>The Lab Experience</h2>
      <p>
        The labs at HKUST were state-of-the-art and equipped with the latest
        technology. Here, I spent countless hours, sometimes even overnight,
        meticulously testing and refining our models. The work was hands-on; I
        often prepared samples, conducted tests with MTS machines, and then
        analyzed the data. This blend of practical lab work and computational
        analysis was challenging and exhilarating. Collaborating with a team of
        seasoned researchers and fellow students, added depth to my learning. We
        would frequently engage in brainstorming sessions, discussing potential
        improvements and innovative approaches to our research problems. This
        collaborative environment was intellectually stimulating and fostered a
        sense of camaraderie among us.
      </p>

      <h2>Beyond the Lab</h2>
      <p>
        But my experience at HKUST wasn't confined to the lab. The campus,
        situated by the picturesque South China Sea, was a source of constant
        awe. The environment was an ideal blend of natural beauty and academic
        vigor, inspiring me daily.
      </p>
      <div className={style.rishiblog_img}>
        <img src={RishiBeyond} alt="rishiphoto" />
        <p>This is the view from my room.</p>
      </div>

      <p>
        Apart from academics, I had the chance to immerse myself in the local
        culture. I ventured out into the city, experiencing everything from the
        bustling markets of Mong Kok to serene temple visits. Learning Cantonese
        and mastering the art of eating with chopsticks were small but
        significant achievements, marking my integration into the local
        lifestyle.
      </p>

      {/* Transformative Experience Section */}
      <h2>A Transformative Experience</h2>
      <p>
        As my time at HKUST drew close, I realized how transformative this
        experience had been. It wasn't just the technical skills and research
        insights I gained; it was also about personal growth and cultural
        assimilation. The challenges faced, the connections made, and the sheer
        diversity of experiences profoundly impacted me as a student and
        individual.
      </p>
      <h2>Reflections and Looking Ahead</h2>
      <p>
        This journey has been more than just academic growth. It's been about
        personal development, cultural immersion, and pushing boundaries. As for
        the future, I'm keeping an open mind. I'm intrigued by the possibilities
        of further integrating technology into construction and am considering a
        master's degree to deepen my understanding.
      </p>
      <p>
        In conclusion, if you're contemplating a research internship, remember
        to research thoroughly, communicate effectively, and be open to new
        experiences. It's an adventure of a lifetime!
      </p>
    </div>
  );
};

export default RishiBlog;
