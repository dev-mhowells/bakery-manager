import React from 'react';
import ClearLocalStorage from './logout';
import { Link } from "react-router-dom";

export default function Profile() {

    return (
        <body>
            <div className='flex'>
                <div className="mt-5 ml-20 w-10/12 h-10/12 bg-green rounded-md">
                    <div className="flex justify-center px-4 py-96 bg-base-200 border-8 border-green rounded-md">
{/* company photo */}
                        <div className='card fixed mt-10 h-96 w-96 top-10 left-80 bg-bone bg-logo rounded-full'>   
                            <figure class="px-30 pt-30">
                                <img src="logoBM8.png" alt="logo" class="rounded-full"/>
                            </figure>
                        </div>
{/* company name */}
                <div className='fixed mt-40 top-60 left-70 right-80'>
                    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Bakewells Bakery</h1>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    </div>
                </div>
            </div>
{/* cards that contain 3 elements */}
            <div className="fixed mt-40 top-80 left-80 right-30 card-body bg-darkgreen card shadow-xl w-96">
                <label htmlFor="my-modal" className="btn text-bone bg-beige btn-block">All orders</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn bg-beige">Close</label>
                        </div>
                    </div>
                </div>
                <Link for="/"><label htmlFor="my-modal" className="btn text-bone bg-beige btn-block">Home page</label></Link>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Pull in invoices</h3>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn bg-beige">Close</label>
                        </div>
                    </div>
                        </div >
                        <Link for='/login'><b htmlFor="my-modal" className="btn text-bone btn-block bg-beige" onClick={() => ClearLocalStorage()}>Logout</b></Link>
{/* text box bio */}
                <div className="fixed mt-40 top-80 right-80 w-96 h-40 border-solid border-5 border-green mb-10 form-control">        
                    <textarea className="textarea textarea-bordered textarea-xl border-darkgreen" placeholder="Bio"></textarea>
                    <br></br>
                    <div className="btn text-bone bg-beige ">
                        <p>Update bio</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>            
    )
}