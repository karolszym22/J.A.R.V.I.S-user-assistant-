export const updateBehavior = (behavior) => {
    return {
        type: "BEHAVIOR_UPDATE",
        payload:  {
            behavior,
        }
        
    }
}