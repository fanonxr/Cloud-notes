import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import style from './style';
import List from '@material-ui/core/list';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../SidebarItem/SidebarItem';

class Sidebar extends Component {
    state = {
        addingNote: false,
        title: null
    };


    // function to add the new note within the state on a button click
    newNoteBtnClick = () => {
        this.setState({ addingNote: !this.state.addingNote, title: null });
        console.log("New btn Clicked")
    }

    // function creating a new note
    newNote = () => {
        this.props.newNote(this.state.title);

        this.setState({ title: null, addingNote: false });
    }

    // function to update the title
    updateTitle = (txt) => {
        console.log(txt);
        this.setState({title: txt})
    }

    // function to select note that will be editable
    selectNote = (n, i) => {
        console.log("Selecting Note");
        this.props.selectNote(n, i);
    }

    // function to delete the note
    deleteNote = (note) => {
        console.log("Deleting Note");
        this.props.deleteNote(note);
    }


    render() {

        const { notes, classes, selectedNoteIndex } = this.props;
        const { addingNote } = this.state;

        if (notes) {
            return (
                <div className={classes.sidebarContainer}>
                    <Button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}
                    >
                        {addingNote ? 'Cancel' : 'New Note'}
                    </Button>

                    {
                        addingNote ?
                            <div>
                                <input
                                    type='text'
                                    className={classes.newNoteInput}
                                    placeholder='Enter Note title'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}>

                                </input>

                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}
                                >
                                    Submit Button
                                </Button>
                            </div>
                            : null
                    }
                    <List>
                        {
                            notes.map((_note, _index) => {
                                return (
                                    <div key={_index}>
                                        <SidebarItem
                                            _note={_note}
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}
                                        >
                                        </SidebarItem>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            )
        } else {
            return (<div>Add a note!</div>)
        }
    }
}

export default withStyles(style)(Sidebar);
