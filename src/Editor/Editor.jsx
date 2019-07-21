import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

class Editor extends Component {
    state = {
        text: '',
        title: '',
        id: ''
    };

    update = debounce(() => {
        // TODO: update the databse
        console.log("Updating database")
    }, 3000)

    updateBody = async (val) => {
        // wait to update the state based on the user typing
        await this.setState({ text: val });
        this.update();
    };

    render() {

        const { classes } = this.props; // classes is from firebase
        const { text, title, id } = this.state;

        return (
            <div className={classes.editorContainer}>
                <ReactQuill
                    value={text}
                    onChange={this.updateBody}>

                </ReactQuill>
            </div>
        )
    }
}

export default withStyles(style)(Editor);
