"use client";

import Link from "next/link";
import ForgeFooter from "../components/ForgeFooter";
import ForgeHeader from "../components/ForgeHeader";
import {
  forgeAreasContent,
  forgeFooterContent,
  forgeHeroContent,
  forgeNavLinks
} from "../forge-content";

const frictionBullets = [
  "Los ciclos se alargan y nadie tiene claro por qué.",
  "Las decisiones se vuelven políticas o reactivas, no informadas.",
  "Hay más reuniones, más iniciativas, más herramientas... y menos claridad.",
  "Marketing y ventas están alineados en teoría, pero se desordenan bajo presión.",
  "El forecast cambia, no por el mercado, sino por ansiedad interna."
];

const fitSignals = [
  "El crecimiento existe, pero no es consistente ni predecible.",
  "Hay esfuerzo real, pero la señal para decidir es débil.",
  "Marketing, ventas y operaciones están alineados... hasta que hay presión.",
  "Sabes que la siguiente etapa no se logra haciendo más, sino pensando y operando mejor."
];

const notForYouSignals = [
  "Buscas atajos, hacks o fórmulas rápidas para mover números.",
  "Esperas que alguien arregle marketing sin tocar decisiones, procesos u operación.",
  "Quieres resultados inmediatos sin involucrar a tu equipo ni cambiar cómo se decide.",
  "Necesitas sentir movimiento, aunque no haya dirección."
];

const methodSteps = [
  {
    id: "01",
    title: "Claridad",
    summary: "Mapa del sistema, fricciones y prioridades.",
    copy:
      "Entender cómo se decide, dónde se pierde señal y qué está frenando el ciclo."
  },
  {
    id: "02",
    title: "Diseño",
    summary: "Arquitectura operativa.",
    copy:
      "Procesos, ownership, métricas y gobernanza alineados a la estrategia real."
  },
  {
    id: "03",
    title: "Activación",
    summary: "Ejecución integrada.",
    copy:
      "Playbooks, rituales, enablement y coordinación entre equipos."
  },
  {
    id: "04",
    title: "Evolución",
    summary: "Mejora continua con control.",
    copy:
      "Loops de aprendizaje, ajustes estructurales y experimentación sin caos."
  }
];

const outcomes = [
  ["Menos fricción interna.", "Más dirección compartida."],
  ["Menos improvisación.", "Más decisiones trazables."],
  ["Menos dependencia de héroes.", "Más consistencia del equipo."],
  ["Menos ansiedad del corto plazo.", "Más control del proceso."]
];

const diagnosticIncludes = [
  "Dónde se pierde señal para decidir",
  "Qué está frenando el ciclo, no el síntoma sino la causa",
  "Qué parte del sistema no existe o está desalineada",
  "Qué tendría que ser cierto para que el crecimiento vuelva a ser repetible"
];

const diagnosticExcludes = [
  "No es una demo",
  "No es un pitch",
  "No es una propuesta disfrazada"
];

function SectionLabel({ children }) {
  return (
    <span className="d-badge d-badge-outline tw:h-auto tw:rounded-full tw:border-[var(--color--1)] tw:bg-white/70 tw:px-4 tw:py-3 tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.08em] tw:text-[var(--color--9)]">
      {children}
    </span>
  );
}

