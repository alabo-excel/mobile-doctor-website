import HeaderNav from './components/HeaderNav'

function App() {

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
      <section className='lg:p-20 sm:p-4'>
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

      <section className='lg:p-20 sm:p-4'>
        <div className='text-center'>
          <p className='text-3xl font-bold text-gray'>Our Services</p>
          <p>Benefits / advantage of Mobile Doctor App and reasons to use </p>
        </div>
        <div className='flex flex-wrap'></div>
      </section>
    </main>
  )
}

export default App
