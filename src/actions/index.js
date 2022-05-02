export const deleteNote = (id) => {
    return {
        type: "DELETE_NOTE",
        payload:  {
            id,
        }
        
    }
}
export const addNote = (noteContent) =>
{
    const idGenerator = () =>
    `_${Math.random().toString(36).substr(2,9)}`
    return {
        type: "ADD_NOTE",
        payload: {
            note: {
                id: idGenerator(),
                ...noteContent,
            }
        }
    }
}

