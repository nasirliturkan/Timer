import React from "react";
import {connect} from "react-redux";

import {actionTypes} from "../type";

const ResetButton = ({ onResetTimer }:any) => {
    return <button onClick={() => onResetTimer()}>RESET</button>;
};
const mapDispatchToResetButtonProps = (dispatch:any) => ({
    onResetTimer: () => dispatch({ type: actionTypes.RESET }),
});

const ResetButtonContainer = connect(
    null,
    mapDispatchToResetButtonProps
)(ResetButton);

export default ResetButtonContainer;