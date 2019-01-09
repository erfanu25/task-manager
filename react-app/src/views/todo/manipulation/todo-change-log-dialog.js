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
import {RaGsConditionMaker} from "../../../artifacts/ra-gs-condition-maker";
import {ApiURL} from "../../../app/api-url";

export default class TodoChangeLogDialog extends RaViewComponent {


    constructor(props) {
        super(props);
        this.state = {
            open: true,
            formData: {},
            formError: {},
            status: {},
            type: {},
            taskType: {},
        };
    }


    closePopup = () => {
        const { parent } = this.props;
        parent.setState({isOpenTodoChangeLog: false});
    };

    loadAllDetails() {
        const { allDetails } = this.props;
        let id = allDetails.id;
        if (id) {
            let condition = RaGsConditionMaker.equal({}, "id", id);
            this.postJsonToApi(ApiURL.TodoAllDetails, condition, response => {
                this.setState({allDetails: response.data.response});
            });
        }
    }

    formSubmitHandler = event => {
        event.preventDefault();
        const { parent } = this.props;
        let formData = this.state.formData;
        let allDetails = parent.state.allDetails;
        formData.todoId = allDetails.id;
        let url = ApiURL.ChangeLogCreate;
        let successMessage = "Successfully Created!!";
        let id = this.getValueFromParams("id");
        if (id){
            url = ApiURL.ChangeLogUpdate;
            successMessage = "Successfully Updated!!";
            formData = RaGsConditionMaker.equal(formData, "id", Number(id))
        }

        this.postJsonToApi(url, formData, success => {
                let data = success.data;
                if (data.isSuccess){
                    parent.loadChangeLogWithSteps(
                        ()=>{
                            this.closePopup();
                            parent.showSuccessInfo(successMessage);
                        }
                    );
                }else{
                    this.showErrorInfo(response.message)
                }
            }
        )
    };


    appRender() {
        return (
            <Dialog maxWidth="md"
                    open={this.state.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Change Log</DialogTitle>
                <DialogContent>
                    <form onSubmit={this.formSubmitHandler}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}><TextField label="Name" {...this.onChangeTextFieldProcessor("name")} fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Description" {...this.onChangeTextFieldProcessor("description")} fullWidth/></Grid>
                            <Grid item xs={6}><TextField label="Other Info" {...this.onChangeTextFieldProcessor("otherInfo")} fullWidth/></Grid>
                        </Grid>

                        <DialogActions>
                            <Button type="submit" color="primary" variant="raised">Save</Button>
                            <Button onClick={this.closePopup} color="primary" autoFocus variant="raised">Cancel</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        );
    }
}


TodoChangeLogDialog.propTypes = {
    parent: PropTypes.object.isRequired
};

