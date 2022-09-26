import { Route, Routes } from "react-router-dom";
// Nested-Route
import AboutApp from "./about-app";
import AboutAuthor from "./about-author";

export default function About() {
  return (
    <main className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt odio nostrum magni dolorem laboriosam nihil magnam eos soluta perferendis saepe, ad, alias vitae voluptate amet ipsa consequatur ipsam illum. Explicabo ab cumque
        molestiae ratione hic iusto autem beatae quo? Soluta tempora maxime voluptate explicabo cupiditate sed aperiam inventore officia dolorum ipsum non dolorem numquam, optio, id, ea natus ipsam at voluptatem impedit. Illo saepe
        praesentium ab magnam nostrum, aut libero aliquid tenetur, nisi quasi temporibus reiciendis corporis at illum nulla ullam. Architecto et eius esse, nam placeat at minima consectetur adipisci expedita quam ullam. Modi possimus
        impedit nam consequatur explicabo.
      </p>
      {/* Nested Routes */}
      <Routes>
        <Route path="about-app" element={<AboutApp />} />
        <Route path="about-author" element={<AboutAuthor />} />
      </Routes>
    </main>
  );
}