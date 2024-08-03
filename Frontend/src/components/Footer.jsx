import React from 'react'

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer fixed bottom-0 footer-center bg-base-100 shadow-lg border-t-2 border-t-slate-800 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by TaskTrove.com</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer