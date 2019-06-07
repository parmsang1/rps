import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Rock } from "../../assets/rock.svg";
import { ReactComponent as Scissors } from "../../assets/scissors.svg";

function HandImage(props) {
  if (props.selectedHand === "Rock") return <Rock />;
  if (props.selectedHand === "Paper") return <Paper />;
  if (props.selectedHand === "Scissors") return <Scissors />;
}

HandImage.propTypes = {};

export default HandImage;
