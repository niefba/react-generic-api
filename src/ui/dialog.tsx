type Props = {
    modal: boolean,
    isOpen: boolean,
    header: React.ReactNode,
    footer: React.ReactNode,
    onClose: React.MouseEventHandler,
    children: React.ReactNode
}

export function Dialog({modal, isOpen, header, footer, onClose, children}: Props){
        return (
            <>
            { isOpen &&
                <div className={`modal ${ modal ? 'fixed items-center' : 'relative'} w-full h-full top-0 left-0 flex justify-center`}>
                    { modal && <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>}
                    <div className="modal-container absolute bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 px-6">
                            <div>
                                <button
                                    className="float-right cursor-pointer"
                                    onClick={onClose}>
                                    X
                                </button>
                                {header}
                            </div>
                            <div>{children}</div>
                            <div>{footer}</div>
                        </div> 
                    </div>
                </div>
            }
            </>
        )
}
