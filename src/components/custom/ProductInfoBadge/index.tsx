export default function ProductInfoBadge({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <div className="flex items-center space-x-2 rounded-full pl-3 pr-1 py-1 border-2 border-border text-left max-w-[350px] bg-background drop-shadow-sm">
      <h2 className="font-semibold truncate max-w-[250px]">{title}</h2>
      <div className="flex items-center justify-center bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] rounded-full p-[0.1rem] text-primary text-center">
        <h3 className="flex space-x-1 bg-gradient-to-r from-[#FDE3F4] to-[#EEE1F7] dark:from-[#260C1E] dark:to-[#180B20] rounded-full py-2 px-[10px] text-primary font-semibold">
          <span className="bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] inline-block text-transparent bg-clip-text text-nowrap dark:text-white">{`${price} USDC`}</span>
        </h3>
      </div>
    </div>
  );
}
