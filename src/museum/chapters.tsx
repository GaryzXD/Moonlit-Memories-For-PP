import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChapterShell, Placeholder, Card } from "./ChapterShell";
import { useMusic } from "./music";

import amazon from "../assets/KIKI PIctures/amazon paki.png";
import cat from "../assets/KIKI Pictures/cat mw.png";
import crpr from "../assets/KIKI Pictures/crpr mc.png";
import honst from "../assets/KIKI Pictures/honst rct.png";
import imog from "../assets/KIKI Pictures/i mog.png";
import sorrywhat from "../assets/KIKI Pictures/sorrywhat.png";

import acha from "../assets/KIKI SS/acha ji.png";
import happy from "../assets/KIKI SS/got happy.png";
import bully from "../assets/KIKI SS/how i bully u.png";
import happy2 from "../assets/KIKI SS/i got so happy.png";
import iconic from "../assets/KIKI SS/iconic.png";
import bully2 from "../assets/KIKI SS/oh how i luv bully.png";
import soulmate from "../assets/KIKI SS/soulmatism.png";
import funny from "../assets/KIKI SS/w js funny lik that.png";

import cantstop from "../assets/PAKI VNS/cant stop listing to this.mp3";
import dacak from "../assets/PAKI VNS/da cak.mp3";
import iagr from "../assets/PAKI VNS/i agr with SAMA.mp3";
import kashmiri from "../assets/PAKI VNS/kashmiri accnt.mp3";
import lucky from "../assets/PAKI VNS/lucky man.mp3";
import notgonna from "../assets/PAKI VNS/not gonna giv you IG.mp3";
import bawling from "../assets/PAKI VNS/u bawling.mp3";
import funnyy from "../assets/PAKI VNS/u funnyy.mp3";
import firstdate from "../assets/PAKI VNS/firstvn.mp3";
import hatm from "../assets/PAKI VNS/ujhatm.mp3";


/** ============ CHAPTER 1 — Welcome ============ */
export function Chapter1() {
  const lines = [
    "It's your Twentween Birthday.",
    "This place doesn't have famous paintings.",
    "Or priceless sculptures.(that can change if I sculpt you",
    "It's just full of little things…",
    "that reminded me of you and us.",
    "Some are funny.",
    "Some are embarrassing.",
    "Some only make sense to us.",
    "Every single one is here for a reason.",
    "I like you a fucking lot, Pakeeza.",
    "I hope this little museum that I built gives you an actual glimpse of that.",
    "Happy Birthday Pakeeza, I wish I could make so much more for you.",
    "But this is all I could in the little time I had, So",
    "Take your time.",
    "There's no rush.",
  ];
  const emphasis = new Set([0, 4, 9, 11]);
  return (
    <ChapterShell number={1} title="Welcome, Kiki." kicker="Please, come in">
      <div className="space-y-6">
        {lines.map((l, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, delay: i * 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            className={
              i === 0
                ? "serif italic text-glow text-3xl md:text-5xl leading-tight"
                : emphasis.has(i)
                ? "serif italic text-glow text-2xl md:text-3xl"
                : "text-lg md:text-xl opacity-90"
            }
          >
            {l}
          </motion.p>
        ))}
      </div>
    </ChapterShell>
  );
}

/** ============ CHAPTER 2 — How It All Started ============ */
export function Chapter2() {
  const lines = [
    "It all started because I downloaded Equals & texted you first.(Obviously.)",
    "And oh my Lord… thank god I came across your profile.",
    "I'm so, so glad that I did.",
    "Waise bhi…",
    "who could resist texting that pretty of a girl?",
    "It was kinda inevitable.",
    "Thank you…",
    "for replying though &.",
    "For finally agreeing to give me your Instagram.",
    "And for accidentally (actually meant be) becoming one of my favourite people.",
  ];
  const emphasis = new Set([2, 4, 9]);
  return (
    <ChapterShell number={2} title="How it all started" kicker="Equals · the first text">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className={
                emphasis.has(i)
                  ? "serif italic text-glow text-xl md:text-2xl"
                  : "text-base md:text-lg opacity-90"
              }
            >
              {l}
            </motion.p>
          ))}
        </div>
        <Card>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#5DAEFF] to-[#0F4C81] flex items-center justify-center text-[10px] font-bold text-white">=</div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">Equals</div>
            </div>
            <div className="text-[10px] tracking-[0.2em] opacity-40">now playing - chase atlantic</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl glass overflow-hidden flex items-center justify-center text-3xl">🌙</div>
            <div className="flex-1">
              <div className="serif text-2xl text-glow leading-tight">Pakeeza</div>
              <div className="text-xs opacity-60 mt-1">20 · Kashmir</div>
              <div className="text-xs opacity-70 mt-2 serif italic">"too pretty to disappear."</div>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-xs">
            <div>
              <div className="opacity-50 mb-1 tracking-[0.15em] uppercase text-[9px]">Top track - You</div>
              <div className="flex items-end gap-0.5 h-6">
                {[3,5,2,7,4,6,3,8,5,4,6,3,5,7,4].map((h,k)=>(
                  <div key={k} className="flex-1 rounded-sm bg-gradient-to-t from-[--color-accent-blue]/40 to-[--color-glow]/80" style={{height:`${h*10}%`}}/>
                ))}
              </div>
            </div>
            <div className="flex justify-between opacity-80">
              <span className="opacity-60">Vibe</span>
              <span className="serif italic">ZING - I just loved you as soon as I saw you</span>
            </div>
            <div className="flex justify-between opacity-80">
              <span className="opacity-60">Just text her that's the LOML</span>
              <span className="text-glow serif italic">unreasonably high</span>
            </div>
          </div>
          <div className="text-xs opacity-70 mt-5 border-t border-white/10 pt-3 serif italic">
            "who could resist texting that pretty of a girl? (They will, now that I'll show up"
          </div>
        </Card>
      </div>
    </ChapterShell>
  );
}

