import React from 'react'
import Style from '../Styles/Sidebar.module.css'
import Button from './Button'
export default function Sidebar() {
    return (
        <div className={`col-2 ${Style.bgColor}`}>
            <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                    <div className="text-center p-4 text-muted fs-4 fw-bold"><spam style={{fontFamily:"arial"}}>TODO-APP</spam></div>
                    <div className="px-4 pb-5 "><Button class='btn btn-primary w-100' btnname={"Add New Task"}></Button></div>
                </div>

                <nav><ul class="nav row g-2">
                    <li className='nav-item'>
                        <a class="nav-link  text-muted px-4 py-2 w-100 " href="#">All tasks</a>
                    </li>
                    <li className='nav-item'>
                        <a class="nav-link  text-muted px-4 py-2 w-100 " href="#">Important tasks</a>
                    </li>
                    <li className='nav-item'>
                        <a class="nav-link  text-muted px-4 py-2 w-100 " href="#">Compleated tasks</a>
                    </li>
                    <li className='nav-item'>
                        <a class="nav-link  text-muted px-4 py-2 w-100 " href="#">Unompleated tasks</a>
                    </li>
                    <li className='nav-item'>
                        <a class="nav-link  text-muted px-4 py-2 w-100 " href="#">{">"} Directories</a>
                    </li>
                    

                </ul></nav>
            </div>
        </div>
    )
}
