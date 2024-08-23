

const ParentModal = ({children, open}) => {
    return (
        <div className={`fixed left-0 top-0 w-screen h-screen bg-black/60 z-[30] items-center justify-center ${open ? "opacity-100  visible flex" : "opacity-0 invisible hidden"}`}> 
            {children}
        </div>
    )
}

export default ParentModal