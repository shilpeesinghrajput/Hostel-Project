// ContactForm.jsx
const ContactForm = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-200 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
