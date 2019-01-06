import {Fade, LinearProgress} from "@material-ui/core";
import React from "react";


export const RaUtil = {

    showLoader: (state) => {
        return (
            state ? (<Fade in={state}>
                <LinearProgress color="primary"/>
            </Fade>) : ""
        );
    },

    dateInputDateFormat: () => {
        let date = new Date();
        return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    }


};