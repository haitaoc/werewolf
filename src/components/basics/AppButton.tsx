import * as React from 'react';
import Button from '@material-ui/core/Button';

export interface Props {
    name: string;
    disabled?: boolean;
    onClick: Function;
}

export class AppButton extends React.Component<Props> {
    render() {
        return (
            <Button variant="contained"
                onClick={() => this.props.onClick()}
                disabled={this.props.disabled}
            >
                {this.props.name}
            </Button>
        );
    }
}