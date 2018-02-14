export function addTest(test:string) {
    return {
            type:"ADD",
            payload:test
    }
}

export function deleteTest(test:string) {
    return {
            type:"DELETE",
            payload:test
    }
}