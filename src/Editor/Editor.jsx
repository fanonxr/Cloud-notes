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
        console.log("Updating database")

        this.props.noteUpdate({
            title: this.state.title,
            body: this.state.text
        }, this.state.id)
    }, 1500)

    // updating the title
    updateTitle = async (txt) => {
        await this.setState({
            title: txt
        })
        this.update();
    }

    updateBody = async (val) => {
        // wait to update the state based on the user typing
        await this.setState({ text: val });
        this.update();
    };

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        });
    }

    // update the component
    componentDidUpdate = () => {
        if (this.props.selectedNote.id !== this.state.id) {
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            });
        }
    }

    render() {

        const { classes } = this.props; // classes is from firebase
        const { text, title } = this.state;

        return (
            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon} />
                <input
                    className={classes.titleInput}
                    placeholder='Note Title...'
                    value={title ? title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}
                >
                </input>
                    <ReactQuill
                        value={text}
                        onChange={this.updateBody}>
                    </ReactQuill>
            </div>
        )
    }
}

export default withStyles(style)(Editor);
