import React from "react";
import SimpleModal from "../presentational/SimpleModal";
import Web3 from "web3";
import TruffleContract from "truffle-contract";
import Project from "../../build/contracts/Project.json";
import Deliverables from "../../build/contracts/Deliverables.json";
import Button from "@material-ui/core/Button";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      deliverables: [],
      project: {}
    };
  }
  render() {
    console.log(Web3);
    console.log(TruffleContract);
    console.log(Project);
    console.log(Deliverables);
    return (
      <div>
        <h2>Profile Page </h2>
        <SimpleModal />
      </div>
    );
  }
}

export default Profile;
