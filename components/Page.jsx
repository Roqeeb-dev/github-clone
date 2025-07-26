import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";
import Button from "./Button";
import Section from "./Section";
import Robot from "../public/robot.png";
import BrandSection from "./BrandSection";
import DuolingoLogo from "../public/logo-duolingo.svg";
import GartnerLogo from "../public/logo-gartner.svg";
import WorkflowImage from "../public/workflow-image.webp";
import Article from "./Article";
import Link from "./Link";
import OpenAccordion from "./OpenAccordion";
import AccordionItem from "./AccordionItem";
import TickIcon from "../public/tick-image.png";
import AdvancedSecurityImage from "../public/github-advanced-security.webp";
import Div from "./Div";
import cartoon from "../public/cartoon.png";
import OctoInvadersImage from "../public/octoArcaDE.webp";
import NewEngine from "../public/New-engine.webp";
import Duck from "../public/Duck.png";
import Brands from "./Brands";
import figma from "../public/figma.svg";
import benz from "../public/mercedes-benz.svg";
import mercadoLibre from "../public/mercado-libre.svg";
import Hero from "./Hero";
import icons from "../public/icons.png";
import GithubLogo from "../public/github-logo.jpg";
import FooterLink from "./FooterLink";

export default function Page() {
  return (
    <main className="bg-[#0d1117] text-white font-[Segoe_Ui]">
      <Navbar />
      <Hero
        h1="Build and ship software on a single, collaborative platform"
        p="Join the world's most widely adopted AI-powered developer platform."
        btn="Try Github Copilot"
      />
      {/* This is where the video stays */}

      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="../public\hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="flex flex-col items-center justify-center my-5">
        <Button
          text="Code &darr;"
          className="px-6 py-2 my-5 rounded-3xl font-bold border-1 border-white w-[30%]"
        />
        <p className="text-gray-400 text-[18px] mx-14 text-center">
          Code quickly and more securely with GitHub Copilot embedded throughout
          your workflows.
        </p>
      </section>
      {/* Slider animation here */}
      <hr />
      <Section
        img={Robot}
        alt="Robot Image"
        h1="Accelerate Performance"
        p="With GitHub Copilot embedded throughout the platform, you can simplify your toolchain, automate tasks, and improve the developer experience."
      />
      <hr />
      <Article
        span="Work 55% faster. "
        text="Increase productivity with AI-powered coding assistance, including code
        completion, chat, and more"
        a="Explore Github Copilot &rarr;"
      />
      <hr />
      <BrandSection
        img={DuolingoLogo}
        alt="Duolingo Logo"
        p="Duolingo boosts developer speed by 25% with Github Copilot"
        a="Read Customer report >"
      />
      <hr />
      <BrandSection
        img={GartnerLogo}
        alt="Gartner Logo"
        p="2024 Gartner® Magic Quadrant™ for AI Code Assistants"
        a="Read Industry Report >"
      />
      <img src={WorkflowImage} alt="Workflow Image" />
      <OpenAccordion
        h2="Automate any Workflow"
        p="Optimize your process with simple and secured CI/CD"
        a="Discover Github Actions &rarr;"
      />
      <AccordionItem text="Get Up and running in seconds" />
      <AccordionItem text="Build on the Go" />
      <AccordionItem text="Integrate the tools you love" />
      <Section
        img={TickIcon}
        h1="Built-in application security where found means fixed"
        p="Use AI to find and fix vulnerabilities—freeing your teams to ship more secure software faster."
      />
      <img
        src={AdvancedSecurityImage}
        alt="Advanced Security Image"
        className="rounded-xl"
      />
      <Article
        span="Apply fixes in seconds. "
        text="Spend less time fixing vulnerabilities and more time building features with Copilot Autofix."
        a="Explore Github Advanced Security >"
      />
      <hr />
      <Div
        span="Solve Security debt. "
        text="Leverage AI-assisted security campaigns to reduce application vulnerabilities and zero-day attacks."
        a="Discover Security Campaigns >"
      />
      {/* The solve security campaign image goes here */}
      <Div
        span="Dependencies you can depend on. "
        text="Update vulnerable dependencies with supported fixes for breaking changes."
        a="Learn about Dependabot >"
      />
      {/* The Dependencies image goes here too */}
      <Div
        span="Your secrets, your business: protected, "
        text="Detect, prevent, and remediate leaked secrets across your organization."
        a="Read about Secret scanning >"
      />
      {/* The secret scanning image goes here */}
      <hr />
      <section className="p-8 h-[30vh]">
        <h2 className="font-bold text-4xl">7x Faster</h2>
        <p className="text-gray-400 text-[18px]">
          vulnerability fixes with github
        </p>
      </section>
      <hr />
      <section className="p-8 h-[30vh]">
        <h2 className="font-bold text-4xl">90% Coverage</h2>
        <p className="text-gray-400 text-[18px]">
          of alert types in
          <a
            href="#"
            className="ml-1 text-[#79c0ff] font-[400] text-xl my-5 hover:underline"
          >
            all supported languages with Copilot Autofix.
          </a>
        </p>
      </section>
      <Section
        img={cartoon}
        alt="Cartoon image"
        h1="Work together, achieve more"
        p="Collaborate with your teams, use management tools that sync with your projects, and code from anywhere—all on a single, integrated platform."
      />
      <img
        src={OctoInvadersImage}
        alt="Octo Arcade Invader image"
        className="my-4"
      />
      <Article
        span="Your workflows, your way. "
        text="Plan effectively with an adaptable spreadsheet that syncs with your work."
        a="Jump into Github Projects >"
      />
      <section className="p-7">
        <p className="text-[#1a7f37] text-6xl">“</p>
        <p className="font-bold text-xl">
          It helps us onboard new software engineers and get them productive
          right away. We have all our source code, issues, and pull requests in
          one place... GitHub is a complete platform that frees us from menial
          tasks and enables us to do our best work.
        </p>
        <p className="font-bold mt-6">Fabian Faulhaber</p>
        <p className="text-gray-400 font_[monospace]">
          Application manager at Mercedes-Benz
        </p>
      </section>
      <img src={NewEngine} alt="New Engine image" />
      <OpenAccordion
        h2="Keep track of your tasks"
        p="Create issues and manage projects with tools that adapt to your code."
        a="Explore Github issues >"
      />
      <AccordionItem text="Share ideas and ask questions" />
      <AccordionItem text="Review Code changes together" />
      <AccordionItem text="Fund Open source projects" />

      <article className="h-[60vh] px-6 flex flex-col items-center justify-center space-y-3">
        <img src={Duck} alt="Duck image" />
        <p className="font-bold text-4xl text-gray-400 text-center">
          <span className="text-white">From Startups to Enterprise, </span>
          GitHub scales with teams of any size in any industry.
        </p>
      </article>
      <div className="mx-7 my-3 border-1 py-2 px-3 rounded-4xl flex items-center space-x-3">
        <button className="border-1 py-2 px-4 rounded-4xl font-bold bg-[#24292fe6]">
          By industry
        </button>
        <button className="font-bold hover:bg-[#24292fe6] py-2 px-4 rounded-4xl">
          By size
        </button>
        <button className="font-bold hover:bg-[#24292fe6] py-2 px-4 rounded-4xl">
          By use case
        </button>
      </div>
      <hr />
      <Brands
        img={figma}
        alt="Figma logo"
        grayText="Technology"
        boldText="Figma streamlines development and strengthens security."
      />
      <Brands
        img={benz}
        alt="Benz logo"
        grayText="Automotive"
        boldText="Mercedes Benz standardizes source code and automates onboarding"
      />
      <Brands
        img={mercadoLibre}
        alt="Mercado Libre"
        grayText="Financial services"
        boldText="Mercado Libre cuts coding time by 50%"
      />
      <Link a="Explore customer stories >" />
      <hr />
      <Link a="View all solutions &rarr;" />

      <section className="px-6 flex flex-col items-center justify-center space-y-3">
        <img src={icons} alt="Icons image" />
        <h1 className="font-bold text-4xl text-center my-3">
          Millions of developers and businesses call Github home
        </h1>
        <p className="text-center text-gray-400 text-[17px] px-8 my-3">
          Whether you’re scaling your development process or just learning how
          to code, GitHub is where you belong. Join the world’s most widely
          adopted AI-powered developer platform to build the technologies that
          redefine what’s possible
        </p>
      </section>

      <SignUpForm />

      <button className="p-2 w-[90%] mx-5 rounded-md font-bold border-2 border-white">
        Try Github Copilot
      </button>

      <ol>
        <li className="px-8 my-3">
          <a href="#" className="text-[#79c0ff] font-[400] hover:underline">
            Survey: The AI wave continues to grow on software development teams{" "}
          </a>
        </li>
        <li>
          <p className="text-gray-400 text-[17px] px-8">
            This 7X times factor is based on data from the industry’s longest
            running analysis of fix rates Veracode State of Software Security
            2023, which cites the average time to fix 50% of flaws as 198 days
            vs. GitHub’s fix rates of 72% of flaws with in 28 days which is at a
            minimum of 7X faster when compared.
          </p>
        </li>
      </ol>

      <section className="px-5">
        <div className="flex items-center space-x-1 my-5 mt-20">
          <img
            src={GithubLogo}
            alt="Github Logo"
            className="w-[40px] rounded-[50%]"
          />
          <p className="font-bold text-2xl">Github</p>
        </div>
        <p className="text-[14px] font-bold">
          Subscribe to our developer newsletter
        </p>
        <p className="text-[14px] text-gray-400">
          Get tips, technical guides, and best practices. Twice a month.
        </p>
        <Button
          text="Subscribe"
          className="text-white my-5 px-5 py-2 border-1 border-white rounded-md font-bold"
        />
      </section>

      <footer className="px-4">
        <section className="my-5 flex justify-start space-x-11">
          <div>
            <FooterLink
              array={[
                "Product",
                "Features",
                "Enterprise",
                "Copilot",
                "AI",
                "Security",
                "Pricing",
                "Teams",
                "Resources",
                "Roadmap",
                "Compare Github",
              ]}
            />
          </div>
          <div>
            <FooterLink
              array={[
                "Platform",
                "Developer API",
                "Partners",
                "Education",
                "Github CLI",
                "Github Desktop",
                "Github Mobile",
              ]}
            />
          </div>
        </section>
        <section className="my-5 flex justify-start space-x-11">
          <div>
            <FooterLink
              array={[
                "Support",
                "Docs",
                "Community Forum",
                "Professional services",
                "Premium support",
                "Skills",
                "Status",
                "Contact Github",
              ]}
            />
          </div>
          <div>
            <FooterLink
              array={[
                "Company",
                "About",
                "Why Github",
                "Customer stories",
                "Blog",
                "The ReadME project",
                "Careers",
                "Newsroom",
                "Inclusion",
                "Social impact",
                "Shop",
              ]}
            />
          </div>
        </section>
      </footer>
    </main>
  );
}
