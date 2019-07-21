import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import style from './style';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

class SideBarItem extends Component {
    // function to select a note
    selectNote = (note, i) => this.props.selectNote(note, i);

    // function to delete note
    deleteNote = (note) => {
        // confirm user wants to delete the note
        if (window.confirm(`Are sure you want to delete ${note.title}`)) {
            // remove note from UI and Database
            this.props.deleteNote(note);
        }
    }

    render() {
        const { _index, _note, classes, selectedNoteIndex } = this.props;
        return (
            <div key={_index}>
                <ListItem
                    className={classes.listItem}
                    selected={selectedNoteIndex === _index}
                    alignItems='flex-start'
                >
                    <div
                        className={classes.textSection}
                        onClick={() => this.selectNote(_note, _index)}
                    >
                        <ListItemText
                            primary={_note.title}
                            secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}
                        >
                        </ListItemText>
                    </div>

                    <DeleteIcon
                        onClick={() => this.deleteNote(_note)}
                        className={classes.deleteIcon}
                    />
                </ListItem>
            </div>
        )
    }
}

export default withStyles(style)(SideBarItem);
