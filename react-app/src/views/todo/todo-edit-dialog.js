import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import RaViewComponent from "../../artifacts/ra-view-component";
import RaAlertDialog from "../../artifacts/ra-alert-dialog";
import {
    Button, TextField, FormControl, InputLabel, Radio,
    Select,MenuItem, FormControlLabel, Checkbox, FormGroup, FormLabel,RadioGroup,
    Card, CardContent, CardActions, CardHeader, Grid
} from '@material-ui/core'
import FormHelperText from "@material-ui/core/es/FormHelperText/FormHelperText";
import React from 'react';

export default class TodoEditDialog extends RaViewComponent {


    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    }

    closePopup = () => {
        const { parent } = this.props;
        parent.setState({editPopup: false});
    };


    appRender() {
        const { isOpen, title, message, okayLabel, cancelLabel, cancelFunction } = this.props;
        return (
            <Dialog maxWidth="md"
                open={this.state.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Edit Todo List</DialogTitle>
                <DialogContent>
                    <form>
                        <Grid container spacing={8}>
                            <Grid item xs={6}><TextField label="First name" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Last name" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Mobile" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="website" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Email" type="email" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Birthday" fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Password" type="password" fullWidth/></Grid>
                            <Grid item xs={6}>
                                <FormControl>
                                    <FormControlLabel control={<Checkbox value="checkedC" />} label="Single Checkbox" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormControlLabel control={<Checkbox value="checkbox1" />} label="Checkbox 1"/>
                                    <FormControlLabel control={<Checkbox value="checkbox2" />} label="Checkbox 2" />
                                    <FormControlLabel control={<Checkbox value="checkbox3" />} label="Checkbox 3"/>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Bio" fullWidth multiline rows={3}/>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closePopup} color="primary" variant="raised">Update</Button>
                    <Button onClick={this.closePopup} color="primary" autoFocus variant="raised">Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}


RaAlertDialog.propTypes = {
    parent: PropTypes.object.isRequired
};

TodoEditDialog.defaultProps = {
    title: "Confirm",
    okayLabel: "Confirm",
    cancelLabel: "Cancel",
};