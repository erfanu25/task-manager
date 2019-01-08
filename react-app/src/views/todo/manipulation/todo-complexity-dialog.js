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
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {ApiURL} from "../../../app/api-url";
import {RaGsConditionMaker} from "../../../artifacts/ra-gs-condition-maker";


export default class TodoComplexityDialog extends RaViewComponent {


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

    componentDidMount() {
        this.showFlashMessage();
        this.setState((state) => {
            let formData = {
                status: "DRAFT",
                type: "OTHERS",
                taskType: "OTHERS",
            };
            return {formData: formData};
        });
        this.loadDropDownValues();
    }


    closePopup = () => {
        const { parent } = this.props;
        parent.setState({isOpenTodoComplexity: false});
    };


    loadDropDownValues(){
        this.getToApi(ApiURL.CommonDropDownConstant,  response => {
            let data = response.data.response;
            if (data.status){
                this.setState({status: data.status})
            }
            if (data.complexityTaskType){
                this.setState({taskType: data.complexityTaskType})
            }
            if (data.complexityType){
                this.setState({type: data.complexityType})
            }
        });
    }


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
        let url = ApiURL.ComplexityCreate;
        let successMessage = "Successfully Created!!";
        let id = this.getValueFromParams("id");
        if (id){
            url = ApiURL.ComplexityUpdate;
            successMessage = "Successfully Updated!!";
            formData = RaGsConditionMaker.equal(formData, "id", Number(id))
        }

        console.log(formData);
        console.log(url);

        this.postJsonToApi(url, formData,success => {
                let successMap = {successRedirectUrl: "/todo", successMessage: successMessage, callBack: (data) => {this.initiateForm()}};
                this.processFormResponseAdvance(success.data, successMap);
            }
        )
    };



    appRender() {
        return (
            <Dialog maxWidth="md"
                open={this.state.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Complexity</DialogTitle>
                <DialogContent>
                    <form onSubmit={this.formSubmitHandler}>
                        <Grid container spacing={8}>
                            <Grid item xs={2}>
                                <TextField {...this.onChangeSelectProcessor("status")} label="Status" select fullWidth>
                                    {
                                        Object.entries(this.state.status).map(([objectKey, objectValue], key) => {
                                            return (<MenuItem key={key} value={objectKey}>{objectValue}</MenuItem>)
                                        })
                                    }
                                </TextField>
                            </Grid>

                            <Grid item xs={3}>
                                <TextField {...this.onChangeSelectProcessor("taskType")} label="Task Type" select fullWidth>
                                    {
                                        Object.entries(this.state.taskType).map(([objectKey, objectValue], key) => {
                                            return (<MenuItem key={key} value={objectKey}>{objectValue}</MenuItem>)
                                        })
                                    }
                                </TextField>
                            </Grid>

                            <Grid item xs={3}>
                                <TextField {...this.onChangeSelectProcessor("type")} label="Type" select fullWidth>
                                    {
                                        Object.entries(this.state.type).map(([objectKey, objectValue], key) => {
                                            return (<MenuItem key={key} value={objectKey}>{objectValue}</MenuItem>)
                                        })
                                    }
                                </TextField>
                            </Grid>

                            <Grid item xs={2}><TextField name="" label="Started" disabled value={this.state.formData.startedMoment}  fullWidth/></Grid>
                            <Grid item xs={2}><TextField label="Estimation" disabled value={this.state.formData.estimatedHour}   fullWidth/></Grid>

                            <Grid item xs={12}><TextField name="" label="Name" {...this.onChangeTextFieldProcessor("name")} fullWidth/></Grid>
                            <Grid item xs={12}><TextField multiline rows={3} label="Description" {...this.onChangeTextFieldProcessor("description")} fullWidth/></Grid>
                            <Grid item xs={12}><TextField multiline rows={3} label="Reference" {...this.onChangeTextFieldProcessor("reference")} fullWidth/></Grid>
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


TodoComplexityDialog.propTypes = {
    parent: PropTypes.object.isRequired
};

