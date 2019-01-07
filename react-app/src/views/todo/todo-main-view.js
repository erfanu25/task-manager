import React from 'react'
import RaViewComponent from "./../../artifacts/ra-view-component";
import {
    DateAndTimePickers,
    TableRow, TableCell, TableBody, Paper, Table, Typography,Button,TextField
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import RaTableHeader from './../../artifacts/ra-table-header';
import RaPagination from './../../artifacts/ra-pagination';
import RaTableAction, {ActionDefinition} from "../../artifacts/ra-table-action";
import {RaGsConditionMaker} from "../../artifacts/ra-gs-condition-maker";
import {ApiURL} from "../../app/api-url";
import {AppConstant} from "../../app/app-constant";
import {viewCommon} from "../../assets/jss/style-jss";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Grid from "@material-ui/core/Grid/Grid";
import TodoManipulationView from "../todo/todo-manipulation-view";
import {RaUtil} from "../../artifacts/ra-util";



export const TodoOtherUrls = [
    {
        path: "/todo/manipulation/:id",
        name: "Todo Manipulation",
        component: TodoManipulationView,
        isActive: true,
    },
];

const tableHeader = [
    {id: 'name', numeric: false, disablePadding: false, label: 'Name'},
    {id: 'priority', numeric: false, disablePadding: false, label: 'Priority'},
    {id: 'todoType', numeric: false, disablePadding: false, label: 'Todo Type'},
    {id: 'status', numeric: false, disablePadding: false, label: 'Status'},
];

class TodoMainView extends RaViewComponent {

    constructor(props) {
        super(props);
        this.state = {
            orderBy: "id",
            order: "desc",
            todoList: [],
            formData: {},
            formError: {},
            total: 0,
            max: AppConstant.rowsPerPage,
            offset: AppConstant.defaultOffset,
            priority: {},
            todoType: {},
        };
    }


    componentDidMount() {
        this.initiateForm();
    }


    initiateForm() {
        this.setState((state) => {
            let formData = {
                priority: "NA",
                todoType: "OTHERS",
                dueDate: RaUtil.dateInputDateFormat(),
            };
            return {formData: formData};
        });
        this.showFlashMessage();
        this.loadDropDownValues();
        this.loadList();
    }

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

    loadList(condition = {}) {
        condition = this.loadOffsetMax(condition);
        this.postJsonToApi(ApiURL.TodoList, condition, response => {
            this.setState({todoList: response.data.response});
            this.setState({total: response.data.total ? response.data.total : 0});
        });
    }

    reload = event => {
      this.loadList();
    };

    formSubmitHandler = event => {
        event.preventDefault();
        let formData = this.state.formData;
        let url = ApiURL.TodoQuickCreate;
        let successMessage = "Successfully Created!!";
        let id = this.getValueFromParams("id");
        if (id){
            url = ApiURL.TodoUpdate;
            successMessage = "Successfully Updated!!";
            formData = RaGsConditionMaker.equal(formData, "id", Number(id))
        }
        this.postJsonToApi(url, formData,
            success => {
                let successMap = {successRedirectUrl: "/todo", successMessage: successMessage, callBack: (data) => {this.initiateForm()}};
                this.processFormResponseAdvance(success.data, successMap);
            }
        )
    };

    clickOnSort = (name, row, event) => {
        let condition = this.sortProcessor(name);
        this.loadList(condition);
    };


    deleteAction = (event, actionDefinition) =>{
        let additionalInformation = actionDefinition.additionalInformation;
        let component = actionDefinition.component;
        if (additionalInformation.id) {
            let formData = RaGsConditionMaker.equal({}, "id", additionalInformation.id);
            component.deleteJsonToApi(ApiURL.UserDelete, formData,
                success => {
                    component.processFormResponse(success.data, "/user");
                    component.loadList();
                    component.showSuccessInfo("Successfully Deleted")
                }
            )
        }
    };

    editAction (event, actionDefinition){
        let additionalInformation = actionDefinition.additionalInformation;
        actionDefinition.component.goToUrl("/user/create-update/" + additionalInformation.id)
    };

    manipulation (event, actionDefinition){
        let additionalInformation = actionDefinition.additionalInformation;
        actionDefinition.component.goToUrl("/todo/manipulation/" + additionalInformation.id)
    };


    appRender() {
        const {classes} = this.props;

        let tableActions = info =>{
            let actions = ActionDefinition.commonActions(info, this);
            actions.editAction.action = this.editAction;
            actions.viewAction.action = this.manipulation;
            actions.deleteAction.action = this.deleteAction;
            return actions;
        };

        return (<React.Fragment>
            <Paper className={classes.mainActionArea}>
                <div>
                    <Typography variant="headline">Todo List</Typography>
                    <Grid container spacing={8}>
                        <Grid item xs={6}><TextField label="Search" fullWidth/></Grid>
                        <Grid item xs={6}><TextField label="First name" fullWidth/></Grid>
                    </Grid>
                </div>
                <div>
                    <form onSubmit={this.formSubmitHandler} >
                    <Typography variant="headline">Create Todo</Typography>
                    <Grid container spacing={8}>
                        <Grid item xs={12}><TextField {...this.onChangeTextFieldProcessor("name")} placeholder="Name" fullWidth/></Grid>
                        <Grid item xs={4}><TextField {...this.onChangeTextFieldProcessor("dueDate")} placeholder="Due Date" type="date" fullWidth/></Grid>
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
                        <Grid item xs={2}><Button variant="contained" type="submit" color="primary" fullWidth>Add</Button></Grid>
                    </Grid>
                    </form>
                </div>
            </Paper>
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <RaTableHeader
                            clickForSort={this.clickOnSort}
                            rows={tableHeader}
                            order={this.state.order}
                            orderBy={this.state.orderBy}/>
                        <TableBody>
                            {this.state.todoList.map(function (todo, key) {
                                return (
                                    <TableRow key={key}>
                                        <TableCell>{todo.name}</TableCell>
                                        <TableCell>{todo.priority}</TableCell>
                                        <TableCell>{todo.todoType}</TableCell>
                                        <TableCell>{todo.status}</TableCell>
                                        <TableCell numeric><RaTableAction tableActions={tableActions(todo)}/></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                <RaPagination {...this.paginationProcessor()}/>
            </Paper>
        </React.Fragment>);
    }
}
export default withStyles(viewCommon)(TodoMainView);