/** ============ CHAPTER 3 — Voice Note Vault ============ */
export function Chapter3() {
  // Fully editable list — swap `src` with real audio files later.
  const notes = [
  {
    title: "YAH I JUST CANT STOP PLAYING THIS.",
    sub: "Yeah… I fell for you again.",
    src: cantstop,
    dur: "0:12",
  },
  {
    title: "I would totally agree with her.",
    sub: "But I am not at all Bechara I just love existing with you.",
    src: iagr,
    dur: "0:08",
  },
  {
    title: "You just be bawling, gang.",
    sub: "But I love it.",
    src: bawling,
    dur: "0:11",
  },
  {
    title: "You're just funny like that sometimes.",
    sub: "",
    src: funnyy,
    dur: "0:05",
  },
  {
    title: "I genuinely feel like the luckiest man alive.",
    sub: "",
    src: lucky,
    dur: "0:10",
  },
  {
    title: "THE CAKE!!!!",
    sub: "Historic moment & Generational FUMBLE",
    src: dacak,
    dur: "0:15",
  },
  {
    title: "See? Clearly I like you more.",
    sub: "I'm legit the reason we're still talking.",
    src: notgonna,
    dur: "0:09",
  },
  {
    title: "Aapko bohot galat lagta hai, baby.",
    sub: "You're the cutest.",
    src: kashmiri,
    dur: "0:13",
    
  },
{
  title: "The first Voice Note YOU sent.",
  sub: "I still smile hearing this and knowing that I'll get to hear your voice for the rest of my life.",
  src: firstdate,
  dur: "0:18",
},
{
  title: "Just say that you hate me. JUST SAY IT",
  sub: "No one has ever said that to me - f",
  src: hatm,
  dur: "0:18",
},

];
  return (
    <ChapterShell number={3} title="The Voice Note Vault" kicker="Press play, gently">
      <p>Little audio moments I don't want to forget.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {notes.map((n, i) => (
          <VoiceNote key={i} title={n.title} sub={n.sub} src={n.src} dur={n.dur} />
        ))}
      </div>
      <p className="text-xs opacity-50 mt-4">VOICE_NOTE_PLACEHOLDER × {notes.length}</p>
    </ChapterShell>
  );
}
function VoiceNote({ title, sub, src, dur }: { title: string; sub?: string; src?: string; dur: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (!src) return;
    if (!audioRef.current) audioRef.current = new Audio(src);
    const a = audioRef.current;
    if (playing) a.play().catch(() => {});
    else a.pause();
    return () => { a.pause(); };
  }, [playing, src]);
  return (
    <Card className="flex items-start gap-4">
      <button
        onClick={() => setPlaying((p) => !p)}
        className="w-12 h-12 shrink-0 rounded-full btn-glow btn-glow-hover flex items-center justify-center"
        aria-label="Play"
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <div className="flex-1 min-w-0">
        <div className="serif text-lg leading-snug">{title}</div>
        {sub && <div className="serif italic text-glow text-sm mt-1 opacity-90">{sub}</div>}
        <div className="h-1.5 rounded-full bg-white/5 mt-3 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[--color-accent-blue] to-[--color-glow]"
            animate={{ width: playing ? "100%" : "0%" }}
            transition={{ duration: playing ? 8 : 0.3, ease: "linear" }}
            onAnimationComplete={() => playing && setPlaying(false)}
          />
        </div>
      </div>
      <div className="text-xs opacity-60 tabular-nums pt-1">{dur}</div>
    </Card>
  );
}

/** ============ CHAPTER 4 — Chat Time Machine ============
 * One long auto-scrolling WhatsApp conversation. No screenshots.
 * Fully editable — add / remove entries below.
 */

type ChatEntry =
  | { kind: "date"; label: string }
  | {
      kind: "msg";
      from: "me" | "her";
      text: string;
      time: string;
      typing?: number;
      delay?: number;
      gif?: string;
      reaction?: string;
    };

const CHAT_SCRIPT: ChatEntry[] = [
  { kind: "date", label: "Monday" },
  { kind: "msg", from: "me",  text: "matna pasand karte aap muje??",                                 time: "8:03 PM", delay: 400 },
  { kind: "msg", from: "her", text: "mere saat call pe nahi sona jao yaha se",                       time: "8:03 PM", typing: 1400, delay: 700 },
  { kind: "msg", from: "me",  text: "I mean i sleep first, you always have the option to cut the call 🥰", time: "8:04 PM", delay: 900 },
  { kind: "msg", from: "her",  text: "I WANT TO SAY SOMETHING\nVERY VERY BAD ABOUT YOU\nBUT THERES NOTHING THATS\nBAD ABOUT YOU SO JUST\nIMAGINE IF THERE WAS\nSOMETHING BAD ABOUT YOU I\nWOULD'VE BROUGHT THAT UP\nABHI", time: "8:04 PM", delay: 1200 },
  { kind: "msg", from: "her", text: "…",                                                              time: "8:06 PM", typing: 2200, delay: 1400 },

  { kind: "date", label: "Tuesday" },
  { kind: "msg", from: "her", text: "I'm not small",                                                 time: "8:05 PM", delay: 500 },
  { kind: "msg", from: "her", text: "you're just too tall",                                          time: "8:05 PM", delay: 300 },
  { kind: "msg", from: "her", text: "you're not even 6",                                             time: "8:05 PM", delay: 300 },
  { kind: "msg", from: "her", text: "you're short too",                                              time: "8:05 PM", delay: 300 },
  { kind: "msg", from: "me",  text: "Nahi chadh paunga, id prolly just jump over you",              time: "8:06 PM", typing: 1100, delay: 700 },
  { kind: "msg", from: "her", text: "❤️",                                                             time: "8:06 PM", reaction: "❤️", delay: 900 },
  { kind: "msg", from: "her",  text: "the gasps i've been gasping for\nthe past 5 minutes is INSANE", time: "8:07 PM", typing: 1000, delay: 800 },
  { kind: "msg", from: "me",  text: "Gang the only 6 you reach is a 4'6",                            time: "8:09 PM", delay: 1600 },

  { kind: "msg", from: "me",  text: "Aapka punch pahuchega??",                                       time: "8:18 PM", gif: "WWE PUNCH • GIF", delay: 1400 },
  { kind: "msg", from: "her", text: "ya khuda",                                                       time: "8:18 PM", typing: 900, delay: 500 },
  { kind: "msg", from: "me",  text: "😭😭😭😭😭😭",                                                   time: "8:19 PM", delay: 500 },
  { kind: "msg", from: "her", text: "*a very huge sigh*",                                             time: "8:19 PM", typing: 800, delay: 400 },
  { kind: "msg", from: "me",  text: "I can literally feel you sighing\nI promise",                    time: "8:20 PM", typing: 900, delay: 500 },

  { kind: "msg", from: "her", text: "how's it up there",                                             time: "8:27 PM", delay: 1400 },
  { kind: "msg", from: "me",  text: "Cold",                                                           time: "8:27 PM", typing: 700, delay: 500 },
  { kind: "msg", from: "me",  text: "Probably because you don't exist here",                          time: "8:27 PM", delay: 400 },
  { kind: "msg", from: "her", text: "oxygen ki kami nahi hoti up there?",                             time: "8:28 PM", typing: 1000, delay: 500 },
  { kind: "msg", from: "her",  text: "good lord you're so good at it",                                 time: "8:28 PM", delay: 500 },
  { kind: "msg", from: "me", text: "Hoti hai na,\nonly if you were taller\ntoh it would've been okay", time: "8:29 PM", typing: 1400, delay: 600 },

  { kind: "date", label: "Wednesday" },
  { kind: "msg", from: "her", text: "KYA",                                                            time: "2:40 PM", delay: 500 },
  { kind: "msg", from: "me",  text: "STOP EXPLAINING YOUR\nLAME JOKE TO ME",                          time: "2:40 PM", typing: 700, delay: 400 },
  { kind: "msg", from: "her", text: "😭😭😭",                                                          time: "2:40 PM", delay: 300 },
  { kind: "msg", from: "me",  text: "WHY ARE YOU EVEN\nEXPLAINING ITTT",                              time: "2:41 PM", delay: 400 },
  { kind: "msg", from: "her", text: "YR MAKING ME LAUGH STOP IT\nMY CHEEKS HURT",                     time: "2:41 PM", typing: 900, delay: 500 },
  { kind: "msg", from: "me",  text: "Gang the fuck did i do",                                         time: "2:41 PM", delay: 400 },
  { kind: "msg", from: "her", text: "meri smile lines already deep hai\nAahan",                       time: "2:42 PM", typing: 800, delay: 400 },
  { kind: "msg", from: "me",  text: "Show cheeks",                                                    time: "2:42 PM", delay: 500 },

  { kind: "date", label: "Today" },
  { kind: "msg", from: "me",  text: "But aapke case mai",                                             time: "10:00 PM", delay: 900 },
  { kind: "msg", from: "me",  text: "Aisa tweak karne jaisa kya yha",                                 time: "10:00 PM", delay: 400 },
  { kind: "msg", from: "me",  text: "You do look completely lost tho",                                time: "10:01 PM", delay: 500 },
  { kind: "msg", from: "her", text: "idk i missed you sm",                                            time: "10:02 PM", typing: 1800, delay: 1200 },
  { kind: "msg", from: "her", text: "WHAT YOU DOING TO A\nGANGSTA LIKE ME",                           time: "10:02 PM", delay: 400 },
  { kind: "msg", from: "me",  text: "Uhmm",                                                            time: "10:02 PM", typing: 1200, delay: 3000 },
];

