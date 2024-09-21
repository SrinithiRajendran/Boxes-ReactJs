const Box = props => {
  return <p className={`${props.className}`}>{props.boxText}</p>
}

const element = (
  <div className='bg-container'>
    <h1>Boxes</h1>
    <div className='box-container'>
      <Box className='box1' boxText='Small' />
      <Box className='box2' boxText='Medium' />
      <Box className='box3' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