export default function ForgeAlternateHomePage() {
  return (
    <main className="site-shell tw:relative tw:overflow-x-clip tw:bg-[var(--bg)]">
      <div
        aria-hidden="true"
        className="tw:pointer-events-none tw:absolute tw:inset-0 tw:bg-[radial-gradient(circle_at_top_left,rgba(234,51,152,0.16),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(185,174,244,0.28),transparent_24%),linear-gradient(180deg,#fcfbff_0%,#f7f4ff_30%,#ffffff_56%,#fff9fd_100%)]"
      />
      <ForgeHeader navLinks={forgeNavLinks} ctaHref="#diagnostico" ctaLabel="Explorar tu sistema" />

      <section className="tw:relative tw:pt-40 tw:pb-16 max-[980px]:tw:pt-52">
        <div className="layout-shell tw:relative">
          <div className="tw:grid tw:gap-8 tw:rounded-[36px] tw:border tw:border-white/70 tw:bg-white/72 tw:p-6 tw:shadow-[0_30px_120px_rgba(83,39,147,0.08)] tw:backdrop-blur-xl max-[980px]:tw:rounded-[28px] max-[980px]:tw:p-5">
            <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-4 tw:rounded-[24px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white/88 tw:px-5 tw:py-4">
              <div className="tw:flex tw:flex-col tw:gap-1">
                <span className="tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.08em] tw:text-[var(--color--9)]">
                  Home alternativo
                </span>
                <p className="tw:m-0 tw:text-[0.95rem] tw:leading-[1.35] tw:text-[rgba(17,17,17,0.58)]">
                  Sistema, método, áreas y diagnóstico en una sola lectura.
                </p>
              </div>
              <nav
                aria-label="Secciones del home alternativo"
                className="tw:flex tw:flex-wrap tw:items-center tw:gap-2"
              >
                {[
                  { href: "#problema", label: "Problema" },
                  { href: "#metodo", label: "Método" },
                  { href: "#areas", label: "Áreas" },
                  { href: "#diagnostico", label: "Diagnóstico" }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="tw:inline-flex tw:min-h-11 tw:items-center tw:rounded-full tw:border tw:border-[rgba(17,17,17,0.08)] tw:bg-white tw:px-4 tw:text-[0.9rem] tw:leading-none tw:text-[rgba(17,17,17,0.74)] tw:transition-colors hover:tw:border-[var(--color--2)] hover:tw:text-[var(--color--2)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="tw:grid tw:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] tw:gap-8 max-[1100px]:tw:grid-cols-1">
              <div className="tw:flex tw:flex-col tw:justify-between tw:gap-10 tw:rounded-[30px] tw:bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(249,244,255,0.94))] tw:p-8 max-[640px]:tw:rounded-[22px] max-[640px]:tw:p-6">
                <div className="tw:space-y-6">
                  <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3">
                    <SectionLabel>{forgeHeroContent.eyebrow}</SectionLabel>
                    <span className="tw:rounded-full tw:bg-[rgba(83,39,147,0.08)] tw:px-4 tw:py-2 tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(83,39,147,0.78)]">
                      Growth Systems Partner
                    </span>
                  </div>
                  <div className="tw:max-w-[18ch] tw:space-y-5">
                    <h1 className="tw:m-0 tw:text-[clamp(3.8rem,7vw,7rem)] tw:leading-[0.86] tw:tracking-[-0.09em] tw:text-black">
                      Diseñamos sistemas de crecimiento para empresas B2B con PMF.
                    </h1>
                    <p className="tw:m-0 tw:max-w-[34ch] tw:text-[clamp(1.15rem,1.8vw,1.5rem)] tw:leading-[1.3] tw:tracking-[-0.03em] tw:text-[var(--ink-soft)]">
                      Estrategia, operación y ejecución integradas para ordenar cómo se decide, cómo se coordina y cómo se crece.
                    </p>
                  </div>
                </div>

                <div className="tw:grid tw:grid-cols-[auto_minmax(0,1fr)] tw:items-center tw:gap-5 max-[780px]:tw:grid-cols-1">
                  <Link
                    href="#diagnostico"
                    className="d-btn tw:min-h-14 tw:rounded-full tw:border-0 tw:bg-[var(--color--2)] tw:px-7 tw:font-[var(--family--1)] tw:text-[1rem] tw:font-normal tw:tracking-[-0.02em] tw:text-white hover:tw:bg-[var(--color--9)]"
                  >
                    Explorar tu sistema
                  </Link>
                  <div className="tw:grid tw:gap-3">
                    <p className="tw:m-0 tw:text-[0.98rem] tw:leading-[1.45] tw:text-[rgba(17,17,17,0.58)]">
                      Sin propuesta. Sin compromiso. Con diagnóstico.
                    </p>
                    <div className="tw:grid tw:grid-cols-2 tw:gap-3 max-[780px]:tw:grid-cols-1">
                      <div className="tw:rounded-[20px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white/92 tw:px-4 tw:py-4">
                        <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[var(--color--9)]">
                          Qué hace Forge
                        </p>
                        <p className="tw:mt-2 tw:m-0 tw:text-[0.96rem] tw:leading-[1.4] tw:text-[rgba(17,17,17,0.72)]">
                          Diseña estructura para que marketing, ventas y operación funcionen como un solo sistema.
                        </p>
                      </div>
                      <div className="tw:rounded-[20px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white/92 tw:px-4 tw:py-4">
                        <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[var(--color--9)]">
                          Para quién
                        </p>
                        <p className="tw:mt-2 tw:m-0 tw:text-[0.96rem] tw:leading-[1.4] tw:text-[rgba(17,17,17,0.72)]">
                          Empresas B2B con PMF que necesitan pasar de esfuerzo disperso a operación consistente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="tw:flex tw:flex-col tw:gap-4">
                <div className="tw:overflow-hidden tw:rounded-[30px] tw:border tw:border-[rgba(83,39,147,0.12)] tw:bg-[#111111] tw:shadow-[0_28px_80px_rgba(17,17,17,0.18)]">
                  <div className="tw:relative tw:min-h-[260px]">
                    <img
                      src="/media/hero-poster-0_0.jpg"
                      alt=""
                      aria-hidden="true"
                      className="tw:absolute tw:inset-0 tw:h-full tw:w-full tw:object-cover tw:[transform:scaleX(-1)] tw:opacity-40"
                    />
                    <div className="tw:absolute tw:inset-0 tw:bg-[linear-gradient(180deg,rgba(17,17,17,0.12),rgba(17,17,17,0.82))]" />
                    <div className="tw:relative tw:flex tw:h-full tw:flex-col tw:justify-between tw:p-6 tw:text-white">
                      <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3">
                        <span className="tw:rounded-full tw:border tw:border-white/15 tw:bg-white/10 tw:px-3 tw:py-2 tw:font-[var(--family--2)] tw:text-[0.72rem] tw:uppercase tw:tracking-[0.08em]">
                          El problema
                        </span>
                        <span className="tw:text-[0.82rem] tw:text-white/62">Sistema antes que táctica</span>
                      </div>
                      <div className="tw:space-y-3">
                        <p className="tw:m-0 tw:max-w-[18ch] tw:text-[clamp(1.7rem,2.8vw,2.5rem)] tw:leading-[0.98] tw:tracking-[-0.05em]">
                          El problema no es hacer más. Es operar sin sistema.
                        </p>
                        <p className="tw:m-0 tw:max-w-[30ch] tw:text-[0.98rem] tw:leading-[1.45] tw:text-white/72">
                          Cuando la señal se pierde, los equipos reaccionan. Cuando el sistema existe, deciden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tw:grid tw:grid-cols-2 tw:gap-3">
                  <div className="tw:rounded-[24px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white tw:p-5">
                    <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(17,17,17,0.46)]">
                      Resultado buscado
                    </p>
                    <p className="tw:mt-3 tw:m-0 tw:text-[1rem] tw:leading-[1.38]">
                      Menos improvisación. Más claridad operativa y decisiones trazables.
                    </p>
                  </div>
                  <div className="tw:rounded-[24px] tw:border tw:border-[rgba(234,51,152,0.14)] tw:bg-[rgba(255,243,250,0.9)] tw:p-5">
                    <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(83,39,147,0.62)]">
                      Entrada
                    </p>
                    <p className="tw:mt-3 tw:m-0 tw:text-[1rem] tw:leading-[1.38]">
                      Un diagnóstico para entender si hoy tienes sistema o solo inercia.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            <div className="tw:rounded-[28px] tw:border tw:border-white/70 tw:bg-white/88">
              <div className="d-card-body tw:gap-5 tw:p-5">
                <div className="tw:flex tw:items-center tw:justify-between tw:gap-4">
                  <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.82rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(17,17,17,0.54)]">
                    Logos de clientes
                  </p>
                  <span className="tw:h-px tw:flex-1 tw:bg-[rgba(17,17,17,0.08)]" />
                </div>
                <div className="tw:grid tw:grid-cols-6 tw:gap-3 max-[980px]:tw:grid-cols-3 max-[640px]:tw:grid-cols-2">
                  {forgeHeroContent.trustItems.slice(0, 6).map((item) => (
                    <div
                      key={item.src}
                      className="tw:flex tw:min-h-[84px] tw:items-center tw:justify-center tw:rounded-[20px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-[rgba(247,247,245,0.92)] tw:px-4"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="tw:max-h-10 tw:w-auto tw:max-w-[130px] tw:object-contain tw:opacity-75 tw:grayscale"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="tw:relative tw:py-10">
        <div className="layout-shell">
          <div className="tw:grid tw:gap-8 tw:rounded-[32px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white tw:p-8 tw:shadow-[0_18px_64px_rgba(17,17,17,0.04)] max-[640px]:tw:rounded-[24px] max-[640px]:tw:p-6">
            <div className="tw:flex tw:flex-col tw:gap-4">
              <SectionLabel>Reality check</SectionLabel>
              <div className="tw:grid tw:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] tw:gap-8 max-[980px]:tw:grid-cols-1">
                <div className="tw:space-y-4">
                  <h2 className="tw:m-0 tw:max-w-[12ch] tw:text-[clamp(2.4rem,4vw,4.2rem)] tw:leading-[0.95] tw:tracking-[-0.07em]">
                    El problema no es hacer más. Es operar sin sistema.
                  </h2>
                  <p className="tw:m-0 tw:max-w-[30ch] tw:text-[1.08rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">
                    El crecimiento rara vez se rompe de golpe. Se desgasta. Empieza a verse así:
                  </p>
                </div>
                <div className="tw:grid tw:grid-cols-2 tw:gap-4 max-[780px]:tw:grid-cols-1">
                  {frictionBullets.map((item, index) => (
                    <div
                      key={item}
                      className="d-card tw:rounded-[22px] tw:border tw:border-[rgba(17,17,17,0.05)] tw:bg-[rgba(247,244,255,0.72)]"
                    >
                      <div className="d-card-body tw:gap-3 tw:p-5">
                        <span className="tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(83,39,147,0.58)]">
                          0{index + 1}
                        </span>
                        <p className="tw:m-0 tw:text-[1rem] tw:leading-[1.36]">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="tw:rounded-[28px] tw:border tw:border-[rgba(234,51,152,0.18)] tw:bg-[linear-gradient(135deg,rgba(234,51,152,0.1),rgba(185,174,244,0.08))] tw:px-6 tw:py-7">
              <p className="tw:m-0 tw:max-w-[44ch] tw:text-[clamp(1.25rem,2vw,1.7rem)] tw:leading-[1.15] tw:tracking-[-0.04em]">
                Te exigen crecer, pero tu operación no te deja pensar. Y sin espacio para pensar, solo queda reaccionar.
              </p>
              <p className="tw:mt-4 tw:m-0 tw:font-[var(--family--2)] tw:text-[0.85rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(17,17,17,0.5)]">
                No es falta de talento. Es falta de estructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tw:relative tw:py-10">
        <div className="layout-shell">
          <div className="tw:grid tw:grid-cols-2 tw:gap-5 max-[980px]:tw:grid-cols-1">
            <article className="d-card tw:rounded-[30px] tw:border tw:border-[rgba(17,17,17,0.05)] tw:bg-white">
              <div className="d-card-body tw:gap-6 tw:p-7">
                <SectionLabel>Para quién</SectionLabel>
                <div className="tw:space-y-3">
                  <h2 className="tw:m-0 tw:text-[clamp(2rem,3vw,3rem)] tw:leading-[0.97] tw:tracking-[-0.06em]">
                    Si eres C-level B2B con PMF...
                  </h2>
                  <p className="tw:m-0 tw:max-w-[40ch] tw:text-[1.04rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">
                    Forge es para líderes que ya validaron su negocio y ahora enfrentan un problema distinto: la complejidad.
                  </p>
                </div>
                <div className="tw:grid tw:gap-3">
                  {[
                    "CEOs que sienten que la empresa avanza, pero no con dirección compartida.",
                    "Gerentes Comerciales / CROs cansados de depender de héroes para cerrar el mes.",
                    "Equipos B2B con ciclos largos, decisiones difusas y demasiada fricción interna."
                  ].map((item) => (
                    <div
                      key={item}
                      className="tw:rounded-[20px] tw:bg-[rgba(17,17,17,0.03)] tw:px-5 tw:py-4"
                    >
                      <p className="tw:m-0 tw:text-[0.98rem] tw:leading-[1.38]">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="tw:grid tw:grid-cols-2 tw:gap-3 max-[640px]:tw:grid-cols-1">
                  {fitSignals.map((item) => (
                    <div key={item} className="tw:flex tw:items-start tw:gap-3 tw:rounded-[18px] tw:border tw:border-[rgba(17,17,17,0.05)] tw:bg-[rgba(255,255,255,0.96)] tw:p-4">
                      <span className="tw:mt-[0.3rem] tw:h-2.5 tw:w-2.5 tw:flex-none tw:rounded-full tw:bg-[var(--color--2)]" />
                      <p className="tw:m-0 tw:text-[0.94rem] tw:leading-[1.4]">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.86rem] tw:uppercase tw:tracking-[0.08em] tw:text-[var(--color--9)]">
                  Si tu siguiente etapa exige estructura, estás en el lugar correcto.
                </p>
              </div>
            </article>

            <article className="d-card tw:rounded-[30px] tw:border-0 tw:bg-[#111111] tw:text-white">
              <div className="d-card-body tw:gap-6 tw:p-7">
                <SectionLabel>No es para ti</SectionLabel>
                <div className="tw:space-y-3">
                  <h2 className="tw:m-0 tw:text-[clamp(2rem,3vw,3rem)] tw:leading-[0.97] tw:tracking-[-0.06em]">
                    No es para ti si...
                  </h2>
                  <p className="tw:m-0 tw:max-w-[40ch] tw:text-[1.04rem] tw:leading-[1.45] tw:text-white/72">
                    Forge no intenta convencer a todos. De hecho, funciona mejor cuando hay claridad desde el inicio.
                  </p>
                </div>
                <div className="tw:grid tw:gap-3">
                  {notForYouSignals.map((item) => (
                    <div key={item} className="tw:flex tw:items-start tw:gap-3 tw:rounded-[18px] tw:border tw:border-white/8 tw:bg-white/5 tw:p-4">
                      <span className="tw:mt-[0.16rem] tw:text-[1.1rem] tw:leading-none tw:text-[var(--color--5)]">×</span>
                      <p className="tw:m-0 tw:text-[0.97rem] tw:leading-[1.4] tw:text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="tw:space-y-2">
                  <p className="tw:m-0 tw:text-[1rem] tw:leading-[1.4] tw:text-white/88">
                    Forge no vende actividad. Diseña estructura. Y eso incomoda.
                  </p>
                  <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.86rem] tw:uppercase tw:tracking-[0.08em] tw:text-white/54">
                    Si buscas atajos, no somos para ti.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="metodo" className="tw:relative tw:py-10">
        <div className="layout-shell">
          <div className="tw:rounded-[32px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-[linear-gradient(180deg,rgba(17,17,17,0.03),rgba(255,255,255,0.92))] tw:p-8 max-[640px]:tw:rounded-[24px] max-[640px]:tw:p-6">
            <div className="tw:grid tw:grid-cols-[minmax(0,0.8fr)_minmax(320px,1.2fr)] tw:gap-8 max-[980px]:tw:grid-cols-1">
              <div className="tw:space-y-4">
                <SectionLabel>Categoría y método</SectionLabel>
                <h2 className="tw:m-0 tw:max-w-[11ch] tw:text-[clamp(2.4rem,4vw,4rem)] tw:leading-[0.95] tw:tracking-[-0.07em]">
                  Forge no es agencia. No es consultora.
                </h2>
                <p className="tw:m-0 tw:max-w-[32ch] tw:text-[1.04rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">
                  No producimos por producir. No dejamos un PDF y desaparecemos. No aceleramos tácticas que ya no escalan.
                </p>
                <p className="tw:m-0 tw:max-w-[26ch] tw:text-[1.22rem] tw:leading-[1.22] tw:tracking-[-0.03em]">
                  Forge es un <span className="tw:text-[var(--color--2)]">Growth Systems Partner</span>: diseñamos y activamos la arquitectura que hace el crecimiento repetible y escalable.
                </p>
                <Link
                  href="#diagnostico"
                  className="d-btn d-btn-ghost tw:mt-2 tw:w-fit tw:rounded-full tw:border tw:border-[var(--color--9)] tw:px-5 tw:text-[var(--color--9)] hover:tw:bg-[var(--color--9)] hover:tw:text-white"
                >
                  Conocer el enfoque
                </Link>
              </div>

              <div className="tw:grid tw:gap-5">
                <div className="tw:grid tw:grid-cols-2 tw:gap-5 max-[780px]:tw:grid-cols-1">
                  <div className="d-card tw:rounded-[24px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white">
                    <div className="d-card-body tw:p-6">
                      <h3 className="tw:m-0 tw:text-[1.6rem] tw:tracking-[-0.04em]">No es</h3>
                      <ul className="tw:mt-4 tw:grid tw:list-none tw:gap-4 tw:p-0">
                        {[
                          "Una agencia que ejecuta sin sistema",
                          "Una consultora que recomienda y se va",
                          "Un playbook estándar para problemas complejos"
                        ].map((item) => (
                          <li key={item} className="tw:flex tw:items-start tw:gap-3">
                            <span className="tw:mt-[0.1rem] tw:text-[1rem] tw:text-[rgba(17,17,17,0.38)]">×</span>
                            <span className="tw:text-[0.98rem] tw:leading-[1.4]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="d-card tw:rounded-[24px] tw:border tw:border-[rgba(234,51,152,0.14)] tw:bg-[rgba(255,243,250,0.92)]">
                    <div className="d-card-body tw:p-6">
                      <h3 className="tw:m-0 tw:text-[1.6rem] tw:tracking-[-0.04em]">Sí es</h3>
                      <ul className="tw:mt-4 tw:grid tw:list-none tw:gap-4 tw:p-0">
                        {[
                          "Diseño de sistemas de crecimiento",
                          "Integración real entre estrategia, operación y ejecución",
                          "Implementación con tus equipos, no sobre ellos"
                        ].map((item) => (
                          <li key={item} className="tw:flex tw:items-start tw:gap-3">
                            <span className="tw:mt-[0.1rem] tw:text-[1rem] tw:text-[var(--color--2)]">✓</span>
                            <span className="tw:text-[0.98rem] tw:leading-[1.4]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="d-card tw:rounded-[28px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-[#111111] tw:text-white">
                  <div className="d-card-body tw:p-6">
                    <div className="tw:flex tw:flex-col tw:gap-2">
                      <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.08em] tw:text-white/54">
                        El método Forge
                      </p>
                      <h3 className="tw:m-0 tw:text-[clamp(1.8rem,2.5vw,2.5rem)] tw:leading-[0.98] tw:tracking-[-0.05em]">
                        Claridad · Diseño · Activación · Evolución
                      </h3>
                      <p className="tw:m-0 tw:max-w-[44ch] tw:text-[0.98rem] tw:leading-[1.45] tw:text-white/72">
                        No es un framework decorativo. Es una secuencia para ordenar, construir y sostener el crecimiento en contextos complejos.
                      </p>
                    </div>

                    <div className="tw:hidden tw:grid-cols-4 tw:gap-4 min-[981px]:tw:grid">
                      {methodSteps.map((step) => (
                        <div key={step.id} className="tw:rounded-[22px] tw:border tw:border-white/8 tw:bg-white/5 tw:p-4">
                          <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.72rem] tw:uppercase tw:tracking-[0.08em] tw:text-white/48">
                            {step.id}
                          </p>
                          <h4 className="tw:mt-3 tw:m-0 tw:text-[1.2rem] tw:tracking-[-0.04em]">{step.title}</h4>
                          <p className="tw:mt-3 tw:m-0 tw:text-[0.92rem] tw:leading-[1.35] tw:text-white/86">{step.summary}</p>
                          <p className="tw:mt-3 tw:m-0 tw:text-[0.88rem] tw:leading-[1.42] tw:text-white/62">{step.copy}</p>
                        </div>
                      ))}
                    </div>

                    <div className="tw:grid tw:gap-3 min-[981px]:tw:hidden">
                      {methodSteps.map((step, index) => (
                        <div
                          key={step.id}
                          tabIndex={0}
                          className={`d-collapse d-collapse-plus tw:rounded-[20px] tw:border tw:border-white/8 tw:bg-white/5 ${index === 0 ? "d-collapse-open" : ""}`}
                        >
                          <div className="d-collapse-title tw:pb-3 tw:text-left tw:text-[1.05rem] tw:font-normal tw:tracking-[-0.03em]">
                            {step.id} {step.title}
                          </div>
                          <div className="d-collapse-content tw:text-left">
                            <p className="tw:m-0 tw:text-[0.95rem] tw:leading-[1.4] tw:text-white/82">{step.summary}</p>
                            <p className="tw:mt-3 tw:m-0 tw:text-[0.9rem] tw:leading-[1.42] tw:text-white/62">{step.copy}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="tw:m-0 tw:text-[1rem] tw:leading-[1.42] tw:text-white/88">
                      No escalamos tácticas. Construimos el sistema que las hace funcionar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="tw:relative tw:py-10">
        <div className="layout-shell">
          <div className="tw:space-y-6">
            <div className="tw:flex tw:flex-col tw:gap-4">
              <SectionLabel>Áreas integradas</SectionLabel>
              <div className="tw:flex tw:flex-col tw:gap-3 min-[981px]:tw:flex-row min-[981px]:tw:items-end min-[981px]:tw:justify-between">
                <h2 className="tw:m-0 tw:max-w-[12ch] tw:text-[clamp(2.4rem,4vw,4rem)] tw:leading-[0.95] tw:tracking-[-0.07em]">
                  Cuatro áreas. Una sola arquitectura.
                </h2>
                <Link
                  href="/servicios"
                  className="d-btn d-btn-outline tw:w-fit tw:rounded-full tw:border-[rgba(17,17,17,0.12)] tw:bg-white tw:px-5 tw:text-[var(--ink)] hover:tw:border-[var(--color--2)] hover:tw:bg-[var(--color--2)] hover:tw:text-white"
                >
                  Ver más
                </Link>
              </div>
            </div>

            <div className="tw:grid tw:grid-cols-4 tw:gap-5 max-[1200px]:tw:grid-cols-2 max-[780px]:tw:grid-cols-1">
              {forgeAreasContent.cards.map((card) => (
                <article
                  key={card.id}
                  className="d-card tw:rounded-[28px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white tw:shadow-[0_18px_54px_rgba(17,17,17,0.04)]"
                >
                  <div className="d-card-body tw:gap-5 tw:p-6">
                    <div className="tw:flex tw:min-h-10 tw:items-center">
                      <img className="tw:max-h-10 tw:w-auto" src={card.logo} alt={card.logoAlt ?? card.id} />
                    </div>
                    <div className="tw:space-y-4">
                      <div className="tw:rounded-[20px] tw:bg-[rgba(17,17,17,0.03)] tw:p-4">
                        <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(17,17,17,0.45)]">
                          Resuelve
                        </p>
                        <p className="tw:mt-2 tw:m-0 tw:text-[0.96rem] tw:leading-[1.42]">{card.resolve}</p>
                      </div>
                      <div className="tw:rounded-[20px] tw:bg-[rgba(255,243,250,0.78)] tw:p-4">
                        <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.76rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(83,39,147,0.6)]">
                          Instala
                        </p>
                        <p className="tw:mt-2 tw:m-0 tw:text-[0.96rem] tw:leading-[1.42]">{card.install}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tw:relative tw:py-10">
        <div className="layout-shell">
          <div className="tw:grid tw:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] tw:gap-8 tw:rounded-[32px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white tw:p-8 max-[980px]:tw:grid-cols-1 max-[640px]:tw:rounded-[24px] max-[640px]:tw:p-6">
            <div className="tw:space-y-4">
              <SectionLabel>Outcomes</SectionLabel>
              <h2 className="tw:m-0 tw:max-w-[12ch] tw:text-[clamp(2.4rem,4vw,4rem)] tw:leading-[0.95] tw:tracking-[-0.07em]">
                Lo que cambia cuando el sistema existe
              </h2>
              <p className="tw:m-0 tw:max-w-[32ch] tw:text-[1.06rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">
                No son promesas. Son efectos visibles cuando la operación deja de improvisar.
              </p>
              <p className="tw:m-0 tw:text-[1rem] tw:leading-[1.4] tw:text-[rgba(17,17,17,0.58)]">
                El crecimiento no se siente más rápido. Se siente más controlado.
              </p>
            </div>
            <div className="tw:grid tw:grid-cols-2 tw:gap-4 max-[780px]:tw:grid-cols-1">
              {outcomes.map(([before, after]) => (
                <div key={before} className="d-card tw:rounded-[24px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(255,255,255,1))]">
                  <div className="d-card-body tw:gap-4 tw:p-5">
                    <div>
                      <span className="tw:font-[var(--family--2)] tw:text-[0.72rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(17,17,17,0.42)]">
                        Antes
                      </span>
                      <p className="tw:mt-2 tw:m-0 tw:text-[1rem] tw:leading-[1.32]">{before}</p>
                    </div>
                    <div className="tw:h-px tw:bg-[rgba(17,17,17,0.08)]" />
                    <div>
                      <span className="tw:font-[var(--family--2)] tw:text-[0.72rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(83,39,147,0.58)]">
                        Después
                      </span>
                      <p className="tw:mt-2 tw:m-0 tw:text-[1rem] tw:leading-[1.32] tw:text-[var(--color--9)]">{after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="diagnostico" className="tw:relative tw:py-10">
        <div className="layout-shell">
          <div className="tw:rounded-[34px] tw:border tw:border-[rgba(234,51,152,0.18)] tw:bg-[linear-gradient(135deg,rgba(255,246,251,0.98),rgba(247,244,255,0.96))] tw:p-8 tw:shadow-[0_30px_100px_rgba(83,39,147,0.08)] max-[640px]:tw:rounded-[24px] max-[640px]:tw:p-6">
            <div className="tw:grid tw:grid-cols-[minmax(0,0.85fr)_minmax(320px,1.15fr)] tw:gap-8 max-[980px]:tw:grid-cols-1">
              <div className="tw:space-y-4">
                <SectionLabel>Cómo empezar</SectionLabel>
                <h2 className="tw:m-0 tw:text-[clamp(2.5rem,4vw,4rem)] tw:leading-[0.95] tw:tracking-[-0.07em]">
                  Diagnóstico de sistema
                </h2>
                <p className="tw:m-0 tw:max-w-[32ch] tw:text-[1.1rem] tw:leading-[1.42] tw:text-[var(--ink-soft)]">
                  Una conversación estructurada para entender si tu crecimiento tiene sistema... o solo inercia.
                </p>
                <div className="d-card tw:rounded-[24px] tw:border tw:border-white/70 tw:bg-white/88">
                  <div className="d-card-body tw:gap-2 tw:p-5">
                    <span className="tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(83,39,147,0.58)]">
                      Qué hacemos
                    </span>
                    <p className="tw:m-0 tw:text-[1rem] tw:leading-[1.42]">
                      En 45 a 60 minutos, analizamos cómo opera hoy tu crecimiento, no lo que debería pasar en teoría.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tw:grid tw:gap-5">
                <div className="tw:grid tw:grid-cols-2 tw:gap-5 max-[780px]:tw:grid-cols-1">
                  <div className="d-card tw:rounded-[24px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white">
                    <div className="d-card-body tw:p-5">
                      <h3 className="tw:m-0 tw:text-[1.45rem] tw:tracking-[-0.04em]">Qué cubre</h3>
                      <ul className="tw:mt-4 tw:grid tw:list-none tw:gap-4 tw:p-0">
                        {diagnosticIncludes.map((item) => (
                          <li key={item} className="tw:flex tw:items-start tw:gap-3">
                            <span className="tw:mt-[0.18rem] tw:h-2.5 tw:w-2.5 tw:flex-none tw:rounded-full tw:bg-[var(--color--2)]" />
                            <span className="tw:text-[0.96rem] tw:leading-[1.42]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="d-card tw:rounded-[24px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-[#111111] tw:text-white">
                    <div className="d-card-body tw:p-5">
                      <h3 className="tw:m-0 tw:text-[1.45rem] tw:tracking-[-0.04em]">Qué NO es</h3>
                      <ul className="tw:mt-4 tw:grid tw:list-none tw:gap-4 tw:p-0">
                        {diagnosticExcludes.map((item) => (
                          <li key={item} className="tw:flex tw:items-start tw:gap-3">
                            <span className="tw:mt-[0.08rem] tw:text-[1rem] tw:text-[var(--color--5)]">×</span>
                            <span className="tw:text-[0.96rem] tw:leading-[1.42] tw:text-white/82">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="d-card tw:rounded-[28px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white">
                  <div className="d-card-body tw:gap-5 tw:p-6">
                    <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:gap-5 max-[780px]:tw:grid-cols-1">
                      <div>
                        <p className="tw:m-0 tw:font-[var(--family--2)] tw:text-[0.78rem] tw:uppercase tw:tracking-[0.08em] tw:text-[rgba(17,17,17,0.48)]">
                          Qué te llevas
                        </p>
                        <p className="tw:mt-2 tw:m-0 tw:max-w-[34ch] tw:text-[1.06rem] tw:leading-[1.4]">
                          Claridad para decidir el siguiente paso. Con Forge o sin Forge.
                        </p>
                        <p className="tw:mt-3 tw:m-0 tw:text-[0.92rem] tw:leading-[1.4] tw:text-[rgba(17,17,17,0.56)]">
                          Si tu empresa no calza, te lo decimos rápido.
                        </p>
                      </div>
                      <div className="tw:flex tw:items-end">
                        <Link
                          href="/contacto"
                          className="d-btn tw:min-h-14 tw:rounded-full tw:border-0 tw:bg-[var(--color--9)] tw:px-7 tw:font-[var(--family--1)] tw:text-white hover:tw:bg-[var(--color--2)]"
                        >
                          Agendar diagnóstico
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tw:relative tw:pt-10 tw:pb-20">
        <div className="layout-shell">
          <div className="tw:flex tw:flex-col tw:items-start tw:gap-6 tw:rounded-[32px] tw:border tw:border-[rgba(17,17,17,0.06)] tw:bg-white tw:px-8 tw:py-10 max-[640px]:tw:rounded-[24px] max-[640px]:tw:px-6">
            <SectionLabel>Un filtro sano</SectionLabel>
            <div className="tw:max-w-[58rem] tw:space-y-4">
              <h2 className="tw:m-0 tw:max-w-[18ch] tw:text-[clamp(2.1rem,3.5vw,3.4rem)] tw:leading-[0.96] tw:tracking-[-0.06em]">
                Si buscas tapar fricciones con más actividad, Forge no es el lugar.
              </h2>
              <p className="tw:m-0 tw:max-w-[34ch] tw:text-[1.06rem] tw:leading-[1.45] tw:text-[var(--ink-soft)]">
                Si quieres construir la estructura que sostiene la siguiente etapa, conversemos.
              </p>
            </div>
            <div className="tw:flex tw:flex-wrap tw:gap-3">
              <Link
                href="#diagnostico"
                className="d-btn tw:min-h-14 tw:rounded-full tw:border-0 tw:bg-[var(--color--2)] tw:px-7 tw:font-[var(--family--1)] tw:text-white hover:tw:bg-[var(--color--9)]"
              >
                Explorar tu sistema
              </Link>
              <Link
                href="/nosotros"
                className="d-btn d-btn-outline tw:min-h-14 tw:rounded-full tw:border-[rgba(17,17,17,0.12)] tw:bg-white tw:px-7 tw:text-[var(--ink)] hover:tw:border-[var(--color--9)] hover:tw:bg-[var(--color--9)] hover:tw:text-white"
              >
                Conocer Forge
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ForgeFooter content={forgeFooterContent} />
    </main>
  );
}
