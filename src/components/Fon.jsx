
const Fon = ({fon}) => {
    return (
        <div className={`fixed  w-screen   left-0 top-[100px] bg-black/30 ${fon ? " z-40 opacity-100 h-screen" : "-z-10  opacity-0 "}`}>
        </div>
    )
}

export default Fon