import WebLogo from './logo.jpg';
const Navbar=()=>{
     return(
        <div className="h-22 bg-blue-950 flex p-5 md:h-22 lg:h-20">
            <img src={WebLogo} className="h-7 mr-3 mt-1 rounded-3xl md:h-10 md:mt-2 lg:h-12 lg:mt-0"></img>
            <h2 className="text-white text-sm mt-1 md:font-xl md:mt-3 lg:font-3xl lg:mt-3">Student Management System</h2>
            <div className='text-white ml-auto mt-2'>
                <a href='#' className='m-1 p-2 border border-gray-400 rounded-xl md:m-2 md:p-2 lg:m-3 lg:p-3 hover:border-gray-500'>Dashboard</a>
                <a hrref='#' className='m-1 p-2 border border-gray-400 rounded-xl md:m-2 md:p-2 lg:m-3 lg:p-3 hover:border-gray-500'>Students</a>
            </div>
        </div>
    );
};
export default Navbar;