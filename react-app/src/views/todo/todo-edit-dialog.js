import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import RaViewComponent from "../../artifacts/ra-view-component";
import RaAlertDialog from "../../artifacts/ra-alert-dialog";

export default class TodoEditDialog extends RaViewComponent {

    render() {
        const { isOpen, title, message, okayLabel, cancelLabel, okayFunction, cancelFunction } = this.props;
        return (
            <Dialog
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={okayFunction} color="primary">{okayLabel}</Button>
                    <Button onClick={cancelFunction} color="primary" autoFocus>{cancelLabel}</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

TodoEditDialog.defaultProps = {
    title: "Confirm",
    okayLabel: "Confirm",
    cancelLabel: "Cancel",
};