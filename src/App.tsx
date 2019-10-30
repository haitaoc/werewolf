import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'Theme';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import { MainMenu } from 'components/MainMenu';
import { RoomCreation } from 'components/RoomCreation';

export enum AppStatus {
    MainMenu = 0,
    RoomCreation = 1
}

interface Props {
    
};

interface States {
    status: AppStatus
}

export class App extends React.Component<Props, States> {
    static defaultStates : States = {
        status: AppStatus.MainMenu
    };

    constructor(props : Props) {
        super(props);

        this.state = App.defaultStates;
    }

    renderMainMenu() {
        return (
            <MainMenu 
                onCreateRoom={() => {
                    this.setState({status: AppStatus.RoomCreation});
                }}
                onEnterRoom={() => {
                    alert("Enter room");
                }}
            />
        );
    }

    renderRoomCreation() {
        return (
            <RoomCreation />
        );
    }

    renderAppError() {
        return (
            <div>
                Error
            </div>
        );
    }

    render() {
        let mainContent : JSX.Element;

        switch (this.state.status) {
            case AppStatus.MainMenu:
                mainContent = this.renderMainMenu();
                break;
            case AppStatus.RoomCreation:
                mainContent = this.renderRoomCreation();
                break;
            default:
                mainContent = this.renderAppError();
                break;
        }

        return (
            <ThemeProvider theme={theme}>
                <div>
                    <AppBar position="static">
                        <Typography variant="h6">
                            WereWolf
                        </Typography>
                    </AppBar>
                    {mainContent}
                </div>
            </ThemeProvider>
        );
    }
}
