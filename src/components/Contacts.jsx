import Socials from "./Socials";
export default function Contacts() {
  return (
    <section name="Contacts" className="mt-[120px]">
      <h2>Contacts</h2>
      <div className="flex flex-col leading-8">
        <span>Our glamping is located 30 km from Tbilisi</span>
        <span>Adress: Georgia, Inner Kartli, Kaspi Municipality, Kavtiskhevi, </span>
        <a
          className="hover:text-darkGreen"
          href="https://www.google.com/maps?q=41.869560,44.448465"
          target="_blank"
          rel="noopener noreferrer"
        >
          41.869560 44.448465
        </a>

        <div>
          <span>Phone number: </span>
          <a className="hover:text-darkGreen" href="tel:+995323625043">
            +995323625043
          </a>
        </div>
        <div>
          <span>Email:</span>
          <a className="hover:text-darkGreen" href="mailto:mindori@gmail.com">
            mindori@gmail.com
          </a>
        </div>
      </div>
      <Socials />
      <div className="w-full h-[350px] pt-8 pb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2971.0830324289177!2d44.44589007608408!3d41.86955997124269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDUyJzEwLjQiTiA0NMKwMjYnNTQuNSJF!5e0!3m2!1sru!2sua!4v1720904037454!5m2!1sru!2sua"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
}
