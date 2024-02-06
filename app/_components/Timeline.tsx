const Timeline = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center text-white py-20 z-20">
            <div className="flex gap-2 items-center px-10 lg:px-40">
                    <p className="text-xl">
                        Stay <span className=" text-[#5DA399] font-bold">Tuned</span>
                    </p>
                    <div className="w-[5%] h-[2px] bg-[#5DA399] rounded-full"></div>
                </div>
            <div className='pt-2 px-10 lg:px-40'>
                <h1 className='xl:text-7xl text-4xl font-black'>
                    The Timeline for Upcoming Initiaves
                </h1>
                <p className='text-2xl pt-5 font-extralight'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. galley of type and scrambled it to make a type. 
                </p>
            </div>
            <Time />
        </div>
    );
}
 
export default Timeline;

const Time = () => {
    return (
        <div className="relative h-fit lg:min-h-screen pt-[10%]">
            <div style={{left: `calc(50vw - 5px)`}} className="absolute h-[80%] w-[5px] rounded-full bg-[#00201A] top-[10%] hidden lg:flex"></div>
            <div className="lg:px-40 px-10 flex">
                <div className="w-1/2 hidden lg:flex"></div>
                <Event />
            </div>
        </div>
    );
}

const Event = () => {
    return (
        <div className="flex gap-5 lg:w-1/2 lg:ml-[-27.5px] z-10">
            <div className="lg:w-[50px] w-[25px] h-[25px] lg:h-[50px] bg-[#5DA399] rounded-full"></div>
            <div className="w-9/12">
                <div className="flex gap-2 items-center">
                    <p className="text-lg text-[#5DA399]">20-01-24</p>
                    <div className="h-[2px] w-[50px] rounded-full bg-[#5DA399]"></div>
                </div>
                <h1 className="text-4xl font-bold pt-2">
                    Event Title
                </h1>
                <p className="text-xl font-light pt-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>
        </div>
    );
}