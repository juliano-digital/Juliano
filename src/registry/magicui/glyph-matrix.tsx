export function GlyphMatrix() {
  const binaryCharacters = ['0', '1']
  const columns = Array.from({ length: 32 }, (_, index) => index)
  const rows = Array.from({ length: 30 }, (_, index) => index)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '380px',
        borderRadius: '18px',
        overflow: 'hidden',
        background: '#d4e9ff',
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '0',
          overflow: 'hidden',
          background: '#d4e9ff',
          border: '0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            background: '#d4e9ff',
          }}
        >
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              style={{
                position: 'absolute',
                left: `${(column / columns.length) * 100}%`,
                top: '-30%',
                width: '16px',
                height: '130%',
                animation: `glyphRain ${3 + ((columnIndex % 5) * 0.8)}s linear infinite`,
                animationDelay: `${(columnIndex % 8) * 0.35}s`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '7px',
              }}
            >
              {rows.map((row, rowIndex) => {
                const character = binaryCharacters[(rowIndex * 5 + columnIndex * 3 + row) % binaryCharacters.length]
                const highlighted = (rowIndex + columnIndex) % 4 === 0
                return (
                  <span
                    key={`${columnIndex}-${rowIndex}`}
                    style={{
                      display: 'inline-block',
                      color: highlighted ? '#14532d' : '#166534',
                      opacity: highlighted ? 1 : 0.78,
                      textShadow: '0 0 4px rgba(20, 83, 45, 0.2)',
                      fontSize: highlighted ? '13px' : '12px',
                      fontWeight: highlighted ? 700 : 600,
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                      whiteSpace: 'nowrap',
                      animation: `characterDrop ${2.6 + ((columnIndex + rowIndex) % 5) * 0.35}s linear infinite`,
                      animationDelay: `${((columnIndex * 3 + rowIndex) % 12) * 0.18}s`,
                    }}
                  >
                    {character}
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes glyphRain {
          0% {
            transform: translateY(-20%) scaleY(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(120%) scaleY(1.08);
            opacity: 0;
          }
        }

        @keyframes characterDrop {
          0%, 12% {
            transform: translateY(-18px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(18px);
            opacity: 0.55;
          }
        }
      `}</style>
    </div>
  )
}
