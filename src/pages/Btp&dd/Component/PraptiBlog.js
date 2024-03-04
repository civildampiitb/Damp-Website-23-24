import React from "react";
import style from "../btp.module.css";

const PraptiBlog = () => {
  return (
    <div className={style.praptiblog}>
      {/* Introduction */}
      <h1>My BTP Experience in Transportation Engineering</h1>
      <p>
        Hello everyone! I am Prapti Sao, a final year student from the
        department of Civil Engineering. I have completed my BTP I under Prof.
        Nagendra Velaga and am writing this quick piece to share my experience
        regarding the same!
      </p>

      {/* How Did I End Up Taking BTP */}
      <h2>How Did I End Up Taking BTP?</h2>
      <p>
        The Civil Engineering course curriculum touches upon all the major
        topics and sub-fields by the end of the 6th semester. At the beginning
        of the 7th semester, I was pretty sure that I wanted to take up
        something that would involve practical usage of the knowledge gained
        till now.
      </p>
      <p>
        BTP seemed to be an interesting choice as I was getting not only
        hands-on experience and practical knowledge but also the freedom to
        pursue it at my own pace over the semester without me being bound to any
        fixed time-table and classes.
      </p>

      {/* Process (Topic Choice + Logistics) */}
      <h2>Process (Topic Choice + Logistics)</h2>
      <p>
        Firstly, I registered for the relevant course code (For BTP I) on ASC.
        The next step was to finalize the guide and the topic. Again, a pretty
        good advantage here was that being in 7th sem I had gotten a decent
        flavor of the broad sub-fields and knew where my interests lied.
      </p>
      <p>
        Transportation Engineering was the field I zeroed upon. Prof. Velaga had
        taught us both the UG courses on transportation engineering and during
        his lectures, he used to talk about his research interests in traffic
        simulations using VISSIM software and subsequent designing/ redesigning
        of intersections. He had also conducted some demo sessions for us on
        VISSIM.
      </p>
      <p>
        This in particular caught my eye and I approached him to offer me a
        project on similar lines. A quick advice here would be that don’t
        hesitate to approach professors and have a hearty chat on your
        expectations from the project. From what I have seen, professors help
        you to figure out the right topic and guide according to your interests
        and redirect you to the relevant professor if required.
      </p>
      <p>
        After having a discussion with Prof. Velaga, we decided to work on
        simulating and redesigning the intersection in front of IIT Bombay Main
        Gate on PTV Vissim software.
      </p>
      <p>
        The further logistics involved were getting a form from the Civil
        Department Office, mentioning your topic, getting it signed from your
        guide and submitting it back to the office.
      </p>

      {/* My Experience with BTP */}
      <h2>My Experience with BTP</h2>
      <p>
        Would keep this part short, because don’t want to bore you all with the
        technical jargon :P Just want to give a flavor of how you can expect
        your BTP journey to be. However, BTP is a highly individualistic course
        and the experience varies from person to person..
      </p>
      <p>
        I began with refreshing my concepts of transportation and engineering
        and watching tutorials to get acquainted with the BTP software. For the
        simulation I needed real time data as well as intersection details. For
        this I made multiple visits to the Main gate and recorded videos from
        various angles around the intersection (The Towards Andheri and Towards
        Kanjurmarg roads, the link condensing into them and the corresponding
        intersection formed).
      </p>
      <p>
        Using these videos and google maps I built a model intersection on PTV
        Vissim. I then used the videos to calculate the Peak Hourly Flows and
        Vehicle Composition data and fed it to the software to run the
        simulation. The fun part was that the simulation that I got resembled a
        lot of real life scenarios of congestion and pedestrian problems faced
        at the intersection.
      </p>
      <p>
        This was my scope of project for BTP I, this was followed by submission
        of a report on my findings and a short presentation in front of your
        guide and an external professor towards the end.
      </p>
      <p>
        The key to success over here is to stay consistent and have regular
        meetings with your guide to avoid a dampened experience for you as well
        as your guide.
      </p>
      <p>
        Future scope of the project involves redesigning the intersection to
        improve upon the drawbacks observed and iterate the modeling on Vissim.
      </p>

      {/* Parting Words or a Piece of Wisdom */}
      <h2>Parting Words or a Piece of Wisdom :)</h2>
      <p>
        If you're someone who wants to get a quick research experience, I would
        surely recommend you to take up BTP. It’s a great way to discover
        whether research is your cup of tea (Whether you want to pursue it
        further) as well as it opens up new avenues like obtaining an URA
        (Undergraduate Research Award).
      </p>
      <p>
        It’s the best way to get hands-on experience on courses without the
        hassle of attending classes.
      </p>
      <p>
        Moreover the one-on-one interaction with your guide will be an enriching
        experience for sure.
      </p>
      <p>
        Hope this quick piece helped you to get better informed on what exactly
        BTP has in store for you. Thanks a lot for reading through :)
      </p>
    </div>
  );
};

export default PraptiBlog;
