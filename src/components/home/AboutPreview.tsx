import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">
            About Us
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Navigating Choices with{" "}
            <span className="text-primary">Clarity & Confidence</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Students across the GCC face a world full of opportunities — and
            choices. Zelha Education Consultancy helps learners navigate these
            choices with clarity, confidence, and cultural understanding.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            With deep regional insight and global exposure, our team provides
            personalized guidance that respects family expectations while
            opening doors to international opportunities.
          </p>

          <Link to="/about">
            <Button variant="outline" size="lg" className="group mt-4">
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
