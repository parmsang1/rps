import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Rock } from "../../assets/rock.svg";
import { ReactComponent as Scissors } from "../../assets/scissors.svg";

function HandImage(props) {
  if (!props.selectedHand) return null;
  if (props.selectedHand === "Rock") return <Rock fill={props.fill} />;
  if (props.selectedHand === "Paper") return <Paper fill={props.fill} />;
  if (props.selectedHand === "Scissors") return <Scissors fill={props.fill} />;
}

HandImage.propTypes = {};

export default HandImage;
