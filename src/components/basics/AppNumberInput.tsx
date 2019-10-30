import * as React from 'react';
import Box from '@material-ui/core/Box';
import PlusBoxIcon from '@material-ui/icons/AddBox';
import MinusBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

export interface Props {
    id: string;
    name: string;
    onClick: Function;
}

export class AppButton extends React.Component<Props> {
    render() {
        return (
            <Box>
                <InputLabel></InputLabel>
                <IconButton>
                    <MinusBoxIcon />
                </IconButton>
                <TextField></TextField>
                <IconButton>
                    <PlusBoxIcon />
                </IconButton>
            </Box>
        );
    }
}