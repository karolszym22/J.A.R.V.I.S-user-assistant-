import { addNoteCommands, deleteNoteCommands } from '../../Commands/note_commands';

export const isNote = (voice) =>
{
   if( addNoteCommands.includes(voice))
   {
      return 'addNote'

   }else if(deleteNoteCommands.includes(voice)) 
   {
      return 'deleteNote'
   }
}