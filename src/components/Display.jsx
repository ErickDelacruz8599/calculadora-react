function Display({ value }) {

  return (
    <input
      className="display"
      type="text"
      value={value}
      readOnly
    />
  )
}

export default Display