import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export interface Props {
    id: number;
    title: string;
    secondaryTitle?: string;
    expanded: boolean;
    onChange: Function;
}

export class AppExpansionPanel extends React.Component<Props> {
    render() {
        return (
            <ExpansionPanel
                expanded={this.props.expanded}
                onChange={this.props.onChange(this.props.id)}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel-" + this.props.id + "-content"}
                    id={"panel-" + this.props.id + "-header"}
                >
                    <Typography>{this.props.title}</Typography>
                    <Typography>{this.props.secondaryTitle}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}