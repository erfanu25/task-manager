import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import RaViewComponent from "../../artifacts/ra-view-component";
import RaAlertDialog from "../../artifacts/ra-alert-dialog";
import {
    Button, TextField, Grid
} from '@material-ui/core'
import React from 'react';
import {ApiURL} from "../../app/api-url";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

export default class TodoEditDialog extends RaViewComponent {


    constructor(props) {
        super(props);
        this.state = {
            open: true,
            formData: {},
            formError: {},
            priority: {},
            todoType: {}
        };
    }

    componentDidMount() {
        this.showFlashMessage();
        this.loadDropDownValues();
        const { parent, todoObject } = this.props;
        let id = todoObject.id;
        if (id) {
            this.showFlashMessage();
            this.getToApi(ApiURL.TodoDetails + "?propertyName=id&propertyValue=" + id, response => {
                this.setState({formData: response.data.response});
            });
        }else {
            parent.showErrorInfo("Invalid Todo Entity.");
            parent.setState({editPopup: false});
        }
    }


    closePopup = () => {
        const { parent } = this.props;
        parent.setState({editPopup: false});
    };

    loadDropDownValues(){
        this.getToApi(ApiURL.CommonDropDownConstant,  response => {
            let data = response.data.response;
            if (data.priority){
                this.setState({priority: data.priority})
            }
            if (data.complexityTaskType){
                this.setState({todoType: data.complexityTaskType})
            }
        });
    }

    appRender() {
        return (
            <Dialog maxWidth="md"
                open={this.state.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Edit Todo</DialogTitle>
                <DialogContent>
                    <form>
                        <Grid container spacing={8}>
                            {/*<Grid item xs={6}><TextField label="First name" {...this.onChangeTextFieldProcessor("firstName")} fullWidth/></Grid>*/}
                            {/*<Grid item xs={6}><TextField label="First name" {...this.onChangeTextFieldProcessor("firstName")} fullWidth/></Grid>*/}
                            {/*<Grid item xs={6}><TextField label="First name" {...this.onChangeTextFieldProcessor("firstName")} fullWidth/></Grid>*/}
                            {/*<Grid item xs={6}><TextField label="First name" {...this.onChangeTextFieldProcessor("firstName")} fullWidth/></Grid>*/}
                            {/*<Grid item xs={6}><TextField label="First name" {...this.onChangeTextFieldProcessor("firstName")} fullWidth/></Grid>*/}
                            {/*<Grid item xs={6}><TextField label="First name" {...this.onChangeTextFieldProcessor("firstName")} fullWidth/></Grid>*/}
                            <Grid item xs={3}>
                                <TextField {...this.onChangeSelectProcessor("priority")} placeholder="Priority" select fullWidth>
                                    {
                                        Object.entries(this.state.priority).map(([objectKey, objectValue], key) => {
                                            return (<MenuItem key={key} value={objectKey}>{objectValue}</MenuItem>)
                                        })
                                    }
                                </TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField {...this.onChangeSelectProcessor("todoType")} placeholder="Type" select fullWidth>
                                    {
                                        Object.entries(this.state.todoType).map(([objectKey, objectValue], key) => {
                                            return (<MenuItem key={key} value={objectKey}>{objectValue}</MenuItem>)
                                        })
                                    }
                                </TextField>
                            </Grid>
                            <Grid item xs={12}><TextField label="Name" {...this.onChangeTextFieldProcessor("name")} fullWidth/></Grid>
                            <Grid item xs={6}><TextField {...this.onChangeTextFieldProcessor("dueDate")} placeholder="Due Date" type="date" fullWidth/></Grid>
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
    parent: PropTypes.object.isRequired,
    todoObject: PropTypes.object.isRequired
};

TodoEditDialog.defaultProps = {
    title: "Confirm",
    okayLabel: "Confirm",
    cancelLabel: "Cancel",
};