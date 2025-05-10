import ContactForm from "@/components/custom/ContactForm";


export default function Contact() {
  return (
   <section className="relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        title="map"
       
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57593.92191726961!2d87.52767071896199!3d25.551027835767798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39faa98e3815bc69%3A0x7415bf2c57ddfb17!2sKatihar%2C%20Bihar!5e0!3m2!1sen!2sin!4v1746895673853!5m2!1sen!2sin"
        
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Photo booth tattooed prism, portland taiyaki hoodie neutra
            typewriter
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 ">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <ContactForm/>
    </div>
  </div>
</section>

  );
}
