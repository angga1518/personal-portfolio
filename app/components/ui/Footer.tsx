interface FooterProps {
  name: string
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-400">© {name} {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
