import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp } from "./shared";

export function Testimonials() {
  const reviews = [
    {
      quote: "Усидчивая, внимательна к деталям. На стажировке держала фокус там, где другие сдавались.",
      author: "Анастасия Владимировна",
      role: "Владелица Urban Mebel · Сочи",
      tag: "Стажировка · производство",
    },
    {
      quote: "Упёртая, ответственная, отзывчивая девушка. С ней спокойно за результат.",
      author: "Алиса",
      role: "Семейное мебельное производство «РЭЛАН» · Лысьва",
      tag: "Совместная работа",
    },
  ];

  return (
    <section id="reviews" className="py-32 px-6 lg:px-8 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Глава 08.5 · Отзывы коллег
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4">
            Что обо мне говорят
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative border border-white/10 bg-background p-8 lg:p-10 flex flex-col gap-6"
            >
              <Quote className="size-8 text-accent/60" />
              <blockquote className="text-xl lg:text-2xl font-light leading-relaxed text-foreground">
                «{r.quote}»
              </blockquote>
              <figcaption className="border-t border-white/10 pt-5 flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-sm">{r.author}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {r.role}
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-2 py-1">
                  {r.tag}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>


      </div>
    </section>
  );
}
