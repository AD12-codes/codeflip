import {
  IconCode,
  IconUsersGroup,
  IconDeviceLaptop,
  IconCloudComputing,
  IconBulb,
  IconTestPipe,
  IconChartBar,
  IconShieldCheck,
  IconPhone,
  IconMail,
  IconMapPin,
  IconArrowUp,
} from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: IconCode,
    title: "Custom Software Development",
    description:
      "End-to-end software development tailored to your business needs — from web and mobile applications to enterprise-grade platforms.",
  },
  {
    icon: IconUsersGroup,
    title: "Product Ownership & Management",
    description:
      "Experienced product owners who drive your product vision, manage backlogs, and ensure delivery aligns with business goals.",
  },
  {
    icon: IconBulb,
    title: "Product Consultancy",
    description:
      "Strategic product advice to help you define roadmaps, validate ideas, and build products that resonate with your market.",
  },
  {
    icon: IconDeviceLaptop,
    title: "IT Staff Augmentation",
    description:
      "Scale your engineering team on-demand with skilled developers, designers, and architects who integrate seamlessly.",
  },
  {
    icon: IconCloudComputing,
    title: "Cloud & DevOps Consulting",
    description:
      "Modernize your infrastructure with cloud migration, CI/CD pipelines, and DevOps best practices for reliable deployments.",
  },
  {
    icon: IconTestPipe,
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive QA strategies including automated testing, performance testing, and security audits to ship with confidence.",
  },
  {
    icon: IconChartBar,
    title: "Technical Project Management",
    description:
      "Agile project management to keep your software initiatives on track, on budget, and aligned with stakeholder expectations.",
  },
  {
    icon: IconShieldCheck,
    title: "Architecture & Code Review",
    description:
      "Expert review of your system architecture and codebase to identify bottlenecks, improve performance, and ensure scalability.",
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            <span className="text-primary">Code</span>Flip LLP
          </h1>
          <nav className="hidden gap-6 sm:flex">
            <a
              href="#services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            IT Consultancy &middot; Software Development
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Building software that
            <br />
            <span className="text-primary">drives your business</span> forward.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            CodeFlip LLP is an IT consultancy delivering end-to-end software
            development, product ownership, and technical consulting services to
            clients across the globe.
          </p>
          <div className="mt-8 flex gap-3">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Services Section */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Services We Offer
          </h2>
          <p className="mt-4 text-muted-foreground">
            From ideation to deployment and beyond — we partner with businesses
            worldwide to deliver high-quality software solutions and expert
            consultancy.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon size={22} stroke={1.5} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Reach Out
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind or need expert IT consultancy? We'd love to
            hear from you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Phone */}
          <Card className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <IconPhone size={22} stroke={1.5} />
              </div>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+918884567675"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                +91 8884567675
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <IconMail size={22} stroke={1.5} />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:business@code-flip.com"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                business@code-flip.com
              </a>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <IconMapPin size={22} stroke={1.5} />
              </div>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                CodeFlip LLP (AAV-6823)
                <br />
                2150, Sudama Nagar
                <br />
                Indore, MP, India 452001
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeFlip LLP. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <IconArrowUp size={16} stroke={2} />
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default App;
