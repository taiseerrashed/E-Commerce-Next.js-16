import Image from "next/image";

interface IAuthCardWrapperProps {
  title: string;
  des: string;
  children: React.ReactNode;
}
const AuthCardWrapper = ({ des, children, title }: IAuthCardWrapperProps) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex items-center justify-center">
        <Image src="/images/en-logo.png" alt="ShopMart Logo" width={200} height={50} priority className="object-contain" />
      </div>
      <div className="bg-dark-background/90 w-[95%] mx-auto md:w-125 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-6  p-5 sm:px-10 ">
        <div className="space-y-2 text-center">
          <h1 className="font-semibold text-3xl text-secondary">{title}</h1>
          <p className="text-secondary-foreground">{des}</p>
        </div>
        <>{children}</>
      </div>
    </div>
  );
};
export default AuthCardWrapper;