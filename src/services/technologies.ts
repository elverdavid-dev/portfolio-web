import type { ImageMetadata } from "astro"
import NextjsLogo from '@/assets/logos/next.svg'
import AstrojsLogo from '@/assets/logos/astro.svg'
import ReactjsLogo from '@/assets/logos/react.svg'
import TailwindLogo from '@/assets/logos/tailwind.svg'
import TypescriptLogo from '@/assets/logos/typescript.svg'
import NestjsLogo from '@/assets/logos/nestjs.svg'

interface Technologies {
  name: string
  logo: ImageMetadata
}

export const technologies: Technologies[] = [
  {
    name: "Next js",
    logo: NextjsLogo,
  },
  {
    name: 'Nest js',
    logo: NestjsLogo,
  },
  {
    name: "Tailwind css",
    logo: TailwindLogo
  },
  {
    name: 'Typescript',
    logo: TypescriptLogo,
  },
  {
    name: "Astro js",
    logo: AstrojsLogo
  },
  {
    name: "React js",
    logo: ReactjsLogo
  },
]