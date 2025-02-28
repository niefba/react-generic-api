export function Dialog({modal, showDialog, children}: {modal: boolean, showDialog: boolean, children: React.ReactNode}) {
    return (
        <>
        { modal && showDialog &&
            <div>{children}</div>
        }
        </>
    )
}

export function DialogHeader({children}: {children: React.ReactNode}) {
    return (
        <div>{children}</div>
    )
}

export function DialogBody({children}: {children: React.ReactNode}) {
    return (
        <div>{children}</div>
    )
}

export function DialogFooter({children, onClose}: {children: React.ReactNode, onClose: () => void}) {
    return (
        <div>
            {children}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClose}>
                Close
            </button>
        </div>
    )
}
