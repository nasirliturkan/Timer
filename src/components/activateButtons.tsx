import React from "react";
import { connect } from "react-redux";

import { actionTypes } from "../type";

const ActivateButton = ({ timer, onStartTimer, onStopTimer }: any) => {
  return timer.isRunning ? (
    <button onClick={() => onStopTimer()}>STOP</button>
  ) : (
    <button onClick={() => onStartTimer()}>START</button>
  );
};

const mapStateToActivateButtonProps = (state: any) => ({
  timer: state.timer,
});
const mapDispatchToActivateButtonProps = (dispatch: any) => ({
  onStartTimer: () => {
    dispatch({ type: actionTypes.START });
  },
  onStopTimer: () => {
    dispatch({ type: actionTypes.STOP });
  },
});

const ActivateButtonContainer = connect(
  mapStateToActivateButtonProps,
  mapDispatchToActivateButtonProps
)(ActivateButton);

export default ActivateButtonContainer;
