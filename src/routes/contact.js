import Header from "./../components/header";
import PageTitle from "../components/page_title";

export default function Contact() {
    return (
        <>
            <Header />
            <PageTitle title="Contacts" />
            <section>
                <small>
                      Fileds with <strong>*</strong> are mandatory.
                </small>
                <form>
                    <label htmlFor="nome">Name</label>
                    <input type="text" id="name" placeholder="Name" />
                    <label htmlFor="nome">Surname</label>
                    <input type="text" id="surname" placeholder="Surname" />
                    <label htmlFor="nome">Email *</label>
                    <input type="email" id="nome" placeholder="Email" required />
                    <label htmlFor="evaluation">Do you like the job I've done? *</label>
                    <select id="evaluation">
                        <option value="moltissimo">Absolutely awesome!</option>
                        <option value="molto">Well done..</option>
                        <option value="normale">I didn't expect worst thant that</option>
                        <option value="poco">Meh...</option>
                        <option value="terribile">We will let you know</option>
                    </select>
                    <fieldset>
                        <input type="checkbox" id="privacy" required />
                        <label htmlFor="privacy">
                          I hereby consent to the processing of the personal data that I have provided and declare that you should delede them ASAP or prepare to be assimilated by Borgs.
                        </label>
                    </fieldset>
                    <button type="submit">Submit now</button>
                </form>
              </section>
        </>
    );
}
