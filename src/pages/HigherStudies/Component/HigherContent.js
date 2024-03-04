import React from 'react';
import style from "../higherstudies.module.css";

const HigherContent = () => {
  return (
    <div className={style.highercontent_main}>
      <div className={style.highercontent_heading}>
        <p>Time Table</p>
      </div>
      <div className={style.highercontent_a}>
        <p>
          One of the major concerns one has while applying graduate applications
          is what is the right time to start preparing for graduate admissions.
          The process is long and can be broken down into major milestones, such
          as giving GRE and TOEFL, choosing universities etc. Even though there
          is no fixed timeline, and you may choose to disagree, but below is a
          general timeline that most of the candidates follow and unless you
          have a very strong reason to delay any milestone we feel it may be
          helpful to stick to.
        </p>
        <p>
          <span>July/August: </span> Fix a date for GRE and TOEFL for
          mid-September or early if possible. The earlier you decide it, the
          earlier and easier it would be for you to prepare for them. Preferably
          set the date a month in advance as it becomes difficult to find a free
          test center on weekend if you register 1-2 weeks before. In the
          meanwhile, discuss with your professors/friends/family regarding the
          universities you should apply for. Depending on your long-term
          objectives and past works the universities would vary for each student
          and the best way to get an admit is to align your interest and
          background with the university’s requirement. You are allowed to send
          4 scores without any additional cost so it makes sense to send only to
          those you would ultimately apply for.
        </p>
        <p>
          <span>September: </span>Finish your tests and if you have scored less
          than what you expected don’t shy from giving it another shot. If you
          have already given the first test somewhere around 10th-14th September
          you can give another by October first week. Discuss with your
          Professors about your score and your chances in your university of
          choice with such a score.
        </p>
        <p>
          <span>October: </span>Having decided on the universities and this would
          be a crucial phase for you, go through university websites and make a
          document mentioning important information like Deadlines, Fees, SOPs
          and recommendation requirements and any other relevant stuff. Once you
          have decided on the universities it is good to start filling in the
          forms as a major chunk of the questions are pretty standard and you
          would not have to worry about them later on. Plus this gives you an
          advantage in case some universities have any peculiar requirements.
          Pay close attention to the deadlines as some universities will have
          Dec 1st as the deadline and you may have to speed up things for them.
        </p>
        <p>
          <span>End October/November: </span>We strongly suggest to start writing
          your SOPs when the month begins and have the first draft ready by the
          end of first week. This would be helpful in two ways
          <div className={style.highercontent_a_a}>
            <ul>
              <li>
                It would give you enough time for reviews from professors and
                seniors so that you do not have to continuously nag them
                everyday.
              </li>
              <li>
                This would also help you in approaching faculty for letters of
                recommendation. Faculty would generally ask for SOP and resume
                before starting the LOR. Your first draft would help them in
                deciding what to write and also remind them of finer points they
                may have forgotten.
              </li>
            </ul>
          </div>
          <p>
            Contact professors for letter of recommendations as early as
            possible. Generally give professors a month of time to write your
            letter. So it is ideal to have contacted and secured at least 3-4
            faculty members by 15th November. Work on your SOP and other essay
            questions and finalize them by end of November
          </p>
        </p>
        <p>
          <span>December: </span>This is the crucial phase but if you have stuck
          to the timeline above it would be smooth sailing. Most of the
          universities have deadlines of 15th Dec, but it varies and some also
          have deadlines as 1st Dec. If you have filled most of the sections
          initially and are done with the LOR and SOP then it would only take 1
          day for reviewing your application. Try to submit 2-3 days earlier as
          this gives you the opportunity to look for solutions in case a problem
          in payment comes up (Some Universities are specific about the type of
          card you pay with(eg. MasterCard only) and will not accept others).
          Once you are done with the submissions, sit back and relax. 🙂
        </p>
      </div>
    </div>
  )
}

export default HigherContent;
