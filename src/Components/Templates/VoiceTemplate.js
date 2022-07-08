import React, {useEffect, useContext, useState} from 'react';
import { SpeechContext } from "../../context/SpeechContext";
import { connect } from 'react-redux/es/exports';
import getNoteValues from '../../Functions/CommandInteractions/Interactions/set_note_values';
import {addNoteByVoice as addNoteByVoiceAction } from '../../actions/handle_note_actions'
import addNoteValidation from '../../Functions/CommandInteractions/Interactions/Validations/Note/add_note_validation';
import deleteNoteValidation from '../../Functions/CommandInteractions/Interactions/Validations/Note/delete_note_validation';

const VoiceTemplate = ({behavior,addNoteByVoice}) => {

    const speech = useContext(SpeechContext) 
    const [currentSpeech, setCurrentSpeech] = useState('')
    const [currentState, setCurrentState] = useState('')

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [noteValues, setNoteValues] = useState(false)
    const [noteTitle, setNoteTitle] = useState(false)
    

    useEffect(() =>
    {
        setCurrentSpeech(speech)
        setCurrentState(behavior)

        switch(currentState) {
            case 'addNote':
              { 
                sendNote()
              }
            break;
            case 'deleteNote':
              // code block
              break;
            default:
              // code block
          }
       })



       const sendNote = () =>
       {
         getNoteValues(currentSpeech, setTitle, setDescription)
         addNoteValidation(title,description, setNoteValues)
           if(noteValues === true)
           {
             addNoteByVoice(title,description)
             setTitle('')
             setDescription('')
           }
        
       }
       const deleteNote = () =>
       {
        deleteNoteValidation(title,setNoteTitle)
       }

    return (
        <>
        </>
    )
}

const mapStateToProps = state => {
    const {behavior} = state.behavior;
    return {behavior};
  }

  const mapDispatchToProps = dispatch => ({
    
    addNoteByVoice: (title,description) => dispatch(addNoteByVoiceAction(title,description))
    
})

  export default connect(mapStateToProps,mapDispatchToProps)(VoiceTemplate);