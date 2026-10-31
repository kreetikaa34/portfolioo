/* ✏️ EDIT HERE - your Google Drive folder links */
const LINKS = {
  animations: "https://drive.google.com/drive/folders/1Kf2m5zeFitJMM8QHtEDXi6vYlMTiOXHP?usp=sharing",
  designs:    "https://drive.google.com/drive/folders/14eB11BBcEFm5ODOrntxs8vuK4gG8EPXA?usp=sharing",
  audiobooks: "https://drive.google.com/drive/folders/1meF7pIlzbqlpsM7XY9fYBpZOm3JPSVWv?usp=sharing"
};
/* Replace with your own profile links */
const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/kritika-pathak-215119303?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  whatsapp: "https://wa.me/9779845910180"
};
const setLink = (id, url) => { document.getElementById(id).href = url; };
setLink("animBtn", LINKS.animations);
setLink("designBtn", LINKS.designs);
setLink("audioBtn", LINKS.audiobooks);
setLink("inBtn", SOCIAL.linkedin);
setLink("waBtn", SOCIAL.whatsapp);

const header = document.getElementById("header");
const bar = document.getElementById("progress");
const navLinks = [...document.querySelectorAll(".links a")];
const sections = [...document.querySelectorAll("main section[id]")];
addEventListener("scroll", () => {
  header.classList.toggle("s", scrollY > 10);
  bar.style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + "%";
  let cur = "";
  sections.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id; });
  navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
}, { passive: true });

const burger = document.getElementById("burger"), menu = document.getElementById("links");
burger.addEventListener("click", () => { burger.classList.toggle("open"); menu.classList.toggle("open"); });
menu.addEventListener("click", e => { if (e.target.tagName === "A") { burger.classList.remove("open"); menu.classList.remove("open"); } });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".rv").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.08 + "s"; io.observe(el); });

