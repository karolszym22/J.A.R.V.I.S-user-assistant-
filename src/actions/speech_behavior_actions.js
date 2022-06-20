export const updateBehavior = (content) => {
    return {
        type: "BEHAVIOR_UPDATE",
        payload:  {
            behavior: content
        }
        
    }
}