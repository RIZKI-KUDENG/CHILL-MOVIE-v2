const Button = (props) =>{
    const {children, background } = props
    return (
         <button className={`"py-3 rounded-full ${background} w-full hover:bg-opacity-80 transition-colors font-normal"`}>
            {children}
          </button>
    )
}