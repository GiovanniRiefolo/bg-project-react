import Header from "./../components/header";
import "../styles.css";

export default function Contact() {
  return (
    <>
      <Header />
      <section>
        <h1>Contatti</h1>
        <small>
          I campi contrassegnati con <strong>*</strong> sono necessari
        </small>
        <form>
          <label for="nome">Nome</label>
          <input type="text" id="nome" placeholder="Nome" />
          <label for="nome">Cognome</label>
          <input type="text" id="nome" placeholder="Cognome" />
          <label for="nome">Email *</label>
          <input type="email" id="nome" placeholder="Email" required />
          <label for="evaluation">Quanto ti piace questo esercizio? *</label>
          <select id="evaluation">
            <option value="moltissimo">Figo!</option>
            <option value="molto">Si, dai..</option>
            <option value="normale">Non esageriamo!</option>
            <option value="poco">Ehm...</option>
            <option value="per_niente">Ti faremo sapere</option>
          </select>
          <fieldset>
            <input type="checkbox" id="privacy" required />
            <label for="privacy">
              Acconsento al trattamento dei miei dati personali a patto che le
              cancelli subito.
            </label>
          </fieldset>
          <button type="submit">Invia</button>
        </form>
      </section>
    </>
  );
}
