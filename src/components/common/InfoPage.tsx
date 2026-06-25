import { ReactNode } from "react";

interface InfoPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

const InfoPage = ({
  title,
  description,
  children,
}: InfoPageProps) => {
  return (
    <section className="container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">
          {title}
        </h1>

        <p className="text-muted-foreground mb-8">
          {description}
        </p>

        <div className="space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default InfoPage;