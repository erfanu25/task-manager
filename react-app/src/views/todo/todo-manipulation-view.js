import React from 'react'
import RaViewComponent from "./../../artifacts/ra-view-component";
import { Paper, Typography,Button
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





class TodoManipulationView extends RaViewComponent {

    constructor(props) {
        super(props);
        this.state = {
            orderBy: "id",
            order: "desc",
            users: [],
            total: 0,
            max: AppConstant.rowsPerPage,
            offset: AppConstant.defaultOffset,
            countrySelect: 'bangladesh',
        };
    }


    componentDidMount() {
        this.showFlashMessage();
        this.loadList();
    }

    loadList(condition = {}){
        condition = this.loadOffsetMax(condition);
        this.postJsonToApi(ApiURL.UserList, condition, response => {
            this.setState({users:response.data.response});
            this.setState({total: response.data.total ? response.data.total : 0});
        });
    }


    reload = event => {
      this.loadList();
    };




    appRender() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Paper className={classes.mainActionArea}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <ExpansionPanel defaultExpanded>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Todo List Name</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
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
                                           <Button variant="contained"><AddIcon/></Button>
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
                                    <div className={classes.againMainActionArea}/>
                                    <Paper className={classes.againMainActionArea}>
                                        <div>
                                            <Typography variant="headline" align="center">Parallel Testing</Typography>
                                        </div>
                                        <div>

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
                                            <Button variant="contained"><AddIcon/></Button>
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
                                            <Button variant="contained"><AddIcon/></Button>
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
                                            <Button variant="contained"><AddIcon/></Button>
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