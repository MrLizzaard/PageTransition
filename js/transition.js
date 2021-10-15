import Highway from "@dogstudio/highway";
import { gsap } from "gsap";

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const tl = gsap.timeline();
    tl.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: "0%" }) //
      .fromTo(
        to,
        { height: "2vh" },
        {
          height: "90vh",
          top: "10%",
          onComplete: function () {
            from.remove();
            done();
          },
        }
      )
      .fromTo(to.children[0], 1.5, { opacity: 0 }, { opacity: 1 });
  }
  out({ from, done }) {
    done();
  }
}

export default Fade;
