import { noteCommands } from '../../Commands/note_commands';

export const includeNote = (voice) =>
{
   if(noteCommands.includes(voice))
   {
      return true
   }else 
         return false
}