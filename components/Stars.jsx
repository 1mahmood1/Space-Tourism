
function Stars({starsNum}) {
  const stars = Array.from({ length: starsNum }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 2,         
    twinkle: Math.random() * 3 + 3,        
    delay: Math.random() * 2 + 1,
  }))

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-[calc(100%+80px)] animate-drift">
        {stars.map(s => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              '--twinkle-duration': `${s.twinkle}s`,
              animationDelay: `-${s.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Stars