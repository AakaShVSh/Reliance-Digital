export const SORT = "SORT"

const sortaction = (value) => {
  return {
    type:SORT,
    payload:value
  }
}

export default sortaction
