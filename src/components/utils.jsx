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

    {/* header */}
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
                <path
                  d="M9 12l2 2 4-4"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span className="text-white/30 text-xs">{tweet.handle}</span>
        </div>
      </div>
      {/* X logo */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="white"
        opacity="0.3"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.903-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
        backgroundColor:
          "color-mix(in srgb, var(--color-accent) 8%, transparent)",
      }}
    >
      {tweet.flavor.toUpperCase()}
    </span>

    {/* Footer */}
    <div className="flex items-center gap-5 pt-2 border-t border-white/[0.06]">
      {[
        { icon: <HeartFilled />, val: tweet.likes },
        { icon: <RetweetOutlined />, val: tweet.retweets },
        { icon: <CommentOutlined />, val: tweet.comments },
      ].map(({ icon, val }, i) => (
        <span
          key={i}
          className="flex items-center gap-1.5 text-white/30
                                  hover:text-[color:var(--color-accent)]
                                  transition-colors text-xs cursor-pointer"
        >
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
        style={{
          fontFamily: "'Barlow Condensed', Impact, sans-serif",
          color: tok.accent,
        }}
      >
        👻
      </span>
    </div>

    {/* Play button */}
    <div
      className="absolute inset-0 flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300"
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center
                   bg-white/10 backdrop-blur-sm border border-white/20"
      >
        <div
          className="w-0 h-0 ml-1"
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
        <CommentOutlined
          style={{ color: "white", fontSize: 18, opacity: 0.6 }}
        />
      </div>
    </div>

    <div
      className="absolute bottom-0 left-0 right-0 p-3
                    bg-gradient-to-t from-black to-transparent"
    >
      <p className="text-white/90 text-[10px] font-bold mb-1">{tok.user}</p>
      <p className="text-white/50 text-[10px] leading-tight line-clamp-2">
        {tok.desc}
      </p>
      <div className="flex items-center gap-1 mt-2">
        <span style={{ color: tok.accent, fontSize: 10 }}>▶</span>
        <span className="text-white/30 text-[10px]">{tok.views} views</span>
      </div>
    </div>
  </div>
);

export const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
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

export const ImageCard = ({
  src,
  alt,
  label,
  description,
  badge,
  className,
  extraClass,
}) => (
  <div
    className={`gallery-img ${extraClass} relative overflow-hidden rounded-[2rem] group ${className}`}
  >
    <span
      className="img-badge absolute top-5 left-5 z-20 w-10 h-10
                   rounded-full flex items-center justify-center
                   text-xs font-black border"
      style={{
        background: "rgba(0,0,0,0.6)",
        borderColor: "var(--color-accent)",
        color: "var(--color-accent)",
        backdropFilter: "blur(8px)",
      }}
    >
      {badge}
    </span>

    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover scale-110
                   transition-transform duration-[1200ms] group-hover:scale-100"
    />

    <div
      className="absolute inset-0 bg-gradient-to-t from-black/95
                      via-black/40 to-transparent opacity-60
                      group-hover:opacity-100 transition-opacity duration-700"
    />

    {/* scanlines */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 pointer-events-none"
      style={{
        backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px
          )`,
      }}
    />

    {/* glow border */}
    <div
      className="absolute inset-0 rounded-[2rem] opacity-0
                   group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ boxShadow: "inset 0 0 0 1.5px var(--color-accent)" }}
    />

    <div
      className="absolute bottom-0 left-0 right-0 p-8 md:p-10
                      translate-y-8 opacity-0 group-hover:translate-y-0
                      group-hover:opacity-100 transition-all duration-700 ease-out"
    >
      <div
        className="w-12 h-1 mb-6"
        style={{ background: "var(--color-accent)" }}
      />
      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4">
        {label.split(" ").map((word, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} style={{ color: "var(--color-accent)" }}>
              {word}
            </span>
          ) : (
            <span key={i} className="text-white">
              {word}{" "}
            </span>
          ),
        )}
      </h3>
      <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-4">
        {description}
      </p>
      <button
        className="text-xs font-black uppercase tracking-[2px] text-white
                           opacity-60 hover:opacity-100 transition-opacity duration-300
                           flex items-center gap-2"
      >
        Explore Story <span className="w-4 h-[1px] bg-white" />
      </button>
    </div>

    <div
      className="absolute bottom-0 left-0 h-[4px] w-0
                   group-hover:w-full transition-all duration-700 ease-out"
      style={{ background: "var(--color-accent)" }}
    />
  </div>
);
