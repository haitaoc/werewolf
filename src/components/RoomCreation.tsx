import * as React from 'react';
import { AppExpansionPanel } from 'components/basics/AppExpansionPanel'
import { AppButton } from 'components/basics/AppButton';
import { FormControl } from '@material-ui/core';
import { SelectOption, AppSelect } from './basics/AppSelect';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { AppButtonGroup } from 'components/basics/AppButtonGroup';

enum PanelType {
    None = 0,
    GeneralSettings = 1,
    CivilianSettings = 2,
    GodSettings = 3,
    WolfSettings = 4
}

enum EliminationType {
    Side = 0,
    Full = 1
}

export interface Props {
}

export interface States {
    expandedPanel: PanelType;
    numPlayers: number;
    eleminationType: EliminationType;
}

export class RoomCreation extends React.Component<Props, States> {
    static defaultStates : States = {
        expandedPanel: PanelType.None,
        numPlayers: 8,
        eleminationType: EliminationType.Side
    };

    constructor(props : Props) {
        super(props);

        this.state = RoomCreation.defaultStates;
    }

    handlePanelExpansionChange = (panelId : number) =>
        (event: React.ChangeEvent<{}>, expanded: boolean) => {
            const panel : PanelType = panelId as PanelType;
            this.setState({"expandedPanel": (this.state.expandedPanel === panel) ? PanelType.None: panel});
    }

    renderBasicSettings() {
        const numPlayerOptionList : Array<SelectOption> = [
            {name: "8", value: 8},
            {name: "9", value: 9},
            {name: "10", value: 10},
            {name: "11", value: 11},
            {name: "12", value: 12},
            {name: "13", value: 13},
            {name: "14", value: 14},
            {name: "15", value: 15}
        ];

        const handleNumPlayerChange = () => {
            return (event: React.ChangeEvent<{name?: string, value: unknown}>, child : React.ReactNode) => {
                this.setState({numPlayers: event.target.value} as Pick<States, "numPlayers">);
            }
        };

        const handleEliminationTypeChange = (type : EliminationType) => {
            return (event: React.MouseEvent<HTMLButtonElement, React.MouseEvent>) => {
                if (type === this.state.eleminationType) return;
                this.setState({eleminationType: type});
            }
        }

        return (
            <div>
                <AppSelect 
                    id="num_players_select"
                    name="Number Of Players"
                    options={numPlayerOptionList}
                    selected={this.state.numPlayers}
                    onChange={handleNumPlayerChange}
                />
                <AppButtonGroup
                    buttons={[
                        {
                            name: "Side Elimination",
                            disabled: (this.state.eleminationType === EliminationType.Side),
                            onClick: handleEliminationTypeChange(EliminationType.Side)
                        },
                        {
                            name: "Full Elimination",
                            disabled: (this.state.eleminationType === EliminationType.Full),
                            onClick: handleEliminationTypeChange(EliminationType.Full)
                        }
                    ]}
                />
            </div>
        );
    }

    renderCivilSettings() {

    }

    renderGodSettings() {

    }

    renderWolfSettings() {

    }

    render() {
        return (
            <div>
                <AppExpansionPanel
                    id={PanelType.GeneralSettings}
                    title="General Settings"
                    expanded={this.state.expandedPanel === PanelType.GeneralSettings}
                    onChange={this.handlePanelExpansionChange}
                >
                    {this.renderBasicSettings()}
                </AppExpansionPanel>
                <AppExpansionPanel
                    id={PanelType.CivilianSettings}
                    title="Civilian Settings"
                    expanded={this.state.expandedPanel === PanelType.CivilianSettings}
                    onChange={this.handlePanelExpansionChange}
                >
                </AppExpansionPanel>
                <AppExpansionPanel
                    id={PanelType.GodSettings}
                    title="God Settings"
                    expanded={this.state.expandedPanel === PanelType.GodSettings}
                    onChange={this.handlePanelExpansionChange}
                >
                </AppExpansionPanel>
                <AppExpansionPanel
                    id={PanelType.WolfSettings}
                    title="Wolf Settings"
                    expanded={this.state.expandedPanel === PanelType.WolfSettings}
                    onChange={this.handlePanelExpansionChange}
                >
                </AppExpansionPanel>
            </div>
        );
    }
}