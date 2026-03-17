import React from 'react';
import { motion } from 'motion/react';

interface StoryViewProps {
  onTermClick: (id: string) => void;
}

export const StoryView: React.FC<StoryViewProps> = ({ onTermClick }) => {
  const Link = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <button
      onClick={() => onTermClick(id)}
      className="group relative inline-block px-1 -mx-1 text-[#F27D26] border-b border-[#F27D26]/30 hover:bg-[#F27D26]/10 hover:border-[#F27D26] transition-all cursor-pointer font-medium"
    >
      {children}
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-[#F27D26] text-black px-1 leading-none py-0.5 pointer-events-none">
        ID:{id.slice(0, 4).toUpperCase()}
      </span>
    </button>
  );

  const ScanIndicator = () => (
    <div className="flex items-center gap-2 mb-4 opacity-40">
      <div className="w-1 h-1 bg-[#F27D26] animate-ping" />
      <span className="text-[8px] font-mono uppercase tracking-widest">Scanning Segment...</span>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono mb-4 block">Narrative Process Analysis</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-6 leading-[0.9]">
          The Load-Bearing Man
        </h1>
        <p className="text-white/50 font-mono text-xs uppercase tracking-widest">A Story of <Link id="social-infrastructure">Social Infrastructure</Link></p>
      </motion.header>

      <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-white/80 font-serif">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">Chapter One: What the Poster Doesn\'t Show</h3>
          <p>
            The California coast they <Link id="narrative-framework">sell in airports</Link> is technically real. Marcus had seen it once. Back when airports were places he moved through instead of places he sat outside watching other people move through. Turquoise water. The pier stretching polite into the horizon. Some blonde in a sundress laughing into the wind like rent didn\'t exist. Sky that perfect Photoshop blue. Now he was riding through the actual version. Same coastline. <Link id="truth-tracking">Different truth</Link>.
          </p>
          <p>
            <Link id="time-perception">Sleeping outside changes your relationship with time</Link>, and through time, your relationship with everything else. People with keys think the city has two modes: open and closed. Daytime commerce, nighttime pause. They treat night as the intermission where you wait indoors until <Link id="chrono-normativity">life starts again</Link>. But when you sleep outside, the intermission is the real show. The city at 2 a.m. is a completely different animal.
          </p>
          <p>
            When you live outside you see all of it. No curtain. No edit. Just the <Link id="systems-thinking">machine running raw</Link>, every gear visible, every mechanism doing its actual work without the casing on. You can’t unsee it. That’s the thing. Marcus had tried, early on, to sort the city into the real version and the <Link id="performance-of-everyday-life">performance version</Link>, like he could decide which one was true. He’d stopped trying. Both were true. Both versions ran simultaneously like two films projected onto the same screen. You could only see both if you were <Link id="liminal-space">outside the theater</Link>.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 border-y border-white/5"
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">Chapter Two: The Poster City and Its Keepers</h3>
          <p>
            At 9 a.m. Marcus rolled into a farmers market that looked like a goddamn <Link id="curated-authenticity">lifestyle magazine editorial meeting</Link> that had gotten out of hand and started growing vegetables. Heirloom tomatoes in colors that shouldn’t exist. Lavender honey. Cold brew in glass jars with little chalkboard signs. A guy playing acoustic guitar near the entrance—soft fingerpicking drifting through the air like the morning had hired <Link id="mood-architecting">background music</Link> to make sure nobody got too reflective.
          </p>
          <p>
            A woman in two-hundred-dollar yoga gear noticed him noticing. Her body shifted half an inch. Tiny movement. Subtle. Smooth. Two steps sideways with the fluid naturalness of someone who has practiced—has genuinely practiced—moving away from <Link id="threat-assessment">unexpected variables</Link> without appearing to move away from unexpected variables. The <Link id="atmospheric-intelligence">universal nonverbal</Link> for: unexpected variable detected, adjusting position, nothing to see here. She didn\'t glare. Didn\'t say anything. Didn\'t make it a thing. That was the sophistication of it. <Link id="alt-text">She made it nothing</Link>, which is how you make it stick. If Marcus had his notebook out he would have written: Avoidance, Level: Olympic.
          </p>
           <p>
            Two blocks away a bar let out its closing crowd into the street. Different population than the 9 a.m. market. Looser. Drunker. <Link id="in-vino-veritas">Honest in the way alcohol sometimes makes people honest</Link>—the filters disengaged, everything slightly more visible than it would be in daylight. A couple fought and made up in four minutes flat—the full arc, fury to terror to relief, compressed into a <Link id="micro-narrative">sidewalk soap opera</Link> by whatever they\'d been drinking. Three guys stood outside a closed restaurant debating late-night tacos like the future of the republic depended on the decision. Marcus knew the taqueria they eventually picked. He could have told them. He didn\'t.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">Chapter Three: What He Was For</h3>
          <p>
            The taqueria in the next town opened at 7 a.m. because 7 a.m. tacos are not a lifestyle choice. They\'re for the <Link id="labor-and-value">overnight shift workers</Link> whose bodies have stopped respecting clocks. For the people whose schedules bent the architecture of the day into something the <Link id="economic-spectacle">brunch economy</Link> doesn\'t recognize. For the people who were up at 4 and haven\'t decided whether to sleep or keep going.
          </p>
          <p>
            Two guys at the next table were deep in something. Not a casual disagreement. Something that had been cooking for weeks, that had accumulated history and grievance, that was using this particular morning as today\'s venue the way long arguments use whatever surface is available. One had neck tattoos Marcus had learned to read the way you learn to read weather—as information about where you are, what the pressure is, which direction things might move. The other had the exhaustion of a man who\'d been orbiting that world without full membership in it. That\'s its own complicated country. Costs a lot to <Link id="code-switching">maintain the distance</Link>.
          </p>
          <p>
            What he’d just watched was not random. It was not personal. It was structural. Two people who could not easily agree about anything they actually cared about had found <Link id="consensus-technology">something they could agree about</Link> without negotiating any of their real disagreements. <Link id="zero-transaction-cost">Zero cost</Link>. No concession from either side. Pure consensus, generated by the presence of a third variable. He was the variable. The mechanism had been operating for days, in different forms, at different intensities. The micro-adjustment at the farmers market. The slight reconfiguration of attention at the gas station. The conversations that shifted when he sat down, the rooms that reorganized around his presence, the way groups that had nothing in common briefly had him in common. He wasn’t the cause of their tensions. He was the <Link id="social-oxygen">solution to them</Link>. Temporary. Low-cost. Available. The polished city needs a villain. Somebody the system can point at so everybody else gets to feel normal. So the farmers market stays pure. So the argument at the taco table gets a momentary reprieve. So people can maintain the story they\'re selling themselves about what kind of place this is and who belongs in it. Marcus had slept on their sidewalks. He’d seen the coyotes and the crying bankers and the midnight pacers and the kids in doorways. He’d watched the 3 a.m. city running its actual operations. He held the unedited version in his head and it could not be taken back out. Once you’ve seen the whole machine, you become inconvenient. That\'s the function he’d been serving without being asked. Not threat. <Link id="social-infrastructure">Infrastructure</Link>. The thing the architecture needed to stand.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 border-y border-white/5"
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">Chapter Four: The Education of the Outside</h3>
          <p>
            By the time he hit the next stretch of coast Marcus had been working out a question for forty miles: Not what had been done to him. What the position had given him. Because it had given him something. He wasn’t being sentimental about it. He wasn’t performing gratitude for adversity. He was trying to be accurate, which meant acknowledging both the cost and the <Link id="experiential-knowledge">curriculum</Link>. The curriculum was this: he had been given access to the city that the city didn’t consent to. Housed people experience the city the way the city wants to be experienced—<Link id="urban-planning">curated, managed</Link>, presenting its better version during the hours it keeps available for public inspection. He had experienced the city the way you experience a person when they don’t know you’re in the room: the <Link id="backstage-behavior">dropped performance</Link>, the private negotiation, the actual face rather than the presented one.
          </p>
          <p>
            The witness position wasn’t comfortable. Marcus was not recommending it. But it was a position, and it had epistemological consequences—consequences about what you knew and couldn’t un-know and couldn’t be argued out of. That last part was the problem. You could challenge someone’s opinion. You could challenge their inference. You could challenge their analysis. You couldn’t challenge what they’d watched with their own eyes from twenty feet away in a sleeping bag. <Link id="embodied-knowledge">Testimony is harder to dismiss than argument</Link>. The city had given him testimony by accident, just by running itself while he was present, and that testimony lived in him now and could not be extracted. A man who has seen the whole system is inconvenient not because he is dangerous but because he is a witness. You cannot unwitness something. You can only try to <Link id="soul-scrubbing">discredit the witness</Link>. Marcus understood, somewhere on that coastal highway, that the <Link id="folk-devil">folk devil</Link> function was not only about producing cohesion in communities that had run out of other cohesion mechanisms. It was also about <Link id="acoustic-containment">controlling the narrative</Link> of what the city was and who got to describe it. The outsider carried the unedited version, and the city’s preferred version required the outsider to be <Link id="other-coding">illegible</Link>—to be the problem, the instability, the thing everyone agreed was not to be taken seriously—so that the unedited version couldn’t circulate with any authority. The discrediting was architectural. Not incidental.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ScanIndicator />
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#F27D26] mb-6 font-mono">Chapter Five: The City at Night Tells the Truth</h3>
          <p>
            He reached San Francisco at dusk, which was the best possible time to reach it. The light does a specific thing on the California coast in the evening. Goes gold, then amber, then a color that doesn’t exist in any language Marcus knew—some threshold frequency between orange and disappearance. Fog sliding in under the bridge. The towers catching the last light like they were holding onto it on purpose. From a car it looks cinematic. From a bike <Link id="phenomenology">you’re inside the light</Link>, not watching it. That’s the difference. Eleven days of coast had given him a lot of things from the inside.
          </p>
          <p>
            "That\'s what they\'re afraid of," the man said. Marcus looked at him. "That you can see that." He was quiet a moment. "Man who sees the whole system—he\'s inconvenient. So they <Link id="folk-devil">make him the problem</Link>. Easier than letting him describe what he\'s seen." He said it the way you say something you worked out a long time ago and haven\'t needed to revise since. Then he stood, unhurried, and walked in the direction of the camp.
          </p>
          <p>
            Marcus watched him go. The bridge sat in the fog. The city sat under it, running its nightly operations in all registers simultaneously—poster version and real version and the version that only exists when no one is managing it. Beautiful and ridiculous and true. All at once. Somewhere a siren moved through several streets and faded. Someone laughed in the distance, the laugh carrying further than they’d intended in the <Link id="soundscape">night air</Link>. Marcus lay back on the concrete ledge. He thought: I have seen the whole machine. He thought: eso no lo pueden perdonar. That’s the one thing they can’t forgive. Some communities carry their weight on bridges and buildings. Others carry it on people. The <Link id="social-infrastructure">load-bearing man</Link> didn’t volunteer for the position. The architecture was built around him anyway. He closed his eyes. And slept.
          </p>
        </motion.section>
      </div>

      <footer className="mt-32 pt-12 border-t border-white/10 text-center">
        <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest">
          End of Narrative • Click highlighted terms for forensic breakdown
        </p>
      </footer>
    </div>
  );
};
