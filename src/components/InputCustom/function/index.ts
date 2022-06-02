export const SearchString = (
  list: Array<{
    name: string
  }>,
  _name: string
) => {
  const name = list.filter((item) => {
    const sizeName = _name.length
    if (sizeName > 0) {
      if (item?.name[0].toUpperCase() === _name[0].toUpperCase()) {
        let verify = false
        for (let i = 0; i < sizeName; i++) {
          if (item?.name[i]) {
            if (item?.name[i].toUpperCase() === _name[i].toUpperCase()) {
              verify = true
            } else {
              verify = false
              break
            }
          }
        }

        if (verify) {
          return item?.name
        }
      }
    }
  })

  return name
}
