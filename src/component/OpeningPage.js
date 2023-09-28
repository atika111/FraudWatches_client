import React from 'react'

const OpeningPage = () => {
    return (
        <div className='loading-page'>
            <div className="company-name">FraudWatches</div>
            <div id="animation-wrapper">
                <div id="animation">


                    <svg width="53px" height="36px" viewBox="0 0 53 36" xmlns="http://www.w3.org/2000/svg" id="MarkerPath">
                        <path d="M2,33.1847232 C15.2436805,36.2088006 24.8371343,35.566859 30.7803616,31.2588984 C36.1660615,27.3550627 32.8383675,15.4917963 36.1660615,8.3421513 C37.5769468,5.31082405 42.5604237,3.19677361 51.1164922,2" stroke="#003943" stroke-width="3" fill="none" fill-rule="nonzero" stroke-dasharray="2.5,7,3,7" stroke-linecap="square"></path>
                    </svg>
                    <svg width="53px" height="36px" viewBox="0 0 53 36" xmlns="http://www.w3.org/2000/svg" id="MarkerPathOverlay">
                        <path d="M2,33.1847232 C15.2436805,36.2088006 24.8371343,35.566859 30.7803616,31.2588984 C36.1660615,27.3550627 32.8383675,15.4917963 36.1660615,8.3421513 C37.5769468,5.31082405 42.5604237,3.19677361 51.1164922,2" stroke="white" stroke-width="4" fill="none" fill-rule="nonzero" stroke-linecap="square"></path>
                    </svg>
                    <svg width="55px" height="74px" viewBox="0 0 55 74" xmlns="http://www.w3.org/2000/svg" id="BigMarker">
                        <path d="M47.407,12.986 C42.543,8.122 36.067,5.442 29.174,5.442 C22.29,5.442 15.815,8.122 10.951,12.986 C6.077,17.85 3.397,24.316 3.397,31.19 C3.397,37.666 7.378,46.549 15.232,57.617 C18.261,61.889 21.271,65.627 23.271,68.005 C24.407,69.364 25.339,70.432 25.922,71.092 C26.252,71.471 26.505,71.752 26.67,71.927 C26.767,72.044 26.854,72.141 26.942,72.228 L27.146,72.432 C27.709,72.917 28.437,73.199 29.185,73.199 C29.942,73.199 30.68,72.908 31.243,72.403 L31.418,72.228 C31.505,72.141 31.593,72.044 31.69,71.937 L32.438,71.092 C33.021,70.432 33.962,69.364 35.089,68.005 C37.089,65.626 40.108,61.888 43.138,57.617 C50.98,46.549 54.96,37.666 54.96,31.19 C54.96,24.316 52.281,17.85 47.407,12.986 Z M29.184,43.666 C22.058,43.666 16.262,37.87 16.262,30.753 C16.262,23.627 22.058,17.831 29.184,17.831 C36.301,17.831 42.097,23.627 42.097,30.753 C42.096,37.87 36.3,43.666 29.184,43.666 Z" id="Shape" fill="#D1E6E5"></path>
                        <path d="M34.264,65.058 C36.287,62.643 39.337,58.865 42.377,54.579 C50.406,43.262 54.477,34.085 54.477,27.305 C54.477,20.04 51.643,13.209 46.498,8.074 C41.356,2.936 34.515,0.104 27.234,0.1 C19.959,0.104 13.121,2.936 7.98,8.074 C2.834,13.21 0,20.04 0,27.305 C0,34.085 4.071,43.262 12.1,54.579 C15.134,58.857 18.186,62.639 20.211,65.057 C21.355,66.426 22.3,67.51 22.888,68.174 C23.226,68.557 23.487,68.849 23.669,69.049 C23.78,69.173 23.875,69.278 23.971,69.374 L24.245,69.641 C25.077,70.37 26.141,70.771 27.24,70.771 C28.36,70.771 29.438,70.357 30.336,69.546 L30.515,69.365 C30.61,69.269 30.708,69.162 30.837,69.019 L31.59,68.175 C32.179,67.508 33.123,66.425 34.264,65.058 Z M29.411,66.243 L28.659,67.086 C28.58,67.173 28.511,67.25 28.444,67.318 L28.326,67.44 C27.74,67.967 26.693,67.913 26.231,67.513 L26.028,67.312 C25.969,67.253 25.91,67.186 25.8,67.062 C25.647,66.894 25.397,66.615 25.071,66.246 C24.493,65.593 23.567,64.53 22.446,63.188 C20.454,60.809 17.455,57.093 14.477,52.893 C6.803,42.079 2.913,33.47 2.913,27.305 C2.913,20.818 5.444,14.721 10.038,10.136 C14.631,5.546 20.738,3.018 27.234,3.014 C33.737,3.018 39.847,5.546 44.44,10.136 C44.441,10.136 44.441,10.136 44.441,10.136 C49.035,14.721 51.565,20.818 51.565,27.305 C51.565,33.47 47.675,42.079 40.002,52.893 C37.018,57.1 34.021,60.814 32.031,63.189 C30.91,64.53 29.983,65.593 29.411,66.243 Z M41.61,26.867 C41.61,18.942 35.163,12.494 27.237,12.494 C19.313,12.494 12.866,18.942 12.866,26.867 C12.866,34.792 19.312,41.24 27.237,41.24 C35.163,41.241 41.61,34.793 41.61,26.867 Z M27.238,38.328 C20.92,38.328 15.78,33.186 15.78,26.867 C15.78,20.548 20.92,15.406 27.238,15.406 C33.557,15.406 38.698,20.548 38.698,26.867 C38.698,33.186 33.557,38.328 27.238,38.328 Z" fill="#003943"></path>
                    </svg>
                    <svg width="37px" height="49px" viewBox="0 0 37 49" xmlns="http://www.w3.org/2000/svg" id="SmallMarker">
                        <path d="M20.514,14.365 C15.825,14.365 12.009,18.181 12.009,22.87 C12.009,27.55 15.825,31.365 20.514,31.365 C25.203,31.365 29.019,27.549 29.019,22.87 C29.019,18.18 25.203,14.365 20.514,14.365 Z" fill="#D1E6E5"></path>
                        <path d="M31.601,6.259 C35.083,9.734 37,14.355 37,19.27 C37,23.837 34.289,29.973 28.945,37.509 C26.936,40.339 24.919,42.838 23.581,44.437 C22.825,45.341 22.201,46.059 21.81,46.501 L21.313,47.057 C21.209,47.172 21.142,47.245 21.078,47.309 L20.969,47.42 C20.264,48.059 19.436,48.377 18.575,48.377 C18.528,48.377 18.483,48.366 18.435,48.37 C17.7883333,48.308 16.8656667,47.8086667 15.667,46.872 C15.575,46.769 15.467,46.648 15.333,46.496 C14.947,46.061 14.323,45.343 13.565,44.437 C12.224,42.836 10.205,40.333 8.202,37.51 C2.857,29.975 0.146,23.838 0.146,19.27 C0.146,14.355 2.064,9.734 5.545,6.259 C9.022,2.784 13.647,0.869 18.569,0.866 C23.496,0.869 28.123,2.784 31.601,6.259 Z M26.568,35.824 C31.558,28.791 34.087,23.221 34.088,19.27 C34.088,15.133 32.475,11.245 29.545,8.32 C29.545,8.32 29.545,8.32 29.544,8.32 C26.616,5.395 22.718,3.782 18.57,3.779 C14.428,3.781 10.532,5.394 7.604,8.32 C4.674,11.245 3.06,15.133 3.06,19.27 C3.06,23.222 5.59,28.792 10.58,35.824 C12.526,38.569 14.493,41.006 15.8,42.568 C16.535,43.446 17.141,44.141 17.519,44.569 C17.732,44.812 17.893,44.992 17.993,45.1 L18.26,45.381 C18.339,45.443 18.752,45.502 18.956,45.317 L19.632,44.568 C20.006,44.143 20.612,43.448 21.346,42.569 C22.651,41.01 24.616,38.576 26.568,35.824 Z M18.572,9.023 C24.063,9.023 28.53,13.49 28.53,18.981 C28.53,24.472 24.063,28.94 18.572,28.94 C13.082,28.94 8.615,24.473 8.615,18.981 C8.615,13.491 13.081,9.023 18.572,9.023 Z M18.572,26.027 C22.457,26.027 25.618,22.866 25.617,18.981 C25.617,15.097 22.456,11.936 18.572,11.936 C14.687,11.936 11.527,15.097 11.527,18.981 C11.527,22.866 14.688,26.027 18.572,26.027 Z" fill="#003943"></path>
                    </svg>
                </div>
            </div>
            <div className="slogan">Making your trip safer since 27/09/23 at 9:30 AM</div>
        </div>


    )
}

export default OpeningPage