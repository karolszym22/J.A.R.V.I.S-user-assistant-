import React, {useEffect, useContext, useState} from 'react';
import { SpeechContext } from "../../context/SpeechContext";
import { connect } from 'react-redux/es/exports';
import processMessage from '../../Functions/CommandInteractions/Interactions/Helpers/process_message';
import {addNoteByVoice as addNoteByVoiceAction } from '../../actions/handle_note_actions'
import addNoteValidation from '../../Functions/CommandInteractions/Interactions/Validations/Note/add_note_validation';
import deleteNoteValidation from '../../Functions/CommandInteractions/Interactions/Validations/Note/delete_note_validation';
import { contentCommands } from '../../Commands/note_commands';
import { titleCommands } from '../../Commands/note_commands';
const VoiceTemplate = ({behavior, addNoteByVoice}) => {

    const SPEECH_LENGTH = 0;

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
            case 'greetings': sendGreetings()
              break;
            case 'addNote': sendNote()
              break;
            case 'deleteNote': deleteNote()
              break;
            default:
              // code block
          }
       })
       
       const sendGreetings = () =>
       {
        
       }


       const sendNote = () =>
       {
        processMessage(speech, setTitle, titleCommands)
        processMessage(speech, setDescription, contentCommands)

         addNoteValidation(title, description, setNoteValues)
           if(noteValues === true && speech.length === SPEECH_LENGTH ) 
           {
             console.log(title)
             console.log(description)
             addNoteByVoice(title, description)
              setTitle('')
              setDescription('')
              setNoteValues(false)
           }
        
       }

       const deleteNote = () =>
        {
           cutTitle(currentSpeech, setTitle)
           deleteNoteValidation(title, setNoteTitle)
           console.log(title)
             if(noteTitle === true && speech.length === SPEECH_LENGTH)
               {
                 alert("UDAŁO SIE!")
                 deleteNoteByVoice(title)
               }
              
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
    
    addNoteByVoice: (title,description) => dispatch(addNoteByVoiceAction(title, description)),
    deleteNoteByVoice: (title) => dispatch(deleteNoteByVoiceAction(title))
    
})

  export default connect(mapStateToProps, mapDispatchToProps)(VoiceTemplate);