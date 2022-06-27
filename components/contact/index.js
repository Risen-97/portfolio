const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-64">
      <h2 className="title">Get In Touch</h2>
      <div className="flex flex-col items-center gap-5">
        <p className="text-center">
          Interested in working together? We should queue up a chat. I’ll buy
          the coffee.
        </p>

        {/* <button className="btn">Send a message</button> */}
        <a href="mailto:m.fareeed1997@gmail.com" className="btn">
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
