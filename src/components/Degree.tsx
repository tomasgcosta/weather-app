const Degree = ({ temp }: { temp: number }): JSX.Element => (
    <>
      <span>
        {temp}
        <sup>o</sup>C
      </span>
    </>
  )
  
  export default Degree