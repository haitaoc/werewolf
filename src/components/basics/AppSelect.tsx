import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Box } from '@material-ui/core';

export interface SelectOption {
    name: string;
    value: number;
}

export interface Props {
    id: string;
    name: string;
    options: Array<SelectOption>;
    selected: number;
    onChange: Function;
}

export class AppSelect extends React.Component<Props> {
    render() {
        const options = this.props.options.map((option) => {
            return <option value={option.value}>{option.name}</option>;
        });

        return (
            //<FormControl fullWidth={true}>
            <Box display="block">
                <InputLabel shrink htmlFor={this.props.id}>{this.props.name}</InputLabel>
                <NativeSelect
                    value={this.props.selected}
                    onChange={this.props.onChange()}
                    inputProps={{
                        name: this.props.name,
                        id: this.props.id,
                    }}
                >
                    {options}
                </NativeSelect>
            </Box>
            //</FormControl>
        );
    }
} 