export function Chapter4() {
  return (
    <ChapterShell number={4} title="The Chat Time Machine" kicker="Scroll. Watch it happen again.">
      <p className="opacity-75 -mt-2">Not screenshots. Just our msgs replayed, one message at a time.</p>
      <div className="mt-10">
        <AutoWhatsApp script={CHAT_SCRIPT} />
      </div>
    </ChapterShell>
  );
}

function AutoWhatsApp({ script }: { script: ChatEntry[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState<"me" | "her" | null>(null);
  const [started, setStarted] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    setVisible(0);
    setTyping(null);
    let cancelled = false;
    const timers: number[] = [];
    let acc = 400;

    script.forEach((entry, i) => {
      if (entry.kind === "date") {
        acc += 300;
        timers.push(window.setTimeout(() => !cancelled && setVisible((v) => Math.max(v, i + 1)), acc));
        return;
      }
      acc += entry.delay ?? 400;
      if (entry.typing) {
        const t0 = acc;
        timers.push(window.setTimeout(() => !cancelled && setTyping(entry.from), t0));
        acc += entry.typing;
        timers.push(window.setTimeout(() => !cancelled && setTyping(null), acc));
      }
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setTyping(null);
          setVisible((v) => Math.max(v, i + 1));
        }, acc)
      );
    });

    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        const sc = scrollRef.current;
        if (sc) sc.scrollTo({ top: 0, behavior: "smooth" });
        window.setTimeout(() => !cancelled && setCycle((c) => c + 1), 2600);
      }, acc + 3500)
    );

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [started, cycle, script]);

  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;
    sc.scrollTo({ top: sc.scrollHeight, behavior: "smooth" });
  }, [visible, typing]);

  const shown = script.slice(0, visible);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-md">
      <div
        className="rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
        style={{ background: "#0b141a" }}
      >
        <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#202c33" }}>
          <div className="text-white/70 text-lg">‹</div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300/70 to-blue-400/70" />
          <div className="flex-1">
            <div className="text-[15px] font-medium text-white/95">Pakeeza 🌙</div>
            <div className="text-[11px] text-white/50">online</div>
          </div>
          <div className="flex gap-4 text-white/60 text-sm">📞 ⋮</div>
        </div>

        <div
          ref={scrollRef}
          className="px-3 py-4 space-y-1 h-[480px] overflow-y-auto"
          style={{ background: "#0b141a" }}
        >
          {shown.map((e, i) =>
            e.kind === "date" ? (
              <DateChip key={i} label={e.label} />
            ) : (
              <WABubble key={i} entry={e} />
            )
          )}
          {typing && <WATyping side={typing} />}
          <div ref={bottomRef} />
        </div>
      </div>
      <div className="text-center text-[10px] uppercase tracking-[0.35em] opacity-40 mt-4">
        auto-scrolling · loops forever
      </div>
    </div>
  );
}

function DateChip({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center my-3"
    >
      <span className="text-[11px] px-3 py-1 rounded-md text-white/70" style={{ background: "#1f2c33" }}>
        {label}
      </span>
    </motion.div>
  );
}

function WABubble({ entry }: { entry: Extract<ChatEntry, { kind: "msg" }> }) {
  const mine = entry.from === "me";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      className={`flex ${mine ? "justify-end" : "justify-start"} px-1`}
    >
      <div
        className="relative max-w-[80%] px-2.5 pt-1.5 pb-1 text-[14.5px] leading-snug text-white/95 shadow-sm"
        style={{
          background: mine ? "#005c4b" : "#202c33",
          borderRadius: mine ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
        }}
      >
        {entry.gif && (
          <div
            className="mb-1 rounded-md h-28 w-56 flex items-center justify-center text-[10px] uppercase tracking-[0.25em] text-white/60"
            style={{ background: "rgba(0,0,0,0.35)" }}
          >
            {entry.gif}
          </div>
        )}
        <div className="whitespace-pre-line pr-12">{entry.text}</div>
        <div className="absolute bottom-1 right-2 text-[10px] text-white/50 flex items-center gap-1">
          <span>{entry.time}</span>
          {mine && <span className="text-[#53bdeb]">✓✓</span>}
        </div>
      </div>
    </motion.div>
  );
}

