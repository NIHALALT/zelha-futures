import {
  Users,
  Globe2,
  Shield,
  Network,
  CheckCircle,
} from "lucide-react";
import NajdiIcon from "@/components/decorative/NajdiIcon";

const trustPoints = [
  {
    icon: Users,
    title: "Deep GCC Understanding",
    description: "Deep understanding of GCC education systems and cultural expectations.",
  },
  {
    icon: Globe2,
    title: "Global Exposure",
    description: "Experienced counsellors with global exposure and international network.",
  },
  {
    icon: Shield,
    title: "Ethical Guidance",
    description: "Personalized, ethical, and transparent guidance for every student.",
  },
  {
    icon: Network,
    title: "Strong Network",
    description: "Strong network of universities worldwide across all major destinations.",
  },
];

const countries = [
  "Saudi Arabia",
  "UAE",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
            Why Families <span className="text-primary">Trust Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="text-center space-y-4 p-6"
            >
              <NajdiIcon
                icon={point.icon}
                size="lg"
                className="mx-auto"
              />
              <h3 className="text-lg font-semibold text-secondary-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* GCC Countries */}
        <div className="bg-background rounded-2xl p-8 shadow-sm">
          <p className="text-center text-muted-foreground mb-6">
            Supporting students across:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country) => (
              <div
                key={country}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
