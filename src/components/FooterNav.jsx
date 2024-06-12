
const FooterNav = () => {
  return (
    <footer className="bg-[#33343C] lg:px-20 py-6 p-6">
      <div className="lg:flex justify-between">
        <div>
          <img src="/images/logo.png" className="w-24 sm:mx-auto h-24" alt="" />
        </div>
        <div className="flex justify-between sm:my-4 lg:w-[35%] my-auto text-sm text-[#fff]">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Careers</p>
          <p>Mission</p>
        </div>
        <div className="flex w-24 sm:mx-auto my-auto justify-between">
          <img className="w-6 h-6" src="/images/icons/facebook.png" alt="" />
          <img className="w-6 h-6" src="/images/icons/linkedin.png" alt="" />
          <img className="w-6 h-6" src="/images/icons/new-twitter.png" alt="" />
        </div>
      </div>
      <div className="lg:flex justify-between">
        <div className="bg-[#3B3D4C] sm:my-4 lg:w-[35%] border flex border-[#2C5446] rounded-md">
          <input placeholder="Enter Email" className="p-4 w-full sm:text-xs text-[#fff] rounded-l-md bg-[#3B3D4C]" type="text" />
          <button className="bg-blue p-4 rounded-md px-6 text-sm">Subscribe</button>
        </div>
        <div className="lg:w-[63%]">
          <div className="bg-[#3B3D4C] border text-[#fff] lg:flex justify-evenly w-full border-[#2C5446] p-2 rounded-md">
            <div className="border sm:my-2 border-[#2C5446] flex p-2 rounded-md">
              <img className="mx-2" src="/images/icons/mail.png" alt="" />
              <p className="lg:text-sm text-xs my-auto">princewill.Orianwo@firststarconsults.online</p>
            </div>
            <div className="border sm:my-2 border-[#2C5446] flex p-2 rounded-md">
              <img className="mx-2" src="/images/icons/call.png" alt="" />
              <p className="lg:text-sm text-xs my-auto">07010140789</p>
            </div>
            <div className="border sm:my-2 border-[#2C5446] flex p-2 rounded-md">
              <img className="mx-2" src="/images/icons/location.png" alt="" />
              <p className="lg:text-sm text-xs my-auto">Porthacourt</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;