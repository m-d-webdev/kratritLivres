import React from 'react'
import LOGO from '../components/LOGO'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='p15  mt50 br20 bg-l c-s-s  ' style={{ width: "90%" }}>
            <div className="c-s-s wmia">
                <LOGO />
                <div className="wmia op-5 mt10 border"></div>
            </div>
            <div className="r-b-c p20  wmia">
                <div className="c-s-s">
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 h20 mr10' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" /></svg>
                        À propos de nous
                    </Link>
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 f-no h20 mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path> </svg>
                        Contactez-nous
                    </Link>
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 f-no h20 mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M5 8h4"></path> <path d="M9 16h4"></path> <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path> <path d="M14 9l4 -1"></path> <path d="M16 16l3.923 -.98"></path> </svg>
                        Politique de confidentialité
                    </Link>
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 h20 mr10' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" /></svg>
                        FAQ
                    </Link>
                </div>
                <div className="c-s-s">
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 f-no h20 mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path> </svg>
                        fb-kratritlivres
                    </Link>
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 f-no h20 mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path> <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M16.5 7.5l0 .01"></path> </svg>
                        insta-kratritlivres
                    </Link>
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 f-no h20 mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path> <path d="M10 9l5 3l-5 3z"></path> </svg>
                        yt-kratritlivres
                    </Link>
                    <Link className='r-s-c fw600 p5 mb10 bg-rev-l'>
                        <svg className='w20 f-no h20 mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg>
                        lk-kratritlivres
                    </Link>
                </div>
                <div className="c-s-s">
                    <span className='fw900 mb20 op-7'>
                        Email : contact@kratriktlivres.com
                    </span>
                    <span className='fw900 mb20 op-7'>
                        Téléphone : +212 777856645
                    </span>
                    <span className='fw900 op-7'>
                        Adresse : 123 hay masirra, agadir,morocco
                    </span>
                </div>
            </div>
            <div className="wmia op-5 mt10 border"></div>
            <span className="fs-20 mt10 ml20 fw900 op-7">
                © 2025 KratritLivres . All rights reserved.
            </span>
        </div>
    )
}

export default Footer
