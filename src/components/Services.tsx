import { SectionHeadline } from "./effects/SectionHeadline";
import { AiryAccent } from "./effects/AiryAccent";

const SERVICES = [
  {
    title: "Дизайн и визуал",
    desc: "Макеты, визуализации, прототипы в Figma. Композиция — с диплома дизайнера. Для заказа и как proof вкуса на вакансии.",
    href: "#work",
    example: "Ванная и музейные витрины",
  },
  {
    title: "Презентации",
    desc: "Структура, слайды, «до / после» — презентация для заказчика или кейса. Gamma и Figma.",
    href: "https://alya-nova-2026.vercel.app/",
    example: "Презентация NOVA",
    external: true,
  },
  {
    title: "Сайты и лендинги",
    desc: "От структуры блоков до живой ссылки: собираю через vibe-coding — без отдельной команды разработки.",
    href: "#nova",
    example: "Это портфолио и мини-CRM",
  },
  {
    title: "Интерфейсы продуктов",
    desc: "Экраны, онбординг, канбан — UI + vibe-coding до демо. Проверяю на людях до сдачи.",
    href: "#nova",
    example: "NOVA Dashboard",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 px-6 lg:px-8 relative scroll-mt-24">
      <AiryAccent kind="lime" className="airy-accent--services" />
      <div className="relative z-[1] max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <SectionHeadline before="Дизайн снаружи," accent="сборка внутри" />
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-[42rem]">
            Заказчику — результат без папки с макетами. Команде — глаз дизайнера и быстрая сборка
            до демо.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 border-t border-border">
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target={"external" in s && s.external ? "_blank" : undefined}
              rel={"external" in s && s.external ? "noopener noreferrer" : undefined}
              className="group border-b border-border py-7 flex flex-col gap-2 transition-colors hover:bg-secondary/40 -mx-3 px-3 md:mx-0 md:px-0 md:pr-6"
            >
              <h3 className="text-lg font-display font-bold tracking-tight group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[36rem]">{s.desc}</p>
              <span className="mt-1 text-sm text-foreground/70 group-hover:text-accent transition-colors">
                {s.example} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
