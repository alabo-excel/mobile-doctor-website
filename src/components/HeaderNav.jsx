import { Link } from "react-router";

const HeaderNav = () => {
  return (
    <div className='bg-blue flex justify-between lg:px-20 p-3'>
      <img className="h-20" src="./images/logo-1.png" alt="" />
      <div className="my-auto flex w-[35%] text-sm sm:hidden justify-between">
        <p className="my-auto">
          <Link to="/">Home</Link>
        </p>
        <p className="my-auto">
          <Link to="/#about">About</Link>
        </p>
        <p className="my-auto">
          <Link to="/#services">Services</Link>
        </p>
        <p className="my-auto">
          <Link to="/#mission">Mission</Link>
        </p>
        <p className="my-auto">
          <Link to="/#careers">Careers</Link>
        </p>
        <a href="mailto:support@mobiledoctor.health">
          <p className="my-auto">Contact Us</p>
        </a>
      </div>
      <button className="p-2 my-auto px-6 text-sm bg-[#33343C] text-[#fff] rounded-md">Book Appointment</button>
    </div>
  );
};

export default HeaderNav;