import React from "react";
import style from "../component/../about.module.css";
import data from "../../../data/photodata";

const FrontCard = () => {
  return (
    <div>
      <p className={style.team_heading}>Our Team</p>
      <p className={style.card_heading}>D-AMP Coordinators</p>
      <div className={style.card_list}>
        <div className={style.card}>
          <img
              src="https://civildampiitb.github.io/images/croppednew/IMG_0070.jpeg"
              alt="Profile"
              className={style.profile_image}
            />
          <div className={style.card_content}>
            <p className={style.name}>Sunandinee Mehra</p>
            <p className={style.position_name}>D-AMP Coordinators</p>

            <p className={style.email_id}>200040144@iitb.ac.in</p>
            <p className={style.about}>
              I'm interested in journalism, photography, literature, fitness,
              baking, art, nature, badminton, theatre... So I chose engineering
              :) Always up for a chat, do stop by if we cross paths on campus.
            </p>
          </div>
        </div>
      </div>
      <p className={style.card_heading}>D-AMP Mentors</p>
      <div className={style.card_list}>
        {data.map((profile) => (
          <div className={style.card} key={profile.id}>
            <img
              src={profile.image}
              alt="Profile"
              className={style.profile_image}
            />
            <div className={style.card_content}>
              <p className={style.name}>{profile.Name}</p>
              <p className={style.position_name}>{profile["Roll No"]}</p>
              <p className={style.email_id}>{profile["e-mail"]}</p>
              <p className={style.about}>{profile.About}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontCard;
