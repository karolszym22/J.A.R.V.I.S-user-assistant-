export const updateBehavior = (behavior) => {
    return {
        type: "DELETE_NOTE",
        payload:  {
            behavior,
        }
        
    }
}