import * as React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export interface Props {
    buttons: Array<ButtonInfo>;
}

export interface ButtonInfo {
    name: string;
    disabled?: boolean;
    onClick: Function;
}

export class AppButtonGroup extends React.Component<Props> {
    render() {
        const buttons = this.props.buttons.map((button) => {
            return (
                <Button
                    disabled={button.disabled}
                    onClick={() => button.onClick()}
                >
                    {button.name}
                </Button>
            )
        });

        return (
            <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="full-width contained primary button group"
            >
                {buttons}
            </ButtonGroup>
        );
    }
}