import React from 'react'
import RaViewComponent from "./../../artifacts/ra-view-component";
import {
    Paper, Typography, Button, TableRow, TableCell
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ApiURL} from "../../app/api-url";
import {AppConstant} from "../../app/app-constant";
import {viewCommon} from "../../assets/jss/style-jss";
import Grid from "@material-ui/core/Grid/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import TodoComplexityDialog from "./manipulation/todo-complexity-dialog";
import TodoChangeLogDialog from "./manipulation/todo-change-log-dialog";
import TodoParallelTestingDialog from "./manipulation/todo-parallel-testing-dialog";
import TodoNoteDialog from "./manipulation/todo-note-dialog";
import TodoBugReportDialog from "./manipulation/todo-bug-report-dialog";
import {RaGsConditionMaker} from "../../artifacts/ra-gs-condition-maker";
import RaStaticHolder from "../../artifacts/ra-static-holder";
import RaTableAction from "../../artifacts/ra-table-action";





class TodoManipulationView extends RaViewComponent {

    constructor(props) {
        super(props);
        this.state = {
            orderBy: "id",
            order: "desc",
            allDetails: [],
            complexityAndSteps: [],
            total: 0,
            max: AppConstant.rowsPerPage,
            offset: AppConstant.defaultOffset,
            isOpenTodoComplexity: false,
            isOpenTodoChangeLog: false,
            isOpenTodoParallelTesting: false,
            isOpenTodoNotes: false,
            isOpenTodoBugReports: false,
        };
    }


    componentDidMount() {
        this.showFlashMessage();
        this.loadAllDetails();
    }


    loadAllDetails() {
        let id = this.getValueFromParams("id");
        if (id) {
            let condition = RaGsConditionMaker.equal({}, "id", id);
            this.postJsonToApi(ApiURL.TodoAllDetails, condition, response => {
                let allDetails = response.data.response;
                this.setState({allDetails: allDetails});
                if (Object.getOwnPropertyNames(allDetails.complexity).length) {
                    this.setState({complexityAndSteps: allDetails.complexity});
                }
            });
        }else{
            RaStaticHolder.addMessageData("Invalid Todo Details", false);
            this.goToUrl("/todo");
        }
    }


    loadComplexityWithSteps(callBack) {
        this.getToApi(ApiURL.ComplexityGetDetailsByTodo + "?todoId=" + this.state.allDetails.id, response => {
            let responseData = response.data.response;
            if (responseData){
                this.setState({complexityAndSteps: responseData});
            }
            if (callBack){
                callBack();
            }
        });
    }


    openTodoComplexity(event){
        this.setState(state => ({
            isOpenTodoComplexity: true
        }));
    }

    openTodoChangeLog(event){
        this.setState(state => ({
            isOpenTodoChangeLog: true
        }));
    }

    openTodoNotes(event){
        this.setState(state => ({
            isOpenTodoNotes: true
        }));
    }

    openTodoBugReports(event){
        this.setState(state => ({
            isOpenTodoBugReports: true
        }));
    }

    openTodoParallelTesting(event){
        this.setState(state => ({
            isOpenTodoParallelTesting: true
        }));
    }

    appRender() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                {this.state.isOpenTodoComplexity ? (<TodoComplexityDialog parent={this} />): ""}
                {this.state.isOpenTodoChangeLog ? (<TodoChangeLogDialog parent={this} />): ""}

                {this.state.isOpenTodoParallelTesting ? (<TodoParallelTestingDialog parent={this} />): ""}
                {this.state.isOpenTodoNotes ? (<TodoNoteDialog parent={this} />): ""}
                {this.state.isOpenTodoBugReports ? (<TodoBugReportDialog parent={this} />): ""}
                <Paper className={classes.mainActionArea}>
                <Grid container spacing={8}>

                    <Grid item xs={12}>
                        <ExpansionPanel defaultExpanded={ !!this.state.allDetails.description}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="headline">{this.state.allDetails.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>{this.state.allDetails.description}</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>


                    <Grid item xs={12}>
                        <Paper className={classes.mainActionArea}>
                            <Grid container spacing={8}>
                                <Grid item xs={8}>
                                    <Paper className={classes.againMainActionArea}>
                                        <div>
                                            <Typography variant="headline" align="center">Complexity</Typography>
                                        </div>
                                        <div>
                                           <Button variant="contained" onClick={(e) => {this.openTodoComplexity(e)}}><AddIcon/></Button>
                                        </div>
                                    </Paper>

                                    {this.state.complexityAndSteps.map(function (complexity, key) {
                                        return (
                                            <ExpansionPanel key={key}>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <Typography className={classes.heading}>{complexity.name}</Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                        sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        )
                                    })}

                                    <div className={classes.againMainActionArea}/>
                                    <div className={classes.againMainActionArea}/>
                                    <Paper className={classes.againMainActionArea}>
                                        <div>
                                            <Typography variant="headline" align="center">Parallel Testing</Typography>
                                        </div>
                                        <div>
                                            <Button variant="contained" onClick={(e) => {this.openTodoParallelTesting(e)}}><AddIcon/></Button>
                                        </div>
                                    </Paper>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Discount On Order</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Expansion Panel 2</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.againMainActionArea}>
                                        <div>
                                            <Typography variant="headline" >Change Log</Typography>
                                        </div>
                                        <div>
                                            <Button variant="contained" onClick={(e) => {this.openTodoChangeLog(e)}}><AddIcon/></Button>
                                        </div>
                                    </Paper>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Discount On Order</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Expansion Panel 2</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                    <div className={classes.againMainActionArea}/>
                                    <Paper className={classes.againMainActionArea}>
                                        <div>
                                            <Typography variant="headline">Notes</Typography>
                                        </div>
                                        <div>
                                            <Button variant="contained" onClick={(e) => {this.openTodoNotes(e)}}><AddIcon/></Button>
                                        </div>
                                    </Paper>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Expansion Panel 1</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Expansion Panel 2</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                    <div className={classes.againMainActionArea}/>
                                    <Paper className={classes.againMainActionArea}>
                                        <div>
                                            <Typography variant="headline">Bug Reports</Typography>
                                        </div>
                                        <div>
                                            <Button variant="contained" onClick={(e) => {this.openTodoBugReports(e)}}><AddIcon/></Button>
                                        </div>
                                    </Paper>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Expansion Panel 1</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography className={classes.heading}>Expansion Panel 2</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                </Paper>
        </React.Fragment>);
    }
}
export default withStyles(viewCommon)(TodoManipulationView);