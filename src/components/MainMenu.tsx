import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { AppButton } from 'components/basics/AppButton';

export interface Props {
    onCreateRoom: Function;
    onEnterRoom: Function;
}

export class MainMenu extends React.Component<Props> {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <AppButton
                    name="Create New Room"
                    onClick={this.props.onCreateRoom}
                />
                <AppButton
                    name="Enter Existing Room"
                    onClick={this.props.onEnterRoom}
                />
            </Grid>
        );
    }
}