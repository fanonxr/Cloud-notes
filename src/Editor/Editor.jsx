import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

class Editor extends Component {
    render() {
        return (
            <div>
                <h1>Hello from editor</h1>
            </div>
        )
    }
}

export default withStyles(style)(Editor);
