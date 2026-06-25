interface IPageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  rightContent?: React.ReactNode;
}
const PageHeader = ({
  label,
  title,
  description,
  rightContent,
}: IPageHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {label && (
          <span className="text-sm font-semibold text-btn-color">{label}</span>
        )}

        <h1 className="mt-2 text-3xl font-bold text-gray-950">{title}</h1>

        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
      </div>

      {rightContent && <div>{rightContent}</div>}
    </div>
  );
};

export default PageHeader;
