import type { ReactNode } from "react";
import { HeroHeadline } from "@/components/hero-headline";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ArrowUpRight,
  Bot,
  Gift,
  Camera,
  Globe2,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  Play,
  Radio,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

const links = {
  cabinet: "https://proxied.vipin.help",
  bot: "https://t.me/vipin_robot",
  channel: "https://t.me/vipin_channel",
  instagram: "https://www.instagram.com/vipin_robot_official/",
  support: "https://t.me/vipin_support",
} as const;

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function VipinLanding() {
  return (
    <div className="relative z-0 flex min-h-full flex-1 flex-col font-sans">
      <header className="sticky top-0 z-20 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <span className="text-lg font-semibold tracking-tight">
            Vipin<span className="text-primary">.</span>
          </span>
          <ExternalLink
            href={links.cabinet}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <LayoutDashboard className="size-4" aria-hidden />
            Личный кабинет
          </ExternalLink>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-4 py-12 sm:gap-20 sm:px-6 sm:py-16">
        {/* Hero */}
        <section className="flex flex-col gap-6 text-center sm:text-left">
          <p className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-black sm:self-start">
            <Sparkles className="size-3.5 text-black" aria-hidden />
            VPN для свободного интернета
          </p>
          <HeroHeadline />
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white sm:text-xl">
            <strong className="font-medium text-white">Vipin</strong> — это
            VPN‑решение, которое даёт доступ ко всем заблокированным ресурсам в
            России{" "}
            <span className="text-white">без необходимости отключать VPN</span>{" "}
            при заходе на российские сайты: по умолчанию на все домены{" "}
            <code className="rounded bg-white/15 px-1.5 py-0.5 font-mono text-sm text-white">
              .ru
            </code>{" "}
            трафик с устройства идёт напрямую, без VPN.
          </p>
        </section>

        {/* Highlights */}
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Globe2 className="size-5" aria-hidden />
            </div>
            <h2 className="text-lg font-semibold">Умная маршрутизация</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Российские ресурсы открываются напрямую — быстрее и привычнее для
              банков, госуслуг и локальных сервисов.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Shield className="size-5" aria-hidden />
            </div>
            <h2 className="text-lg font-semibold">Доступ без ограничений</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Остальной трафик защищён VPN — смотрите, читайте и работайте так,
              как вам удобно.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card/90 to-card/80 p-8 shadow-sm backdrop-blur-sm sm:p-10">
          <h2 className="text-xl font-semibold sm:text-2xl">Тариф</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <Gift className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span>
                <strong className="font-medium text-foreground">
                  Пробный период — 10 дней.
                </strong>{" "}
                Попробуйте сервис без оплаты.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                ₽
              </span>
              <span>
                Далее, если понравится —{" "}
                <strong className="font-medium text-foreground">
                  150&nbsp;₽ в месяц
                </strong>
                .
              </span>
            </li>
          </ul>
        </section>

        {/* Quick links */}
        <section>
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Связь и вход
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white">
            Личный кабинет, бот, канал и поддержка — всё в одном месте ниже.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li>
              <ExternalLink
                href={links.cabinet}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <LayoutDashboard className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium">Личный кабинет</span>
                    <span className="text-xs text-muted-foreground">
                      proxied.vipin.help
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={links.bot}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <Bot className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium">Бот в Telegram</span>
                    <span className="text-xs text-muted-foreground">
                      @vipin_robot
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={links.channel}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Radio className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium">
                      Канал Telegram
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Чат внутри — @vipin_channel
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={links.instagram}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400">
                    <Camera className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium">Instagram</span>
                    <span className="text-xs text-muted-foreground">
                      vipin_robot_official
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </ExternalLink>
            </li>
            <li className="sm:col-span-2">
              <ExternalLink
                href={links.support}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Headphones className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium">Техподдержка</span>
                    <span className="text-xs text-muted-foreground">
                      @vipin_support в Telegram
                    </span>
                  </span>
                </span>
                <MessageCircle
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden
                />
              </ExternalLink>
            </li>
          </ul>
        </section>

        {/* Videos */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-white sm:text-2xl">
            <Play className="size-6 text-white" aria-hidden />
            Видеоинструкции
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white">
            Подключение через сайт и через бота — выберите удобный способ.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Card className="border border-border/60 bg-card/80 text-card-foreground shadow-sm backdrop-blur-sm">
              <CardHeader className="border-b border-border/50 pb-4">
                <CardTitle className="text-black">
                  Подключение через сайт
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="mx-auto w-full max-w-[min(100%,320px)]">
                  <AspectRatio ratio={9 / 16}>
                    <video
                      className="absolute inset-0 size-full bg-black object-contain"
                      controls
                      playsInline
                      preload="metadata"
                      title="Подключение Vipin через сайт"
                    >
                      <source src="/vpn-site-instruction.mp4" type="video/mp4" />
                      Ваш браузер не поддерживает воспроизведение видео.
                    </video>
                  </AspectRatio>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-border/60 bg-card/80 text-card-foreground shadow-sm backdrop-blur-sm">
              <CardHeader className="border-b border-border/50 pb-4">
                <CardTitle className="text-black">
                  Подключение через бота (мини‑приложение)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="mx-auto w-full max-w-[min(100%,320px)]">
                  <AspectRatio ratio={9 / 16}>
                    <video
                      className="absolute inset-0 size-full bg-black object-contain"
                      controls
                      playsInline
                      preload="metadata"
                      title="Подключение Vipin через бота"
                    >
                      <source
                        src="/vpn-miniapp-instruction.mp4"
                        type="video/mp4"
                      />
                      Ваш браузер не поддерживает воспроизведение видео.
                    </video>
                  </AspectRatio>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Referral */}
        <section className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-card/95 to-card/80 p-8 shadow-sm backdrop-blur-sm sm:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-amber-400/20 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-400">
              <Users className="size-6" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Зарабатывайте с Vipin
              </h2>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                Реферальная программа: за каждого приглашённого пользователя вы
                получаете{" "}
                <strong className="font-medium text-foreground">
                  +50&nbsp;₽ на баланс
                </strong>{" "}
                и{" "}
                <strong className="font-medium text-foreground">
                  10&nbsp;% со всех его пополнений
                </strong>
                . Ваш друг получает{" "}
                <strong className="font-medium text-foreground">
                  +10 дней бесплатного использования
                </strong>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-border/40 bg-background/50 py-8 text-center text-sm text-white backdrop-blur-sm">
        <p>Vipin — VPN для комфортного интернета в России и за его пределами.</p>
      </footer>
    </div>
  );
}
