import {
  StarFilled,
  HeartFilled,
  RetweetOutlined,
  CommentOutlined,
} from "@ant-design/icons";

export const TweetCard = ({ tweet }) => (
  <div
    className="tweet-card relative bg-[#0d0d0d] border border-white/[0.07]
               p-5 flex flex-col gap-3 group
               hover:border-[color:var(--color-accent)]/30
               transition-all duration-500"
    style={{ borderRadius: "2px", minWidth: "300px" }}
  >

    <div
      className="absolute top-0 left-0 right-0 h-[2px] origin-left
                 scale-x-0 group-hover:scale-x-100
                 transition-transform duration-500"
      style={{ backgroundColor: "var(--color-accent)" }}
    />

    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center
                     text-white font-black text-sm"
          style={{ backgroundColor: tweet.avatarColor }}
        >
          {tweet.avatar}
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-white text-sm font-bold">{tweet.user}</span>
            {tweet.verified && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#1d9bf0" />
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-white/30 text-xs">{tweet.handle}</span>
        </div>
      </div>
      {/* X logo */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" opacity="0.3">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.903-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </div>

    {/* Text */}
    <p className="text-white/80 text-sm leading-relaxed">{tweet.text}</p>

    {/* Flavor tag */}
    <span
      className="self-start text-[10px] tracking-widest px-2 py-1 border"
      style={{
        color: "var(--color-accent)",
        borderColor: "var(--color-accent)",
        backgroundColor: "color-mix(in srgb, var(--color-accent) 8%, transparent)",
      }}
    >
      {tweet.flavor.toUpperCase()}
    </span>

    {/* Footer */}
    <div className="flex items-center gap-5 pt-2 border-t border-white/[0.06]">
      {[
        { icon: <HeartFilled />,      val: tweet.likes     },
        { icon: <RetweetOutlined />,  val: tweet.retweets  },
        { icon: <CommentOutlined />,  val: tweet.comments  },
      ].map(({ icon, val }, i) => (
        <span key={i} className="flex items-center gap-1.5 text-white/30
                                  hover:text-[color:var(--color-accent)]
                                  transition-colors text-xs cursor-pointer">
          {icon} {val}
        </span>
      ))}
      <span className="ml-auto text-white/20 text-xs">{tweet.time}</span>
    </div>
  </div>
);

export const TikTokCard = ({ tok }) => (
  <div
    className="tiktok-card relative overflow-hidden flex-shrink-0
               w-[180px] h-[320px] group cursor-pointer"
    style={{ borderRadius: "4px", backgroundColor: tok.bg }}
  >
    {/* Fake video bg */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `radial-gradient(ellipse at 50% 60%, ${tok.accent} 0%, transparent 70%)`,
      }}
    />

    {/* Ghost logo watermark */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="text-7xl font-black opacity-10"
        style={{ fontFamily: "'Barlow Condensed', Impact, sans-serif", color: tok.accent }}
      >
        👻
      </span>
    </div>

    {/* Play button */}
    <div className="absolute inset-0 flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center
                   bg-white/10 backdrop-blur-sm border border-white/20"
      >
        <div className="w-0 h-0 ml-1"
             style={{
               borderTop: "8px solid transparent",
               borderBottom: "8px solid transparent",
               borderLeft: `14px solid ${tok.accent}`,
             }}
        />
      </div>
    </div>

    {/* Right side actions */}
    <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <HeartFilled style={{ color: tok.accent, fontSize: 20 }} />
        <span className="text-white/60 text-[10px]">{tok.likes}</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <CommentOutlined style={{ color: "white", fontSize: 18, opacity: 0.6 }} />
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-3
                    bg-gradient-to-t from-black to-transparent">
      <p className="text-white/90 text-[10px] font-bold mb-1">{tok.user}</p>
      <p className="text-white/50 text-[10px] leading-tight line-clamp-2">{tok.desc}</p>
      <div className="flex items-center gap-1 mt-2">
        <span style={{ color: tok.accent, fontSize: 10 }}>▶</span>
        <span className="text-white/30 text-[10px]">{tok.views} views</span>
      </div>
    </div>
  </div>
);

export const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <StarFilled
        key={i}
        style={{
          fontSize: 11,
          color: i <= count ? "var(--color-accent)" : "rgba(255,255,255,0.1)",
        }}
      />
    ))}
  </div>
);