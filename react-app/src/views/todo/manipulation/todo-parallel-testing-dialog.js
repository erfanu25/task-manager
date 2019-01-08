import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import {
    Button, TextField, Grid
} from '@material-ui/core'
import React from 'react';
import RaViewComponent from "../../../artifacts/ra-view-component";

export default class TodoParallelTestingDialog extends RaViewComponent {


    constructor(props) {
        super(props);
        this.state = {
            open: true,
            formData: {},
            formError: {},
        };
    }

    componentDidMount() {
        this.showFlashMessage();
    }


    closePopup = () => {
        const { parent } = this.props;
        parent.setState({isOpenTodoParallelTesting: false});
    };



    appRender() {
        return (
            <Dialog maxWidth="md"
                open={this.state.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Parallel Testing</DialogTitle>
                <DialogContent>
                    <form>
                        <Grid container spacing={8}>
                            <Grid item xs={12}><TextField label="Name" {...this.onChangeTextFieldProcessor("name")} fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Name" {...this.onChangeTextFieldProcessor("name")} fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Name" {...this.onChangeTextFieldProcessor("name")} fullWidth/></Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closePopup} color="primary" variant="raised">Save</Button>
                    <Button onClick={this.closePopup} color="primary" autoFocus variant="raised">Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}


TodoParallelTestingDialog.propTypes = {
    parent: PropTypes.object.isRequired
};

