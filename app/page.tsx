import AnimatedText from '@/components/AnimatedText'

export default function LandingPage() {
  return (
    <div>
      <AnimatedText
        text={[`Hello, I'm Alex,`, 'a frontend developer', '']}
        className="font-semibold text-8xl"
      />
    </div>
  )
}
