import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import style from './style';
import List from '@material-ui/core/list';
import { Divider, Button } from '@material-ui/core';
import SideBarItem from '../SidebarItem/SidebarItem';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <p>Side bar component</p>
            </div>
        )
    }
}

export default withStyles(style)(Sidebar);
