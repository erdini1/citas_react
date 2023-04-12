const Error = ({children}) => {
  return (
    <div className='bg-red-600 text-center text-1xl mb-4 p-2 font-bold text-white uppercase rounded'>
        <p>{children}</p>
    </div> 
  )
}

export default Error