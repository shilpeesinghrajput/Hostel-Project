// Map.jsx
const Heading = ({header,title , classname}) => {
  return (
    <div className={classname}>
      <div className="text-center">
        <div className="mb-[3rem]">
        <h2 className="text-[60px] sansita-bold sm:text-4xl md:text-[80px]   text-[#fd7444]">{header}</h2>
       
      </div>
      <div>
      <h3 className="text-[#928f88] oswalds tracking-[4px] mb-4 text-[13px]" >{title}</h3>
      </div>
      </div>

    </div>
  );
};

export default Heading;
