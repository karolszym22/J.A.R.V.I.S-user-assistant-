import noteInformationsReactions from "../../Reactions/Note/note_informations_reaction"

const noteInformation = () => window.responsiveVoice.speak(noteInformationsReactions[Math.floor(Math.random()*noteInformationsReactions.length)],"Polish Male")

export default noteInformation 