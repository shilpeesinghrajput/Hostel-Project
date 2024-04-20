import Heading from "../Heading/Heading";
import Buttons from "../button/Button"

// ContactForm.jsx
const ContactForm = () => {


  const handleButtonClick = () => {

  };
  return (
    <>

<Heading
        header={"Contact us"}
        title={"SEND US A MESSAGE"}
        classname="mb-[1rem] mt-[7rem]"
      />
    <div className="flex items-center justify-center p-12">
     
      <div  className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div  className="mb-5">
            <label
              for="name"
               className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
               className="w-full rounded-md border border-[#f7f5f2] bg-[#f7f5f2] py-5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div  className="mb-5">
            <label
              for="email"
               className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
               className="w-full rounded-md border border-[#f7f5f2] bg-[#f7f5f2] py-5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
    
          <div  className="mb-5">
            <label
              for="message"
               className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
               className="w-full resize-none rounded-md border border-[#f7f5f2] bg-[#f7f5f2] py-6 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
          <Buttons onClick={handleButtonClick}>SEND MESSAGE</Buttons>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
