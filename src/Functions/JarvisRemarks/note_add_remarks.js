import noteAddReactions from "../../Reactions/Note/note_add_reactions"

const noteAddRemark = () => window.responsiveVoice.speak(noteAddReactions [Math.floor(Math.random()*noteAddReactions .length)],"Polish Male")

export default  noteAddRemark