interface ISectionHeaderProps {
  title: string;
  subtitle: string;
}
const SectionHeader = ({ title, subtitle }: ISectionHeaderProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
