import noteRemoveReactions from "../../Reactions/Note/note_remove_reactions"

const noteRemoveRemark = () => window.responsiveVoice.speak(noteRemoveReactions[Math.floor(Math.random()*noteRemoveReactions.length)],"Polish Male")

export default noteRemoveRemark