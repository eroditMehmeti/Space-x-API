import "bootstrap/dist/css/bootstrap.css";
import "./GetPastMissions.css";

import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PAST_LAUNCHES } from "../GraphQL/Queries";
import { Link } from "react-router-dom";

function GetPastMissions() {
  const { data } = useQuery(LOAD_PAST_LAUNCHES);
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    if (data) {
      setMissions(data.launchesPast);
    }
  }, [data]);

  return (
    <div>
      <div class="d-flex mb-3 flex-wrap bg-secondary">
        {""}
        {missions.map((mission) => {
          return (
            <div class="card w-25 p-3 overflow-auto m-5">
              <div className="main-page">
                <div class="card-body h-25 overflow-auto" className="card-body">
                  <div key={mission.id}>
                    <h1 class="card-title" className="missionName">
                      {mission.mission_name}
                    </h1>
                    <p class="card-text" className="mission-details">
                      {mission.details}
                    </p>
                    <img
                      class="card-img-bottom"
                      width="600px"
                      src={mission.links.mission_patch}
                      className="mission-image"
                    />
                    <Link to={`/${mission.id}`}>
                      <button className="Details-button">
                        {""}
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default GetPastMissions;
