import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FIND_LAUNCH, LOAD_ONE_PAST_LAUNCH } from "../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import "./RocketDetails.css";

export default function RocketDetails() {
  const { id } = useParams();
  const [launch, setLaunch] = useState({});

  // Tried to get the data for the given id but the graphql was not returning results when queried with the id

  // const { data } = useQuery(FIND_LAUNCH, {
  //   variables: {
  //     id,
  //   },
  // });

  const { data } = useQuery(LOAD_ONE_PAST_LAUNCH);
  useEffect(() => {
    console.log(data);
    if (data && data.launchesPast && data.launchesPast.length > 0) {
      setLaunch(data.launchesPast[0]);
    }
  }, [data]);
  return (
    <div>
      <h2 className="rocket-title">Rocket Details</h2>
      <ul class="list-group" className="rocket-details-list">
        <h4>Mission Name</h4>
        <li class="list-group-item">{launch.mission_name}</li>
        <h4>Rocket Name</h4>
        <li class="list-group-item">{launch?.rocket?.rocket?.name}</li>
        <h4>Rocket Type</h4>
        <li class="list-group-item">{launch?.rocket?.rocket?.type}</li>
        <h4>Rocket Description</h4>
        <li class="list-group-item">{launch?.rocket?.rocket?.description}</li>
        <h4>Rocket Stage</h4>
        <li class="list-group-item">{launch?.rocket?.rocket?.stages}</li>
      </ul>
    </div>
  );
}
