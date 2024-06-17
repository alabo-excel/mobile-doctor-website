
const HeaderNav = () => {
  return (
    <div className='bg-blue flex justify-between lg:px-20 p-3'>
      <img className="h-20" src="./images/logo-1.png" alt="" />
      <div className="my-auto flex w-[35%] text-sm sm:hidden justify-between">
        <p className="my-auto">Home</p>
        <p className="my-auto">About</p>
        <p className="my-auto">Services</p>
        <p className="my-auto">Mission</p>
        <p className="my-auto">Careers</p>
        <p className="my-auto">Contact Us</p>
      </div>
      <button className="p-2 my-auto px-6 text-sm bg-[#33343C] text-[#fff] rounded-md">Book Appointment</button>
    </div>
  );
};

export default HeaderNav;