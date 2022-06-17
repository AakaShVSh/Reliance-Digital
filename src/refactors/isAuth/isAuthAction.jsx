export const ISAUTH ="ISAUTH";


const isAuthAction = (con) => {
  return {
    type:ISAUTH,
    payload:con
  }
}

export default isAuthAction
