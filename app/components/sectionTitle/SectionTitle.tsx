import Icon from "../icon/Icon";

type sectionTitleProps = {
  title?: string;
  href?: string;
};

function SectionTitle({ title }: sectionTitleProps) {
  return (
    <div className="flex mt-4 justify-between items-center mx-5 mt-3 text-[#355E3B]">
      <h1 className="font-bold text-xl whitespace-nowrap">{title}</h1>
      <div className="h-0.5 opacity-50 flex-1 mx-4 bg-[#355E3B]"></div>
      <Icon
        path="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
        size={30}
        className="hover:text-[#C8E6C9] cursor-pointer shrink-0"
      />
    </div>
  );
}

export default SectionTitle;
