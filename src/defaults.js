const defaults = (defaultProps = {}) => (o = {}) => ({
  ...defaultProps,
  ...o
})

export default defaults
