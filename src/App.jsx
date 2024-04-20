import { useEffect } from "react"

function App() {

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 150;
        const y = (window.innerHeight - e.pageY * speed) / 150;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
    return () => document.removeEventListener("mousemove", parallax);
  }, [])



  return (
    <>
      <main
        class="container"
      >
        <div class="navbar">
          <div class="logo"><img src="../img/logo.png" alt="" /></div>
          <div class="menu-btn">Menu</div>
        </div>
        <div class="header">
          Our team has crafted impactful, full-service work that finds <br />
          your audience where they already are.
        </div>
        <div class="marquee">
          <span>
            Creative. Technology. Media. Creative. Technology. Media. Creative.
            Technology. Media. Creative. Technology. Media. Creative. Technology.
            Media.
          </span>
        </div>

        <section>
          <img src="../img/sticker-1.svg" data-speed="-10" class="layer img-1" />
          <img src="../img/sticker-2.svg" data-speed="8" class="layer img-2" />
        </section>
      </main>
    </>
  )
}

export default App
