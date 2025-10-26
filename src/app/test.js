<div className="flex h-screen w-screen bg-darkBlue overflow-y-auto text-white">
<div className="flex justify-center items-start p-10 h-screen w-screen bg-darkBlue"></div>
<div className="w-1/4 h-full fixed left-[10%] top-0"></div>
    <div className="h-screen flex bg-[#0a192f] text-white overflow-y-auto"></div>
    {/* Main container with 80% width */}
    <div className="w-[80%] h-full flex">
        {/* Left static menu */}
        <div className="w-1/4 h-full fixed left-[10%] flex flex-col justify-center">
            <nav className="text-white space-y-4">
                {/* Add menu items here */}
            </nav>
        </div>

        {/* Right scrollable content */}
        <div className="w-3/4 ml-auto h-full overflow-y-auto pr-4">
            {children}
        </div>
    </div>
</div>