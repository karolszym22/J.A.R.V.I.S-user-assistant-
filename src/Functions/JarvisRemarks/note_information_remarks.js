import addInformationsReactions from "../../Reactions/Note/add_informations_reaction"

const addNoteInformation = () => window.responsiveVoice.speak(addInformationsReactions[Math.floor(Math.random()*addInformationsReactions.length)],"Polish Male")

export default addNoteInformation