import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Mail, Phone } from "lucide-react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

interface SettingsJson {
  phone: string
  email: string
  logo: any
  site_name: string
}

interface IndexPageProps extends PageProps {
  data: {
    settingsJson: SettingsJson
  }
}

const Button = ({
  className,
  children,
  variant,
}: {
  className: string
  children: React.ReactNode
  variant?: "outline"
}) => {
  return <button className={className}>{children}</button>
}

const CardContent = ({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) => {
  return <div className={className}>{children}</div>
}

const Card = ({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <div className={className}>{children}</div>
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("🚀 ~ data:", data)
  const { site_name, phone, email, logo } = data.settingsJson
  console.log("🚀 ~ logo:", logo)
  const logoImage = getImage("static/img/logo.png" as any)
  console.log("🚀 ~ logoImage:", logoImage)

  if (!logoImage) {
    console.warn("Logo image not found, using default logo.")
  }
  const newLogo = `..${logo}`

  console.log("🚀 ~ newLogo:", newLogo, "/img/logo.png")
  return (
    <div className="min-h-screen bg-grey-500 text-gray-900">
      <header className="px-20 py-2 flex justify-between flex-row items-center">
        <div>
          {logo ? (
            <img src={newLogo} alt={site_name} />
          ) : (
            // <StaticImage src={newLogo} alt={site_name} />
            <StaticImage src="../images/logo.png" alt="logo" />
          )}
        </div>
        <nav>
          <ul className="flex flex-row gap-4">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">
          Empowering Businesses with SharePoint & Power Platform
        </h1>
        <p className="mt-4 text-lg">
          Custom solutions for enterprise efficiency and digital transformation.
        </p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">
          Get in Touch
        </Button>
      </section>

      {/* About Us */}
      <section className="py-16 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">About Skillwill</h2>
        <p className="mt-4 text-lg">
          We specialize in building custom SharePoint and Power Platform
          solutions to streamline your business processes.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-8">
        <h2 className="text-3xl font-semibold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">SharePoint Development</h3>
              <p className="mt-2">Intranets, workflows, document management.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">Power Platform Solutions</h3>
              <p className="mt-2">Power Apps, Power Automate, Power BI.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">Consulting & Integration</h3>
              <p className="mt-2">
                Custom solutions, system integration, process automation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 px-8 text-center bg-gray-200">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-4 text-lg">
          Get in touch with us for your next project.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <Button variant="outline" className="flex items-center gap-2">
            <Mail /> {email}
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Phone /> {phone}
          </Button>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query {
    settingsJson {
      phone
      email
      logo
      site_name
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
