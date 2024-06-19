import FooterNav from './components/FooterNav'
import HeaderNav from './components/HeaderNav'

function App() {
  const services = [
    {
      title: "Affordability",
      body: "At Mobile Doctor, we offer comprehensive medical consultations with experienced and compassionate healthcare professionals. Whether you need a routine check-up etc. without having to break the bank or worry"
    },
    {
      title: "Access to top doctors and consultants",
      body: "Access to top doctors and consultants from diverse field of medical practice from the comfort of your home/office 24/7. Without having to worry. We give qualified and trained specialist to our customer"
    },
    {
      title: "Access to Laboratories",
      body: "We offer convenient access to our state-of-the-art laboratories to meet your diagnostic needs. Our laboratories are equipped with advanced technology and skilled professionals who are committed to providing accurate and timely test results."
    },
    {
      title: "Access to Pharmacist",
      body: "We offer convenient access to our pharmacy, where you can fill prescriptions, purchase medications, and access a wide range of healthcare products. Our pharmacy is staffed by knowledgeable pharmacists."
    },
    {
      title: "Access to Therapist",
      body: "Our app provides seamless access to a variety of expert therapists, including specialized physiotherapists. Whether you are recovering from an injury, or seeking to improve your overall well-being."
    },
    {
      title: "Specialty Care",
      body: "Our team includes specialists in various fields of medicine, allowing us to offer specialized care for complex health issues. Whether you require the expertise of a cardiologist, family planning, medical outreach etc"
    },
  ]
  return (
    <main>
      <HeaderNav />
      <section className='lg:flex sm:p-4'>
        <div className='lg:w-1/2'>
          <img src="./images/hero-1.png" alt="" />
        </div>
        <div className='lg:p-8 sm:py-4 lg:w-1/2 my-auto'>
          <div className='lg:w-[80%]'>
            <p className='text-blue font-medium'> Lets prioritize your health together! ❤️</p>
            <p className='text-blue font-bold my-4 text-5xl'>
              Your well-being is
              our priority
            </p>
            <p className='my-6 text-gray'>Welcome to Mobile Doctor Your trusted partner in healthcare. Comprehensive healthcare services at your fingertips</p>
            <div className='flex'>
              <img className='w-40 h-auto' src="./images/app-store.png" alt="" />
              <img className='w-40 ml-4' src="./images/play-store.png" alt="" />
            </div>
            <div className='flex my-4'>
              <img className='w-20' src="/images/users.png" alt="" />
              <p className='my-auto ml-6'>430+ Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='lg:p-20 sm:p-4'>
        <div className='lg:w-1/2'>
          <p className='text-3xl font-medium text-gray'>Introducing the Mobile Doctor.</p>
          <p className='text-sm'>First Star Consult, through our medical subsidiary Mobile Doctor, provides top-notch health management solutions.</p>
        </div>
        <div className='lg:flex mt-10'>
          <div className='lg:w-1/2'>
            <img src="./images/hero-2.png" alt="" />
          </div>
          <div className='lg:w-1/2 my-auto lg:px-16'>
            <p className='text-gray font-bold my-4'>About Us</p>
            <p className='text-4xl font-bold text-gray'>Health Care Management Company</p>
            <p className='my-4'>FIRST STAR CONSULTS is a health care management company established in 2022 and duly registered with the cooperate affairs commission of Nigeria with BN registration number - 3737970. we are a health care management company with our laboratory and pharmaceutical affiliates to meet all your health care needs with passion , dedication and diligence.</p>
            <button className='bg-blue p-2 px-6 text-sm rounded-full'>Read More</button>
          </div>
        </div>
      </section>
      <section className='bg-[#3AD1F04D] justify-between lg:flex lg:px-20 sm:px-4 py-10'>
        <div className='lg:w-1/2 my-auto'>
          <p className='font-bold my-4 text-gray'>Choose US</p>
          <p className='text-gray text-4xl font-bold'>Why choose us</p>
          <div className='flex my-4'>
            <img className='w-10 mr-4 h-10' src="./images/tick-02.png" alt="" />
            <p className='text-sm'>Our healthcare team makes it easy for you to manage your health
              from the comfort of your own home. We offer a convenient home
              sample collection service, ensuring that your lab tests are conducted
              efficiently without the need for a visit to the clinic.</p>
          </div>
          <div className='flex my-4'>
            <img className='w-10 mr-4 h-10' src="./images/tick-02.png" alt="" />
            <p className='text-sm'>Managing prescriptions has never been easier. After your diagnosis
              we offer a direct drug delivery service to your home. Our seamless
              process ensures that you receive your prescribed medications
              promptly, eliminating the need for trips to the pharmacy.</p>
          </div>
        </div>
        <div className='lg:w-[45%] sm:mt-8'>
          <img src="./images/hero-3.png" alt="" />
        </div>
      </section>

      <section id='services' className='lg:p-20 sm:p-4'>
        <div className='text-center'>
          <p className='text-3xl font-bold text-gray'>Our Services</p>
          <p>Benefits / advantage of Mobile Doctor App and reasons to use </p>
        </div>
        <div className='flex justify-between flex-wrap'>
          {services.map((single, index) => <div key={index} className='lg:w-[49%] mt-6 bg-[#E6F2FE] border border-[#E5F5BD] p-6 rounded-md'>
            <div className='flex'>
              <img className='w-14 mr-4' src={`./images/icons/icon-${index + 1}.png`} alt="" />
              <p className='text-lg font-bold text-gray my-auto'>{single.title}</p>
            </div>
            <p className='text-sm mt-3'>{single.body}</p>
          </div>)}

        </div>
      </section>

      <section id='mission' className='bg-[#E6F2FE] relative lg:p-14 p-8 lg:mx-20 rounded-xl'>
        <img src="./images/pattern-1.png" className='absolute w-28 top-0 left-0' alt="" />
        <img src="./images/pattern-2.png" className='absolute bottom-0 w-24 right-0' alt="" />

        <div className='lg:flex justify-between'>
          <div className='lg:w-[70%] w-[80%] sm:text-center sm:mx-auto'>
            <p className='text-2xl font-medium text-gray'>Our Mission</p>
            <p className='text-sm'>At Mobile Doctor, our mission is empowering individuals to achieve optimal health through innovative
              healthcare solutions</p>
          </div>
          <div className='sm:text-center sm:my-4'>
            <button className='bg-gray rounded-md text-[#fff] px-6 text-sm p-3'>Book Appointment</button>
          </div>
        </div>
      </section>

      <section id='careers' className='lg:p-20 sm:p-4'>
        <div className='text-center lg:w-1/2 mx-auto'>
          <p className='text-3xl font-bold text-gray'>Careers</p>
          <p>At Mobile Doctor, we believe in building and recruiting a diverse team dedicated to
            delivering exceptional healthcare services. </p>
        </div>
        <div className='lg:flex sm:my-6 mt-10'>
          <div className='lg:w-1/2 border-r-8 border-blue'>
            <img src="./images/careers/img-1.png" alt="" />
          </div>
          <div className='lg:w-1/2 my-auto sm:my-4 lg:p-10'>
            <p className='text-lg font-medium border-b w-[190px] text-gray border-gray'>Doctors/Consultants </p>
            <p className='my-6'>Doctors/consultants can register and open an account. Whether you specialize in primary care, internal medicine, or another specialty, we welcome dedicated doctors committed to excellence in patient care, where they consult patients at their spare time and earn money which will be credited to their wallet from where they can withdraw at will.</p>
            <button className='bg-blue rounded-md p-3 px-8'>Apply</button>
          </div>
        </div>
        <div className='lg:flex sm:my-6'>
          <div className='lg:w-1/2 lg:order-1 lg:-ml-2 border-l-8 border-blue'>
            <img src="./images/careers/img-2.png" alt="" />
          </div>
          <div className='lg:w-1/2 lg:order-0 my-auto lg:p-10 sm:my-4 lg:text-right'>
            <p className='text-lg font-medium border-b w-[110px] lg:ml-auto text-gray border-gray'>Laboratories  </p>
            <p className='my-6'>Laboratories can register with us so that they can get direct referrals from
              the App  both for in-shop attendance or home services where applicable.
              We are looking for registered lab, lab practitioners, and licensed practical lab technicians who are dedicated to delivering high-quality patient care in a variety of clinical settings.</p>
            <button className='bg-blue rounded-md p-3 px-8'>Apply</button>
          </div>

        </div>
        <div className='lg:flex sm:my-6'>
          <div className='lg:w-1/2 border-r-8 border-blue'>
            <img src="./images/careers/img-3.png" alt="" />
          </div>
          <div className='lg:w-1/2 my-auto sm:my-4 lg:p-10'>
            <p className='text-lg font-medium border-b w-[120px] text-gray border-gray'>Pharmacists </p>
            <p className='my-6'>Pharmacies can register with us for referrals and filling of prescriptions directly from the App both for in-shop attendance and home delivery where applicable. Pharmacists play a vital role in ensuring the safe and effective use of medications for our patients.</p>
            <button className='bg-blue rounded-md p-3 px-8'>Apply</button>
          </div>
        </div>
        <div className='lg:flex sm:my-6'>
          <div className='lg:w-1/2 lg:order-1 lg:-ml-2 border-l-8 border-blue'>
            <img src="./images/careers/img-4.png" alt="" />
          </div>
          <div className='lg:w-1/2 my-auto lg:order-0 sm:my-4 lg:p-10 lg:text-right'>
            <p className='text-lg font-medium border-b w-[90px] lg:ml-auto text-gray border-gray'>Therapist  </p>
            <p className='my-6'>Our therapy team plays a crucial role in supporting the mental and emotional well-being of our patients. We are looking for licensed therapists and counselors with expertise in areas such as psychology, counseling, social work, and behavioral health to join our team and provide individualized care to our patients.</p>
            <button className='bg-blue rounded-md p-3 px-8'>Apply</button>
          </div>

        </div>
      </section>
      <FooterNav />
    </main>
  )
}

export default App
