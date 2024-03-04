import "./pastDAMPC.css";
import { PastCoordinator } from "./pastDAMPC_Card";
import aman from "../../../assets/Aman.png";
import sunandinee from "../../../assets/image-2.png";
import bhuvan from "../../../assets/bhuvan.png";
import jaymal from "../../../assets/Jaymal.png";
import saumya from "../../../assets/saumya.png";
import amandeep from "../../../assets/amandeep.png";
import ram from "../../../assets/ram.png";
export const PastDAMPCsComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-semibold">Former DAMPCs</p>
      </div>
      <div className="pb-12 flex flex-col">
        <div className="flex flex-row items-center justify-between px-44">
          <PastCoordinator
            name="Sunandinee Mehra"
            img={sunandinee}
            year="2023-2024"
          />
          <div className="w-96 min-h-32 bg-blue-200 font-medium rounded-md px-8 py-4">
            "It was a rewarding tenure riddled with challenges and milestones -
            academic reforms, strategic changes and holistic support systems -
            we saw it all :) Definitely one of the most enriching experiences of
            my insti life! "
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-44">
          <div className="w-96 h-32 bg-blue-200 font-medium rounded-md px-8 py-4">
            "It was a rewarding tenure as we facilitated empowering growth and
            helped people through meaningful connections and shared learning"
          </div>
          <div className="flex flex-row">
            <PastCoordinator
              name="Bhuvan Aggarwal"
              img={bhuvan}
              year="2022-2023"
            />
            <PastCoordinator name="Aman Jain" img={aman} year="2022-2023" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-44">
          <div className="flex flex-row">
            <PastCoordinator
              name="Jaymal Lodha"
              img={jaymal}
              year="2021-2022"
            />
            <PastCoordinator
              name="Amandeep Singh"
              img={amandeep}
              year="2021-2022"
            />
          </div>
          <div className="w-96 min-h-32 bg-blue-200 font-medium rounded-md px-8 py-4">
            Jaymal - "Taking 'mentorship' - essentially an in-person experience
            - online was a truly gratifying experience with immense learning"
            <br></br>
            Amandeep - "The online semester DAMPCs!! The tenure had new
            challenges, new learnings"
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-44">
          <div className="w-96 min-h-32 bg-blue-200 font-medium rounded-md px-8 py-4">
            "It was a very different tenure because of entirely being online due
            to COVID. We introduced initiatives tailored for the situation like
            introducing subgroups of mentors to take help sessions and multiple
            faculty student meetups to ensure communication and counselling in
            an online semester."
          </div>
          <div className="flex flex-row">
            <PastCoordinator
              name="Saumya Birla"
              img={saumya}
              year="2020-2021"
            />
            <PastCoordinator name="Ram Bub" img={ram} year="2020-2021" />
          </div>
        </div>
      </div>
    </>
  );
};