function WATyping({ side }: { side: "me" | "her" }) {
  const mine = side === "me";
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex ${mine ? "justify-end" : "justify-start"} px-1 py-0.5`}
    >
      <div
        className="px-3 py-2 flex items-center gap-1"
        style={{
          background: mine ? "#005c4b" : "#202c33",
          borderRadius: mine ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/70"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}




/** ============ CHAPTER 5 — Our Lore ============ */
export function Chapter5() {
  // Each item is fully editable — swap `img` string with a real image path/URL later.
  const lore: { text: string; sub?: string; img: string }[] = [
    { text: "The call that was supposed to last an hour.", sub: "(It didn't.)", img: "LORE_IMAGE_01" },
    { text: "I love to bully you.", img: "LORE_IMAGE_02" },
    { text: "Our height difference.", img: "LORE_IMAGE_03" },
    { text: "How it all started.", sub: "(Equals.)", img: "LORE_IMAGE_04" },
    { text: "First text on Instagram.", img: "LORE_IMAGE_05" },
    { text: "Me to you every day.", sub: "\"You're too pretty to disappear.\"", img: "LORE_IMAGE_06" },
    { text: "Soulmatism.", sub: "Known fact.", img: "LORE_IMAGE_07" },
    { text: "\"This is what I meant by work, baby.\"", sub: "Think you know that by now, obviously.", img: "LORE_IMAGE_08" },
    { text: "We're so cute, gang.", img: "LORE_IMAGE_09" },
    { text: "\"You're so good at it.\" \"Accha?\"", img: "LORE_IMAGE_10" },
    { text: "MY FIRST EVER REJECTION.", sub: "Still recovering.", img: "LORE_IMAGE_11" },
    { text: "Does bro realise she fumbled a bit?", sub: "Just likes me for the looks, eh?", img: "LORE_IMAGE_12" },
  ];
  return (
    <ChapterShell number={5} title="Our Lore" kicker="Only we get these">
      <p>Every good thing collects its own private mythology. Ours started faster than expected.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        {lore.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-2xl overflow-hidden flex flex-col"
          >
            <div
              className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(93,174,255,0.10), rgba(15,76,129,0.22))",
              }}
            >
              <div className="serif italic text-glow/60 text-4xl opacity-40">{String(i + 1).padStart(2, "0")}</div>
              <div className="absolute inset-3 rounded-xl border border-white/10 pointer-events-none" />
            </div>
            <div className="px-4 py-3">
              <div className="serif text-glow text-lg leading-snug">{l.text}</div>
              {l.sub && <div className="serif italic text-sm opacity-75 mt-1">{l.sub}</div>}
            </div>
          </motion.div>
        ))}
      </div>

    </ChapterShell>
  );
}

/** ============ CHAPTER 6 — Relationship Statistics ============ */
export function Chapter6() {
  const stats: { n: string; l: string; sub?: string }[] = [
    { n: "9",   l: "Days in contact" },
    { n: "9",   l: "Days we've talked" },
    { n: "71",  l: "Reels exchanged" },
    { n: "156", l: "Voice notes" },
    { n: "39",  l: "Hours spent on call" },
    { n: "∞",   l: "Number of times you've said", sub: "\"I like you.\"" },
    { n: "0",   l: "Times we said", sub: "\"Okay, goodnight.\"" },
    { n: "∞",   l: "Times one call became another", sub: "Every single time." },
  ];
  return (
    <ChapterShell number={6} title="Statistically Speaking" kicker="Numbers we made up but also didn't (They're real)">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring" }}
            className="glass rounded-2xl p-6 text-center"
          >
            <AnimatedNumber value={s.n} />
            <div className="text-xs opacity-70 mt-2">{s.l}</div>
            {s.sub && <div className="serif italic text-glow text-sm mt-1">{s.sub}</div>}
          </motion.div>
        ))}
      </div>
    </ChapterShell>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState<string>(/^\d+$/.test(value) ? "0" : value);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!/^\d+$/.test(value)) { setDisplay(value); return; }
    const target = parseInt(value, 10);
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1400;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(String(Math.round(target * eased)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return <div ref={ref} className="serif text-5xl md:text-6xl text-glow tabular-nums">{display}</div>;
}

/** ============ CHAPTER 7 — Photo Gallery ============ */



const photos = [
  amazon,
  cat,
  crpr,
  honst,
  imog,
  sorrywhat,
];


export function Chapter7() {
  return (
    <ChapterShell number={7} title="The Photo Room" kicker="Handpicked frames">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="relative group">
            <img
  src={photos[i]}
  alt=""
  className="w-full h-full object-cover rounded-2xl"
/>
          </div>
        ))}
      </div>
    </ChapterShell>
  );
}




/** ============ CHAPTER 8 — Memory Map ============ */
export function Chapter8() {
  const pins = [
    { x: 30, y: 32, l: "Where You Live (me too for now)" },
    { x: 68, y: 70, l: "Delhi" },
    { x: 50, y: 50, l: "Probably the cafe where we meet, our first meetup on your birthday · Happy birthday again my Baby" },
  ];

  return (
    <ChapterShell number={8} title="A Small Map of Us" kicker="Cities, corners, callbacks">
      <div className="relative glass rounded-2xl aspect-[16/9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 60%, #5DAEFF 0%, transparent 40%), radial-gradient(circle at 70% 30%, #0F4C81 0%, transparent 50%)",
          }}
        />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
          <path
            d={`M ${pins[0].x} ${pins[0].y * 0.6} L ${pins[1].x} ${pins[1].y * 0.6}`}
            fill="none" stroke="rgba(165,216,255,0.4)" strokeDasharray="1 2" strokeWidth="0.2"
          />
        </svg>
        {pins.map((p, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <div className="w-3 h-3 rounded-full bg-[--color-glow] shadow-[0_0_24px_#A5D8FF]" style={{ animation: `twinkle ${2 + i}s ease-in-out infinite` }} />
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-xs serif italic text-glow whitespace-nowrap">
              {p.l}
            </div>
          </div>
        ))}
      </div>
      <p className="serif italic text-glow text-xl md:text-2xl text-center mt-6">Our next chapter starts here.</p>
    </ChapterShell>
  );
}

/** ============ CHAPTER 9 — Playlist ============ */
export function Chapter9() {
  const songs: { t: string; a: string }[] = [
    { t: "The Fate of Ophelia", a: "Taylor Swift" },
    { t: "Meddle About",        a: "Chase Atlantic" },
    { t: "Southbound",          a: "Artemas" },
    { t: "Apocalypse",          a: "Cigarettes After Sex" },
    { t: "Every Breath You Take", a: "The Police" },
    { t: "Drop Dead",           a: "Olivia Rodrigo" },
    { t: "Dil Kaa Jo Haal Hai", a: "Abhijeet" },
  ];
  return (
    <ChapterShell number={9} title="The Us Playlist" kicker="Not on Equals. On repeat.">
      <ol className="space-y-2">
        {songs.map((s, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-4 glass rounded-xl px-4 py-3"
          >
            <span className="serif text-glow text-lg tabular-nums w-6">{i + 1}</span>
            <div className="flex-1 min-w-0">
              <div className="serif text-base leading-tight">{s.t}</div>
              <div className="text-xs opacity-60 italic mt-0.5">{s.a}</div>
            </div>
            <span className="text-xs opacity-50">♪</span>
          </motion.li>
        ))}
      </ol>
    </ChapterShell>
  );
}



const outtakes = [
  { text: "How I bully you.", image: bully },
  { text: "Oh, how I love bullying you.", image: bully2 },
  { text: "I have found my therapy.", image: happy },
  { text: "Achha ji.", image: acha },
  { text: "The iconic.", image: iconic },
  { text: "I got so happyyyy.", image: happy2 },
  { text: "Soulmatisms.", image: soulmate },
  { text: "We're just so funny.", image: funny },
];

/** ============ CHAPTER 10 — Outtakes ============ */
export function Chapter10() {

  return (
    <ChapterShell number={10} title="The Outtakes" kicker="Bloopers, softly lit">
      <p>Screenshots I probably shouldn't have kept, but did.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {outtakes.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl aspect-square p-4 flex flex-col justify-between"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-50">Outtake {String(i+1).padStart(2,"0")}</div>
            <div className="serif italic text-glow text-base leading-tight"><>
  <img
    src={o.image}
    alt={o.text}
    className="w-full rounded-xl object-cover mb-3"
  />

  {o.text}
</></div>
          </motion.div>
        ))}
      </div>
    </ChapterShell>
  );
}

/** ============ CHAPTER 11 — Hall of Fame ============ */
export function Chapter11() {
  const awards = [
    { t: "The baddest baddie of all.", d: "My 4'6 Pakeeza." },
    { t: "Three-time Olympic Gold Medalist.", d: "Yapathons." },
    { t: "The sneakiest thief.", d: "Who stole my heart." },
    { t: "For being the funniest.", d: "I laugh so much when I'm with you." },
  ];
  return (
    <ChapterShell number={11} title="Hall of Fame" kicker="Awards nobody else was nominated for">
      <div className="grid md:grid-cols-2 gap-4">
        {awards.map((a, i) => (
          <Card key={i} className="border-l-2 border-[--color-accent-blue]">
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">
              Award {String(i + 1).padStart(2, "0")}
            </div>
            <div className="serif text-xl text-glow mt-1">{a.t}</div>
            <div className="text-sm opacity-70 mt-1 italic">{a.d}</div>
          </Card>
        ))}
      </div>
    </ChapterShell>
  );
}

/** ============ CHAPTER 12 — Secret Constellation ============ */
export function Chapter12() {
  const stars = [
    { x: 30, y: 55, label: "the night we called for the first time" },
    { x: 30, y: 35, label: "the jokes that made me screenshot" },
    { x: 30, y: 15, label: "the song you sent unprompted" },
    { x: 55, y: 20, label: "the voice note I've replayed too much" },
    { x: 52, y: 38, label: "the moment I knew" },
  ];
  // Trace a P: stem (0→1→2), loop (2→3→4→1)
  const pathD = `M ${stars[0].x} ${stars[0].y} L ${stars[1].x} ${stars[1].y} L ${stars[2].x} ${stars[2].y} L ${stars[3].x} ${stars[3].y} L ${stars[4].x} ${stars[4].y} L ${stars[1].x} ${stars[1].y}`;
  const [active, setActive] = useState<number | null>(null);
  return (
    <ChapterShell number={12} title="A Small Constellation" kicker="Five stars. Shaped like a P.">
      <div className="relative glass rounded-2xl aspect-[16/9] overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
          <path d={pathD} fill="none" stroke="rgba(165,216,255,0.35)" strokeDasharray="1 2" strokeWidth="0.2" />
        </svg>
        {stars.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_#A5D8FF] hover:scale-125 transition"
            style={{ left: `${s.x}%`, top: `${s.y}%`, animation: `twinkle ${2 + i}s ease-in-out infinite` }}
          />
        ))}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-strong px-5 py-3 rounded-full serif italic text-glow"
            >
              {stars[active].label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ChapterShell>
  );
}


/** ============ CHAPTER 13 — Messages I Never Sent ============ */
export function Chapter13() {
  const drafts: string[] = [
    "Typed \"I miss you.\" at 1 AM on a Friday. Wasn't ready. Saved to drafts.",
    "One day… you'll see me the way Boa looks at Luffy.",
    "I've never related to Selfless. I think you'll finally make me able to.",
    "POV: You married a yapper… and now you've got a little yapper who sounds exactly like this.(This was a reel)",
    "No one has ever made me feel like this. I don't even know how to describe it.",
    "Sometimes I read our chats back… just because they make me smile. No cap I've done this thrice now",
    "I still randomly laugh at things you've said. It's honestly becoming a problem.",
    "I've geniunely never seen someone as pretty & cool as you. I don't know how you do it.",
    "I've definitely stared at your profile (both accounts) for longer than I'd like to admit.",
    "I think I've fallen for you hard, I'm in Love with you Pakeeza.",
  ];
  return (
    <ChapterShell number={13} title="Messages I Never Sent" kicker="Drafts, softly">
      <div className="space-y-3">
        {drafts.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-5 border-l-2 border-[--color-glow]/40"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-50">Draft {String(i+1).padStart(3,"0")} · not sent</div>
            <p className="serif italic text-lg md:text-xl mt-2 text-glow">"{d}"</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-strong rounded-2xl p-8 text-center mt-8"
        >
          <div className="text-[10px] uppercase tracking-[0.35em] opacity-60">Draft #143</div>
          <p className="serif italic text-2xl md:text-3xl text-glow mt-4 leading-relaxed">
            I was almost gonna text you all of this.
            <br />
            Instead… I built a whole website. Also I realised it is really fucking hard to keeep things from you, I feel like I have to tell you everything, and I want to tell you everything, (Like the number of times I wanted to talk about what I've been up to, I had to hide things from you for the suprise and I realised I hate hiding things from you) but I also want to surprise you with this, so I guess this is my way of telling you everything without actually telling you everything. I hope you like it.
          </p>
        </motion.div>
      </div>
    </ChapterShell>
  );
}

/** ============ CHAPTER 14 — Birthday Letter ============ */
export function Chapter14() {
  return (
    <ChapterShell number={14} title="A Little Letter" kicker="For you, only">
      <div className="glass-strong rounded-2xl p-8 md:p-12 serif text-lg md:text-xl leading-relaxed space-y-4">
        <p>Pakeeza,</p>
        <p>I don't know exactly what to write here without sounding like every birthday letter ever written.</p>
        <p>So I'll just say what I actually mean.</p>
        <p>I like you. Like… a fucking lot.</p>
        <p>
          I hope this museum gives you an actual glimpse of that. I wish I had more time and more memories to put into
          this, but I genuinely loved every part of building this Museum for you, trust me when I say I've never put in
          this much efforts for ANYONE, its just YOU and as soon as I got this idea like 4 days ago lol, even though I
          had very little time and uncertainty about this actually happening on time, I locked in for you and I wont do
          it for anyone else, I like you so much Pakeeza.
        </p>
        <p>
          It's kinda funny because we've only known each other for a few days, but somehow you've already become a part
          of my everyday. My day doesn't feel complete until I've bullied you at least once, heard one of your yaps,
          argued about who's shorter (it's definitely you), or watched you somehow turn the dumbest conversation into
          my favourite one.
        </p>
        <p>You make normal days feel weirdly exciting.</p>
        <p>Like… suddenly I care about telling someone every tiny thing that happened.</p>
        <p>Suddenly reels become "I gotta send this to Pakeeza."</p>
        <p>Suddenly songs become "she needs to hear this."</p>
        <p>Suddenly my phone buzzing is enough to make me smile like an idiot.</p>
        <p>I genuinely don't know how you managed to do that.</p>
        <p>And maybe the funniest part is…</p>
        <p>you somehow made a gangsta say all this.</p>
        <p>Congratulations.</p>
        <p>It's your Twentween birthday now.</p>
        <p>
          I don't really have some massive life lesson or poetic quote to leave you with. But i think you are the
          strongest person that I've met, I dont know how you manage to deal with so much shit and still manage to be you, the pure and perfect you, the you that I love so much. I hope you never change, and I hope you never have to change. I hope you always stay the same, and I hope you always stay happy.
          But you are geniunely so fucking strong Pakeeza. I just hope i can learn stuff from you and baby I'll be here for you in every part of your life.
        </p>
        <p>
          Even when its not all sunshine and rainbows, Because I dont want to fall in love with the Sunlight I want to
          love your sky. ( I am so poetic gang just marry me already)
        </p>
        <p>
          I just hope this tiny museum of yours makes you smile the same way you've somehow made me smile over these past few
          days & I know this all might be a lot coming from someone you just met online on an app named Equals ( This wont get Old) but I think all of that was meant to happen, I think we were meant to meet and I think we were meant to be together. When God wants it, He makes it happen right?
        </p>
        <p>Happy birthday, Pakeeza.</p>
        <p>Now go enjoy your day.</p>
        <p>Then come back.</p>
        <p>I've probably found another reason to bully you already.</p>
        <p className="text-glow">❤️</p>
      </div>
    </ChapterShell>
  );
}


/** ============ CHAPTER 15 — 20 Reasons I'm Cooked ============ */
export function Chapter15() {
  const reasons: string[] = [
    "because somehow\n9 days felt like\n9 months",
    "because my reels\nhave become\nOUR reels",
    "because\n\"idk i missed you sm.\"",
    "because apparently\nbullying is my\nlove language",
    "because you somehow\nmade yourself my\nsleeping medicine",
    "because every time\nmy phone buzzes\ni secretly hope\nit's you",
    "because you somehow\nmade a gangsta\nbuild a whole\nmuseum",
    "because i still think\ni like you more",
    "because your\nyapathons have\nbecome my\nfavourite podcast",
    "because the only 6\nyou reach\nis still 4'6",
    "because now i think every song that you listen to is good (even though I'm a song critique)",
    "because i randomly\nsmile while reading\nour chats back (I've been to heaven and back 3 times now, the third one was devastating and took me 30 minutes though)",
    "because\n\"ya khuda\"\nis permanently\nstuck in my head",
    "because you somehow\nmade me code and build an astounding website for you?\n(I think I'm in love with you)- I definitely am.",
    "because you're the\nonly person who\ncould make me\nwrite something\nthis cringe…\nand i'd still\nbe proud of it",
    "because you've\nsomehow become\npart of my\neveryday routine",
    "because i genuinely\ncan't wait to hear\nyour next\nvoice note",
    "because now I feel uneasy if I can't feel your presence in my phone",
    "because\nTwentween\nis now an\nofficial age",
    "Reason #20\nwas supposed\nto go here.\nBut then\ni realised…\nthe first 19\nwere already\nabout you\nanyway.\n\nBecause the only reason I really need is just You.",
  ];
  return (
    <ChapterShell number={15} title="20 Reasons I'm Cooked" kicker="counting, quietly">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((r, i) => {
          const isFinal = i === 19;
          if (isFinal) {
            return <FinalCookedCard key={i} number={i + 1} text={r} />;
          }
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.6 }}
              whileHover={{ y: -6, filter: "brightness(1.15)" }}
              className="glass rounded-2xl p-6 flex flex-col gap-3 transition-shadow hover:shadow-[0_20px_60px_rgba(93,174,255,0.2)]"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] opacity-60">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="serif text-glow text-lg leading-snug whitespace-pre-line">{r}</div>
            </motion.div>
          );
        })}
      </div>
    </ChapterShell>
  );
}

function FinalCookedCard({ number, text }: { number: number; text: string }) {
  const lines = text.split("\n");
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9 }}
      whileHover={{ y: -8 }}
      className="glass-strong rounded-2xl p-8 md:col-span-2 lg:col-span-3 flex flex-col gap-3 shadow-[0_30px_100px_rgba(93,174,255,0.35)]"
    >
      <div className="text-[10px] uppercase tracking-[0.4em] opacity-70">
        {String(number).padStart(2, "0")} · the last one
      </div>
      <div className="serif text-glow text-xl md:text-2xl leading-relaxed">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
          >
            {l || "\u00A0"}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/** ============ CHAPTER 16 — Pakeeza Starter Pack ============ */
export function Chapter16() {
  const items: { icon: string; title: string; text: string; special?: "sparkle" | "glow" | "wobble"; big?: boolean }[] = [
    { icon: "⭐", title: "Ash & Cats", text: "Ash 🐈\nthe cutest gang member", special: "sparkle" },
    { icon: "💄", title: "Lipliner", text: "her BROWN lipliner\n(essential equipment.)" },
    { icon: "🏔️", title: "Kashmiri Accent", text: "my favourite\nKashmiri accent\ncould genuinely\nwin arguments\nwithout even trying", special: "glow" },
    { icon: "👓", title: "Glasses", text: "blind.\n(still somehow you're the prettiest.)", special: "wobble" },
    { icon: "🎧", title: "Voice Notes", text: "voice notes\nmy favourite\npodcast." },
    { icon: "📱", title: "Reels", text: "approximately\n7 reels per day\n(non-negotiable - i want that from you btw lol)" },
    { icon: "☕", title: "Coffee", text: "because I think you'll\nforget to drink it while\nyapping" },
    { icon: "🎂", title: "Twentween", text: "officially\nTwentween" },
    { icon: "😂", title: "\"Pitungi mai tumhe\"", text: "\"Sure chotu don\"\nI loved this" },
    {
      icon: "❤️",
      title: "Certified Pakeeza",
      text: "comes with:\n• Ash\n• Lipliner\n• Glasses\n• Kashmiri Accent\n• Unlimited Yapping\n• 4'6 DLC\n• Random Reels\n• One Very Smol Confused Gangsta\n• uh Blindness as well",
      big: true,
    },
  ];
  return (
    <ChapterShell number={16} title="Pakeeza Starter Pack" kicker="what makes a Pakeeza">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: (i % 5) * 0.06, duration: 0.6 }}
            whileHover={
              it.special === "wobble"
                ? { rotate: [0, -4, 4, -3, 3, 0], y: -4 }
                : { y: -6 }
            }
            className={`relative glass rounded-2xl p-5 text-center flex flex-col items-center gap-2 ${
              it.big ? "md:col-span-3 lg:col-span-4 p-8 glass-strong shadow-[0_30px_100px_rgba(93,174,255,0.3)]" : ""
            } ${it.special === "glow" ? "shadow-[0_0_40px_rgba(93,174,255,0.35)]" : ""}`}
          >
            {it.special === "sparkle" && (
              <>
                {[0, 1, 2, 3].map((k) => (
                  <motion.span
                    key={k}
                    className="absolute text-xs text-glow pointer-events-none"
                    style={{
                      top: `${10 + (k % 2) * 70}%`,
                      left: `${10 + Math.floor(k / 2) * 75}%`,
                    }}
                    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2 + k * 0.3, repeat: Infinity, delay: k * 0.4 }}
                  >
                    ✦
                  </motion.span>
                ))}
              </>
            )}
            <div className={`${it.big ? "text-5xl" : "text-3xl"} mb-1`}>{it.icon}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">{it.title}</div>
            <div className={`serif italic text-glow whitespace-pre-line ${it.big ? "text-lg" : "text-sm"} leading-snug`}>
              {it.text}
            </div>
          </motion.div>
        ))}
      </div>
    </ChapterShell>
  );
}


/** ============ CHAPTER 17 — Pakeeza.exe ============ */
export function Chapter17() {
  const bootLines: { text: string; kind?: "head" | "ok" | "status" | "final" | "blank" }[] = [
    { text: "> locating pakeeza...", kind: "head" },
    { text: "✔ Ash found.", kind: "ok" },
    { text: "✔ Lipliner equipped.", kind: "ok" },
    { text: "✔ Kashmiri accent loaded.", kind: "ok" },
    { text: "✔ Yapping engine online.", kind: "ok" },
    { text: "✔ Music opinions initialized.", kind: "ok" },
    { text: "✔ Height: classified.", kind: "ok" },
    { text: "✔ Heart-stealing module active.", kind: "ok" },
    { text: "✔ Laugh detected.", kind: "ok" },
    { text: "✔ Reels incoming...", kind: "ok" },
    { text: "✔ Certified menace.", kind: "ok" },
    { text: "", kind: "blank" },
    { text: "System Status:", kind: "status" },
    { text: "Everything appears normal.", kind: "status" },
    { text: "Except one thing.", kind: "status" },
    { text: "Someone (me) accidentally got attached.", kind: "status" },
    { text: "", kind: "blank" },
    { text: "[BOOT COMPLETE.]", kind: "final" },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || step >= bootLines.length) return;
    const line = bootLines[step];
    const delay = line.kind === "head" ? 700 : line.kind === "blank" ? 200 : line.kind === "status" ? 620 : line.kind === "final" ? 900 : 380;
    const t = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [step, started, bootLines]);

  return (
    <ChapterShell number={17} title="Pakeeza.exe" kicker="booting…">
      <div ref={containerRef}>
        <Card className="font-mono text-[13.5px] md:text-sm bg-black/50 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] leading-[1.9]">
          {bootLines.slice(0, step).map((l, i) => {
            if (l.kind === "blank") return <div key={i} className="h-3" />;
            const color =
              l.kind === "head" ? "text-white/70" :
              l.kind === "ok" ? "text-[#7ee2a8]" :
              l.kind === "status" ? "text-white/80" :
              l.kind === "final" ? "text-[--color-glow] font-semibold tracking-wider" :
              "opacity-80";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={color}
              >
                {l.text}
              </motion.div>
            );
          })}
          <span className="inline-block w-2 h-4 bg-[--color-glow] align-middle ml-1 animate-pulse" />
        </Card>
      </div>
    </ChapterShell>
  );
}

/** ============ CHAPTER 18 — FAQ ============ */
export function Chapter18() {
  const qas: { q: string; a: string }[] = [
    { q: "Is this a real museum?", a: "Sadly no.\nIf it was, actually I'll make sure to build one for you, ONE DAY" },
    { q: "How long have we known each other?", a: "Long enough for\n39 hours of calls,\n156 voice notes,\n71 reels,\nand somehow...\nthat's still not enough." },
    { q: "Why her?", a: "Good question.\n\nI ask myself that every day.\n\nThen she laughs.\n\nOr says \"Oye Tum Pitoge merese or ya khuda.\"\n\nOr starts yapping.\n\nAnd suddenly the question answers itself." },
    { q: "Who's Ash?", a: "The cutest employee of this museum.\n\nZero responsibilities.\n\nMaximum cuteness." },
    { q: "How much time did it take to Build this Museum?", a: "Hmm more than my sleep, sanity & my fingernails.\n\nBut I loved every part of it.\n\nAlso I think this made realise how much I atually love you. Or else I aint writing 4K words of code in 4 Days" },
    { q: "Who's taller?", a: "Objectively:\nMe.\n\nSpiritually:\nStill me.\n\nAccording to her:\nApparently debatable." },
    { q: "Will there be a Museum of Us Part 2?", a: "Only if you atually send me your actual photos and keep giving me content.\n\nJudging by the current rate... You dont I dont have a single original photo, I took all of em from your account\n\nbut we're probably making Chapter 200." },
    { q: "Is she actually this funny?", a: "Unfortunately.\n\nYes." },
    { q: "Can I steal Pakeeza?", a: "No, that's why i Train MMA\n\nMuseum security has been informed & I am getting my guns " },
    { q: "How many times have you told me to stop working?", a: "A lot, even now but\n\n Even right now you're just telling me to turn my Laptop off, its funny but I'm doing this all for you, HOPE YOU LIKE IT MY BABY " },
  ];
  return (
    <ChapterShell number={18} title="Frequently Asked" kicker="(mostly by me, to me)">
      <div className="space-y-3">
        {qas.map((qa, i) => (
          <FAQItem key={i} {...qa} />
        ))}
      </div>
    </ChapterShell>
  );
}
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen((o) => !o)} className="w-full text-left glass rounded-2xl p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="serif text-lg text-glow">{q}</span>
        <span className={`transition text-xl opacity-70 ${open ? "rotate-45" : ""}`}>+</span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 opacity-85 italic serif whitespace-pre-line leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

/** ============ CHAPTER 19 — Random Pakeeza Generator ============ */
export function Chapter19() {
  const observations = useMemo(
    () => [
      "Oye Pitungi mai tumko.",
      "Currently missing me (cause I do, all the time).",
      "Ash has already forgiven her.",
      "She is typing...",
      "Actually never mind.",
      "Voice note incoming.",
      "Somewhere she's saying \"ya khuda.\"",
      "Professional yapper.",
      "Is getting bullied by me.",
      "Currently pretending she's not short.",
      "Accidentally made someone fall for her again.",
      "Got to learn something from her bag of wisdom (I love listening to her).",
      "Probably wearing her Brown lipliner.",
      "Will somehow blame you.",
      "Listening to Chase Atlantic.",
      "Low battery. Still talking.",
      "Actually laughing.",
      "Currently making my day better without knowing it.",
      "Today's mood: ✨ rant mode on ✨",
      "Achievement unlocked: Made Aahan smile again.",
      "New side quest: Find another reel to send.",
      "Danger Level: Cute.",
      "Specs located. Vision still loading.",
      "One \"hmm\" away from starting another 9 hour-long call.",
      "Probably about to say, \"I like you.\"",
      "Being the smartest human",
      "Ash definitely agrees with me.",
      "Height: 4'6* (*according to everyone.)",
      "Probably laughing before finishing her own sentence.",
      "Warning: May randomly become adorable.",
      "Neurodivergent.",
    ],
    []
  );

  const [queue, setQueue] = useState<number[]>(() => shuffle(observations.length));
  const [current, setCurrent] = useState<number>(() => 0);
  const [tick, setTick] = useState(0);

  function shuffle(n: number) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const generate = () => {
    setQueue((q) => {
      let next = q.slice(1);
      if (next.length === 0) {
        next = shuffle(observations.length).filter((x) => x !== current);
        if (next.length === 0) next = shuffle(observations.length);
      }
      setCurrent(q[0] ?? 0);
      setTick((t) => t + 1);
      return next;
    });
  };

  return (
    <ChapterShell number={19} title="Random Pakeeza Generator" kicker="one click at a time">
      <Card className="text-center py-12">
        <div className="serif text-2xl md:text-3xl text-glow min-h-[3.5em] flex items-center justify-center px-4 leading-snug">
          <AnimatePresence mode="wait">
            <motion.span
              key={tick}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            >
              {observations[current]}
            </motion.span>
          </AnimatePresence>
        </div>
        <button
          onClick={generate}
          className="btn-glow btn-glow-hover px-7 py-2.5 rounded-full mt-8 serif tracking-wide"
        >
          Generate another →
        </button>
      </Card>
    </ChapterShell>
  );
}

/** ============ CHAPTER 20 — Happy Twentween ============ */
export function Chapter20({ onFinish }: { onFinish: () => void }) {
  const lines: { t: string; big?: boolean; italic?: boolean; small?: boolean; gap?: boolean }[] = [
    { t: "Well..." },
    { t: "That's it." },
    { t: "You officially reached the end.", italic: true },
    { t: "I don't really know if this is the coolest thing I've ever made..." },
    { t: "or the dumbest." },
    { t: "Probably both.", italic: true },
    { t: "But every chapter in here exists because you happened.", big: true },
    { t: "The calls." },
    { t: "The reels." },
    { t: "The yapping." },
    { t: "The bullying." },
    { t: "The voice notes." },
    { t: "Ash." },
    { t: "The height arguments." },
    { t: "The songs." },
    { t: "The million little moments that somehow became my favourite part of my day.", italic: true },
    { t: "I know we've only known each other for a little while..." },
    { t: "but you've somehow managed to make nine days feel like a whole lot more.", big: true },
    { t: "So..." },
    { t: "Happy Twentween, dummy.", big: true, italic: true },
    { t: "I genuinely hope this year gives you everything you've wanted." },
    { t: "More smiles." },
    { t: "More music." },
    { t: "More Ash." },
    { t: "More memories." },
    { t: "And hopefully..." },
    { t: "a few more chapters with me.", italic: true },
    { t: "♡", big: true },
    { t: "- Aahan", small: true },
  ];

  const [closing, setClosing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const music = useMusic();

  const closeMuseum = () => {
    if (closing) return;
    setClosing(true);

    // fade music
    const startVol = music.volume;
    const t0 = performance.now();
    const dur = 3200;
    const fade = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      music.setVolume(Math.max(0, startVol * (1 - p)));
      if (p < 1) requestAnimationFrame(fade);
    };
    requestAnimationFrame(fade);

    setTimeout(() => setShowMessage(true), 1600);
    setTimeout(() => setBlackout(true), 1600 + 4000 + 1200);
    setTimeout(() => {
      music.setPlaying(false);
      onFinish();
    }, 1600 + 4000 + 1200 + 1200);
  };

  return (
    <>
      <ChapterShell number={20} title="Happy Twentween, Pakeeza." kicker="the last chapter (for now)">
        <div className="space-y-5">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 1.1, delay: (i % 6) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              className={
                l.big
                  ? "serif text-glow text-2xl md:text-3xl leading-snug"
                  : l.italic
                  ? "serif italic text-glow text-xl md:text-2xl"
                  : l.small
                  ? "serif italic text-sm opacity-70 pt-4"
                  : "text-lg md:text-xl opacity-90"
              }
            >
              {l.t}
            </motion.p>
          ))}
        </div>
        <div className="pt-12">
          <button
            onClick={closeMuseum}
            disabled={closing}
            className="btn-glow btn-glow-hover px-8 py-3 rounded-full serif text-lg tracking-wide disabled:opacity-40"
          >
            Close Museum
          </button>
        </div>
      </ChapterShell>

      <AnimatePresence>
        {closing && (
          <motion.div
            key="closing-veil"
            className="fixed inset-0 z-[80] flex items-center justify-center pointer-events-none"
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: blackout ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.92)" }}
            transition={{ duration: blackout ? 1.2 : 3.2, ease: "easeInOut" }}
          >
            <AnimatePresence>
              {showMessage && !blackout && (
                <motion.div
                  key="final-msg"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
                  className="text-center px-6 space-y-5"
                >
                  <p className="serif text-glow text-2xl md:text-3xl">Thank you for visiting.</p>
                  <p className="serif italic text-lg md:text-xl opacity-85">See you in the next chapter.</p>
                  <p className="serif text-glow text-3xl">♡</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


export const CHAPTERS = [
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10,
  Chapter11,
  Chapter12,
  Chapter13,
  Chapter14,
  Chapter15,
  Chapter16,
  Chapter17,
  Chapter18,
  Chapter19,
];
