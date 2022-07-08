import noteRemoveReactions from "../../Reactions/Note/remove_informations_reaction"

const noteRemoveRemark = () => window.responsiveVoice.speak(noteRemoveReactions[Math.floor(Math.random()*noteRemoveReactions.length)],"Polish Male")

export default noteRemoveRemark