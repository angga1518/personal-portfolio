interface LuminousBlobProps {
  className: string
}

export default function LuminousBlob({ className }: LuminousBlobProps) {
  return <div className={`luminous-blob ${className}`}></div>
}
